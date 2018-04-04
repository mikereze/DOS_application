'use-strict'
var express = require('express');
var app = express();
app.use(express.static('public'));

var counter = 1;
app.get("/dosresponse", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var result = getMaxPrime(counter);

    res.send("<h>The Maximum Prime </h> "+"of " +parseInt(counter)+" is "+parseInt(result));
    console.log("Request Number "+counter);
    counter+=1;
});
function isPrime(num){
    for(var x = 2; x< num;x++){
        if(num % x == 0){
            return false;
        }
    }
    return true;
}
function getMaxPrime(num2){
    for(var y = num2;y>0;y--){
        if(isPrime(y)){
           if(num2%y == 0){
              return y;   
        }
                
        }
    }
}
app.listen(3000);