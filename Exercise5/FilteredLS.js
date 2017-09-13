var fs = require('fs');
var path = require('path');
var inputDirectory = process.argv[2]
var fileType = process.argv[3]


function GetAllDirectoriesInLocation(callback) {
   var directories = fs.readdir(inputDirectory, callback(files))
}

function PrintAllDirectories(err, listOfDirectories) {
   
    if(err) {
     console.log('Unknown Error occured when reading from the directory ${inputDirectory}')
   }

    for (var i = 0; i < listOfDirectories.length; i++) {
        console.log(listOfDirectories[i])
    }
}

GetAllDirectoriesInLocation()
