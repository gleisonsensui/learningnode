const express = require('express');

const server = express();

const HTTP_PORT = process.env.HTTP_PORT | 3001;


server.get('/', (req, res) => {
    res.sendFile('/src/views/index.html', {root: __dirname});
})

server.get('*', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.status(404)
    res.sendFile('/src/views/page-not-found.html', {root: __dirname});
})









server.listen(HTTP_PORT, () => {
    console.log(`Your server listen on port ${HTTP_PORT}`);
})











