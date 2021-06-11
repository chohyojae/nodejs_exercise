const express = require('express');

const instance = express();

instance.get('/', (request, response) => {
    response.send("hello, world!");
});

instance.listen(5000, () => console.log("listening..."));