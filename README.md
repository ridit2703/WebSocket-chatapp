# Real-Time Chat Application

A beginner-friendly **real-time chat application** built using **Node.js, Express, WebSocket-based Socket.IO communication, HTML, CSS, and JavaScript**.

This project focuses on understanding how **real-time, bidirectional communication** works between a client and a server.

## 🚀 Features

- Real-time messaging
- Bidirectional communication between client and server
- Typing indicator
- Multiple browser tabs can communicate with each other
- Socket connection handling
- Simple and responsive chat interface
- Beginner-friendly project structure

## 🛠️ Technologies Used

- **Node.js** — JavaScript runtime
- **Express.js** — HTTP server and static file serving
- **Socket.IO** — Real-time, event-based communication
- **HTML** — Application structure
- **CSS** — Styling
- **JavaScript** — Client-side logic

## 📁 Project Structure

```text
WebSocket-chatapp/
│
├── server.js
├── package.json
│
└── public/
    └── index.html
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/ridit2703/WebSocket-chatapp
```

### 2. Navigate to the project

```bash
cd WebSocket-chatapp
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

You should see:

```text
Server running at http://localhost:9000
```

### 5. Open the application

Open the following URL in your browser:

```text
http://localhost:9000
```

For testing real-time communication, open the application in **two browser tabs**.

Send a message from one tab and it will appear in the other tab in real time.

---

# 🔄 How It Works

The application uses **Socket.IO** to establish a persistent connection between the browser and the server.

The basic communication flow is:

```text
Client
   │
   │ socket.emit()
   ↓
Socket.IO Server
   │
   │ socket.broadcast.emit()
   ↓
Other Connected Clients
   │
   │ socket.on()
   ↓
Update UI
```


---

# 📌 Future Improvements

This project can be extended with:

- Usernames
- User authentication
- Private messaging
- Chat rooms
- Message timestamps
- Online/offline status
- Message history
- Database integration
- Message delivery status
- Read receipts
- File and image sharing

---

# 📚 What I Learned

The main takeaway from this project is that real-time applications are not simply about sending data quickly.

They require a communication model where the **client and server can continuously exchange events**, allowing applications to respond immediately when something happens.

Building this project helped me move from simply using Socket.IO to understanding the fundamentals behind **persistent connections, event-driven architecture, bidirectional communication, and real-time systems**.

---

## 👨‍💻 Author

**Ridit Chaudhary**

Built as a learning project to understand **Node.js, Socket.IO, WebSockets, and real-time communication**.LinkedIn: https://www.linkedin.com/in/ridit-chaudhary-6a0259217


