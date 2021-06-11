const cheerio = require('cheerio');
const crawler = require('./152.crawler');

const parse = (decodedResult) => {
    const $ = cheerio.load(decodedResult);
    const titles = $('h3.r').find('a');
    for(let i=0; i<titles.length; i++) {
        const title = titles[i].text();
        console.log(title);
    }
};

crawler.crawl(parse)({q: '남한산성입구역 맛집'});