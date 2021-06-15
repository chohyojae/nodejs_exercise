const express = require('express');
const fs = require('fs');
const multipart = require('connect-multiparty');

const app = express();

const filedir = `${__dirname}/nodejs_example_200-master/part4_library_advanced`;
const uploadDir = `${filedir}/upload`;

// app.use(multipart({
//     uploadDir
// }));

app.get('/', (request, response) => {
    fs.readFile(`${filedir}/connect-multiparty.html`, (err, data) => {
        response.send(data);
        response.end();
    });
});

// app.post('/', (request, response) => {
//     const imgFile = request.files.image;
//     const outputPath = `${uploadDir}/${Date.now()}_${imgFile.name}`;

//     console.log(outputPath);
//     console.log(request.body, request.files);

//     fs.rename(imgFile.path, outputPath, () => {
//         response.redirect('/');
//     });
// });

app.listen(5000, () => console.log('listening'));