const http = require('http');

const instance = http.createServer((req, res) => {
    if(req.headers.cookie) {
        const cookie = req.headers.cookie.split(';').map((element) => {
            console.log(element);
            const keyVal = element.split('=');
            return {name : keyVal[0], value : keyVal[1]};
        });
        
        res.end(`Cookie: <h1>${JSON.stringify(cookie)}</h1>`);
    } else {
        res.writeHead(200, {
            'Content-Type' : 'text/html',
            'Set-Cookie' : ['soju = grilledPork', 'beer = chicken']
        });
        res.end(`<h1>쿠키 생성함</h1>`);
    };
});

instance.listen(5000, () => console.log('Running'));