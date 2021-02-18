const fs = require('fs')
const path = process.argv[2]
const extension = process.argv[3]

fs.readdir(path, (err, list) => {
    if (!err)
    list.forEach(item => {
        if (item.endsWith("." + extension))
        console.log(item)
    })
})