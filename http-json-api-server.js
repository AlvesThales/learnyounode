const http = require('http')
const url = require('url');
const port = process.argv[2]
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        return res.end('Only GET method allowed')
    }
    let uri = new URL(req.url, 'http://test.com')
    let result = {}
    let date = new Date(uri.searchParams.get('iso'))
    switch (uri.pathname) {
        case "/api/parsetime":
            res.writeHead(200, { 'Content-Type': 'application/json' });
            result.hour = date.getHours();
            result.minute = date.getMinutes();
            result.second = date.getSeconds();
            res.end(JSON.stringify(result))
            break;
        case "/api/unixtime":
            res.writeHead(200, { 'Content-Type': 'application/json' });
            result.unixtime = date.getTime()
            res.end(JSON.stringify(result))
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('Not Found')
        
    }
})

server.listen(port)