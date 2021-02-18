const http = require('http')
const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]
let count = 0;
const results = []
const bl = require('bl')


httpGet(url1)
httpGet(url2)
httpGet(url3)

function httpGet (url) {
    http.get(url, res => res.pipe(bl((err, data) => {
        if (err) {
            return console.log(err)
        }
        results.push(data.toString())
        count++

        if (count === 3) printResults()
    })))
}

function printResults() {
    results.forEach(item => console.log(item))
}