const http = require('http');
const fs = require('fs');

const instance = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://' + request.headers.host);
    //console.log(url);

    let pathname = url.pathname;

    switch (request.method) {
        case 'GET':
            fs.readFile('nodejs_example_200-master/part4_library_advanced/140_example_2.html', (error, data) => {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
                console.log('method: ' + request.method);
                console.log(url);
            })
            break;
        case 'POST':
            request.on('data', data => {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
                console.log('method: ' + request.method);
                console.log(url);
            })
            break;
    }
});

instance.listen(5000, () => console.log('Listening...'));