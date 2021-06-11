const request = require('request');
const fs = require('fs');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');
const charset = require('charset');

const crawl = (callback) => queryString => request({
    url: 'https://www.google.com/search',
    encoding: null,
    method: 'GET',
    qs: queryString,
    timeout: 5000,
    followRedirect: true,
    maxRedirects: 10,
}, (error, response, body) => {
    if(!error && response.statusCode === 200) {
        const enc = charset(response.headers, body);
        const decodedResult = iconv.decode(body, enc);
        console.log(decodedResult);
        callback(decodedResult);
    } else {
        console.log(`error ${response.statusCode}`);
    }
});

module.exports.crawl = crawl;