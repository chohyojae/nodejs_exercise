const express = require('express');
const cookieParser = require('cookie-parser');
const { response } = require('express');

const app = express();

app.use(cookieParser());

app.get('/set', (request, response) => {
    console.log('Set Cookie');
    response.cookie('user', {
        id: '0077',
        name: 'hjcho',
        authorized: true,
    });
    response.redirect('/get');
});

app.get('/get', (request, response) => {
    console.log('Get Cookie');
    response.send(request.cookies);
});

app.listen(5000, () => {
    console.log('Server is running port 5000!');
});