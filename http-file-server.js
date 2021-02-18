const http = require('http')
const fs = require('fs')
const port = process.argv[2]
const path = process.argv[3]
const server = http.createServer((request, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    let buf = fs.createReadStream(path)
    buf.pipe(res)
})

server.listen(port)