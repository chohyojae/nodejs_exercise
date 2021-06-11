const { next } = require('cheerio/lib/api/traversing');
const { response } = require('express');
const express = require('express');

const app = express();

const path = `${__dirname}/nodejs_example_200-master/part4_library_advanced/multimedia`;
console.log(path);
app.use(express.static(`${__dirname}/nodejs_example_200-master/part4_library_advanced/multimedia`));

app.use((request, response) => {
        
    response.writeHead(200, {'Content-Type' : 'text/html;charset=utf8'});

    response.end('<img src="/newyork.jpg" width="100"/>');
});

app.listen(5000, () => console.log('listening..'));