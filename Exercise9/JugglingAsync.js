var http = require("http");
var bufferList = require("bl");

var responses = [];
var count = 0;

function processUrlResponse(index) {

http.get(process.argv[index], function(response) {
    response.pipe(bufferList(function (err, data){
        responses[index] = data.toString("utf8");
        if(count == 2){
            console.log(responses[2]);
            console.log(responses[3]);
            console.log(responses[4]);
        }
        count++;
    }))
})
}

processUrlResponse(2);
processUrlResponse(3);
processUrlResponse(4);

// Actual

// var http = require('http')                                
// var bl = require('bl')                                    
// var results = []                                          
// var count = 0                                             
                                                          
// function printResults () {                                
//   for (var i = 0; i < 3; i++) {                           
//     console.log(results[i])                               
//   }                                                       
// }                                                         
                                                          
// function httpGet (index) {                                
//   http.get(process.argv[2 + index], function (response) { 
//     response.pipe(bl(function (err, data) {               
//       if (err) {                                          
//         return console.error(err)                         
//       }                                                   
                                                          
//       results[index] = data.toString()                    
//       count++                                             
                                                          
//       if (count === 3) {                                  
//         printResults()                                    
//       }                                                   
//     }))                                                   
//   })                                                      
// }                                                         
                                                          
// for (var i = 0; i < 3; i++) {                             
//   httpGet(i)                                              
// }                                                         