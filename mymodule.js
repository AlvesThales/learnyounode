const fs = require('fs')
const path = require('path')

module.exports = function (dir, extension, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err)
        }       

        filteredList = list.filter(item => path.extname(item) === "." + extension)
        callback(null, filteredList)
    })
}