var allValues = process.argv.slice(2);

var totalAllValues = 0;
var counter = 0;

while (counter < allValues.length) {
    totalAllValues = totalAllValues + parseInt(allValues[counter]);
    counter ++;
}

console.log(totalAllValues);

// Official Solution

/*
var result = 0

    for (var i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }

    console.log(result);
*/