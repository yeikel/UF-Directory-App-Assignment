const http = require('http');
const port = 8080;
const listings = require("./listings.json");

http.createServer((req, res) => {

    if (req.url === "/listings") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(listings));
        return;
    }
    
    res.writeHead(404, {'Content-Type': 'application/text'});
    res.end("Bad gateway error");

}).listen(port, '127.0.0.1');

console.log('Server listening on: http://127.0.0.1:' + port);
