const http = require('http');
const fs = require('fs');

const instance = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://' + request.headers.host);
    console.log(url);

    let pathname = url.pathname;

    switch (pathname) {
        case '/':
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write('Hello, ');
            response.end('world!');
            break;
        case '/example':
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('example');
            response.end();
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('404 error!');
    }
});

instance.listen(5000, () => console.log('Listening...'));