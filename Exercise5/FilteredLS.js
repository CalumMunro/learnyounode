var fs = require('fs');
var path = require('path');
var inputDirectory = process.argv[2]
var localFileType = process.argv[3]

fs.readdir(inputDirectory, function PrintAllDirectories(err, files) {

    if(err) {
        console.log('Unknown Error occured when reading from the directory ${inputDirectory}')
    }

    for (var i = 0; i < files.length; i++) {

        var currentFile = files[i];

        if (path.extname(currentFile) == ('.' + localFileType)) {
            console.log(currentFile)
        }
    }
})

// Actual Solution
//
// var fs = require('fs')
// var path = require('path')      
//
// var folder = process.argv[2]     
// var ext = '.' + process.argv[3]      
//
// fs.readdir(folder, function (err, files) {       
//     if (err) return console.error(err)       
//     files.forEach(function (file) {         
//         if (path.extname(file) === ext) {           
//             console.log(file)         }       
//     })     
// })
