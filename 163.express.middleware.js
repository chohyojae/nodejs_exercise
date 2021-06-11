const { next } = require('cheerio/lib/api/traversing');
const { response } = require('express');
const express = require('express');

const app = express();

app.use((request, response, next) => {
    console.log('첫 번째 미들웨어에 요청.');
    request.user1 = '철수';
    next();
});

app.use((request, response, next) => {
    console.log('두 번째 미들웨어에 요청.');
    request.user2 = '영희';
    next();
});

app.use((request, response, next) => {
    console.log('세 번째 미들웨어에 요청.');
    
    response.writeHead(200, {'Content-Type' : 'text/html;charset=utf8'});


    response.write(`<div><p>${request.user1}</p></div>`);
    response.write(`<div><p>${request.user2}</p></div>`);
    response.end('<h1>서버에서 응답한 결과</h1>');

});

app.listen(5000, () => console.log('listening..'));