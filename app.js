const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Jenkins!");
}).listen(8080);

console.log("App running on port 8080");
