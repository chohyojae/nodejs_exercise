const { next } = require('cheerio/lib/api/traversing');
const { response } = require('express');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const path = `${__dirname}/nodejs_example_200-master/part4_library_advanced/login`;

console.log(path);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path));

app.use((request, response) => {

    const userId = request.body.userid || request.query.userid;
    const userPassword = request.body.password || request.query.password;
        
    response.writeHead(200, {'Content-Type' : 'text/html;charset=utf8'});
    response.write(`<div><p>${userId}</p></div>`);
    response.write(`<div><p>${userPassword}</p></div>`);
    response.end(JSON.stringify(request.body, null, 2));
    
    console.log(request.body);
});

app.listen(5000, () => console.log('listening..'));