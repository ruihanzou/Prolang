/*var arr = [1, 2, 3];
arr.forEach(function (item) {
   console.log(item)
});

console.log('This is a synchronous example')*/


/*var fs = require('fs')
fs.readFile('my_file.txt', function onFileData(err, data) {
    console.log('');
    console.log(data.toString());
});
console.log('reading file....')*/


/*
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime(); 
    while (new Date() < ms) {

    }
    console.log("finished function");
}

function clickHandler() {
    console.log("click event");
}

document.addEventListener("click", clickHandler);

waitThreeSeconds();
console.log('finished execution')*/

/*function greet(callback) {
    console.log('Hello');
    callback();
}

greet(function() {
    console.log('The callback is invoked!')
});

greet(function() {
    console.log('A different callback is invoked')
});*/


//synchronous version

/*let resultA, resultB, resultC;

function add(num1, num2) {
    return num1  + num2;
}

resultA = add(1, 2); //you get resultA = 3
resultB = add(resultA, 3); //you get resultB = 6 immediately
resultC = add(resultB, 4); //you get resultC = 10 immediately

console.log('total' + resultC);
console.log(resultA, resultB, resultC); */

//callback hell
/*let resultA1, resultB1, resultC1;

function addAsync(num1, num2, callback) {
    return $.getJSON('http://www.example.com', {
        num1: num1,
        num2: num2
    }, callback)
}

addAsync(1, 2, success => {
  //callback 1
  resultA1 = success; //you get result = 3 here

  addAsync(resultA1, 3, success => {
    //callback 2
    resultB1 = success; //you get result = 6 here
    
    addAsync(resultB!, 4, success => {
        //callback 3
        resultC1 = success; //you get result = 10 here

        console.log('total: ' + resultC1); 
        console.log(resultA1, resultB1, resultC1); 
    });
  });
});
*/

