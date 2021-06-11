const request = require('request');
const fs = require('fs');
const iconv = require('iconv-lite');

//request('https://google.com/', 'GET', (error, response, body) => console.log(body));

request({uri : 'http://google.com/search', method : 'GET', qs: {q: '방이동 맛집'}}, (error, response, body) => {
    const decodedBody = iconv.decode(body, 'UTF-8');
    fs.writeFile('./searchResult.html', body, () => {
        console.log("written.");
    })
});

