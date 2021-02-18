const http = require('http')
const url = process.argv[2]
const bl = require('bl')

http.get(url, res => res.pipe(bl((err, data) => {
    if (err) {
        return console.log(err)
    }
    stringData = data.toString()
    console.log(stringData.length)
    console.log(stringData)
})))