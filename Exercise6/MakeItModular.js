var FilteredLSModule = require("./FilteredLSModule");

var inputDirectory = process.argv[2]
var fileExtension = process.argv[3]

FilteredLSModule(inputDirectory, fileExtension, 
    function (err, files) {
        if(err)
            Console.error(err)

        files.forEach(function(file) {
            console.log(file)
        }, this);
})

// Actual Solution
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]
// 
// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })