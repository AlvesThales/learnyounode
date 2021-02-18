const mymodule = require('./mymodule.js')
const dir = process.argv[2]
const extension = process.argv[3]

mymodule(dir, extension, printFileNames)

function printFileNames(error, data) {
    if (error) {
        return console.log(error)
    }
    data.forEach(element => console.log(element))
}