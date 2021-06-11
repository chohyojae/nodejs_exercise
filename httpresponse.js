const http = require("http");

const serverInstance = http.createServer( (request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("Hello, world!");
});

serverInstance.listen(5000, '127.127.127.127', () => {
    console.log("listen...");
});

// serverInstance.listen(5000, () => {
//     console.log("listen...");
// });

