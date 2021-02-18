const fs = require('fs')

const path = process.argv[2]

const buf =  fs.readFileSync(path)
const str = buf.toString()
ar = str.split('\n')
console.log(ar.length-1)