module.exports = function (directoryName, FileExtension, callback) {

    var fs = require('fs')
    var path = require('path')

    fs.readdir(directoryName, function (err, files) {
        if(err)
            return callback(err)
            
        var matchedFiles = [];

        files.forEach(function (file) {

            if (path.extname(file) === "." + FileExtension) {
                matchedFiles.push(file)
            }
        })

        callback(null, matchedFiles)
    })
}

// Actual
// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }