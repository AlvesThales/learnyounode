const net = require('net')
const server = net.createServer(function(socket){
 
    let date = new Date()
    let result = date.toISOString().slice(0,10)
    result += " " + date.toLocaleTimeString().slice(0,5) + "\n"
    socket.end(result)
})
const port = process.argv[2]
server.listen(port)