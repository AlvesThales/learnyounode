const fs = require('fs')
const path = process.argv[2]
fs.readFile(path, 'utf8', (err, str) => {
    if (!err)
    console.log(str.split('\n').length-1)
})
