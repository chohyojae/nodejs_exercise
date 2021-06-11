const http = require('http');

const instance = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' : ['soju = grilledPork', 'beer = chicken'],
    });
    response.end(`<hl1>${request.headers.cookie}</h1>`);
});

instance.listen(5000, () => console.log('Running'));

