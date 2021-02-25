const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 8000;

http.createServer((req,res) => {
    fs.readFile('./rockpaperscissor.html', 'utf-8', (err,data) => {
        res.writeHead(200, { 'content-type' : 'text/html'});
        res.end(data);
    })
}).listen(PORT , 'localhost', () => {
    console.log('game is running');
});