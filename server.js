

// import http from "node:http";
// import { Server } from "socket.io";
// import path from "node:path";
// import express from "express";

// async function main() {

//     const app = express();

//     app.use(express.static(path.resolve("./public")));

//     const server = http.createServer(app);

//     const io = new Server();

//     io.attach(server);

//     io.on("connection", (socket) => {

//         console.log("connection success", socket.id);

//         socket.on("user:message", (data) => {

//             console.log("from socket", data);

//             socket.broadcast.emit("server:message", data);

//         });

//         socket.on("user:typing", () => {

//             socket.broadcast.emit("server:typing");

//         });

//     });

//     server.listen(9000, () => {
//         console.log("http server is running AT 9000");
//     });
// }

// main();

import http from "node:http";
import path from "node:path";
import express from "express";
import { Server } from "socket.io";

const app = express();

// Serve files from the public folder
app.use(express.static(path.resolve("./public")));

// Create HTTP server
const server = http.createServer(app);

// Create Socket.IO server
const io = new Server(server);

// When a new client connects
io.on("connection", (socket) => {

    console.log("User connected:", socket.id);

    // Receive message from client
    socket.on("user:message", (data) => {

        console.log("Message received:", data);

        // Send message to all OTHER connected users
        socket.broadcast.emit("server:message", data);
    });

    // Receive typing event
    socket.on("user:typing", () => {

        // Tell other users that this user is typing
        socket.broadcast.emit("server:typing");
    });

    // When user disconnects
    socket.on("disconnect", () => {

        console.log("User disconnected:", socket.id);
    });
});

// Start server
server.listen(9000, () => {
    console.log("Server running at http://localhost:9000");
});