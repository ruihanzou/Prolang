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

/*var isMomHappy = false; 

//Promise
var willIGetNewPhone = new Promise(
    function (resovle, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'iPhone',
                color: 'red'
            };
            resovle(phone); //fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); //reject
        }
    }
);

var askMon = function() {
    willIGetNewPhone
    .then(function(fulfilled) {
        console.log(fulfiled);
    })
    .catch(function(error){
        console.log(error.message);
    });
}

askMon(); */

/*let r1, r2,r3;
function addAsync(num1, num2) {
    //use ES6 fetch API, which returns a promise
    return fetch('http://www.example.com?num1=$(num1)&num2=$(num2)')
             .then(x => x.json());
}

addAsync(1, 2) 
   .then(success => {
       r1 = success;
       return r1;
   })
    .then(success => addAsync(success, 3))
    .then(success =>{
        r2 = success;
        return r2
    })
    .then(success => addAsync(success, 4))
    .then(success => {
        r3 = success;
        return r3
    })
    .then(success => {
        console.log('total: ' + success);
        console.log(r1, r2, r3)
    });*/


var sleep = function(ms) {
    var promise = new Promise(
        function (resolve, reject) {
           setTimeout(function() {
             resolve('haha');
           }, ms);
     });
    return promise; 
};

/*sleep(2000)
   .then(function(result) {
       console.log(result);
   });*/ 

/*Promise.all([sleep(10000), sleep(20000)])
       .then(function() {
           console.log('ALL DONE')
       });*/

Promise.race([sleep(10000), sleep(1000)])
       .then(function() {
           console.log('whatwhatwhat')
       });