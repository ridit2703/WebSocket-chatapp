import http from "node:http"

async function main(){
    const server=http.createServer();

    server.listen(9000,()=>{
        console.log("http server is running at PORT 9000")
    })

}
main()