var fs = require('fs')
var numberOfNewLines = undefined

function calculateNumberOfNewLines(callback) {
  fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
    if (err) {
        return console.error(err)
      }
    var fileContentsAsString = fileContents.toString();
    numberOfNewLines = parseInt(fileContentsAsString.split("\n").length) - 1;
    callback()
  })
}

function logNumberOfNewLines() {
  console.log(numberOfNewLines)
}

calculateNumberOfNewLines(logNumberOfNewLines)


// Official Solution
/*    
    var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/
