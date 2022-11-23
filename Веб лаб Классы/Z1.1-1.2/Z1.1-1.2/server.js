'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

let automobile = {

    brand: "Porshe",
    speed: 300,

    construct(brand, speed) {
        this.brand = brand
        this.speed = speed
    },
accelerate() {
    let accelSpeed = this.speed / 60
    return ("Accelerate is "+accelSpeed)
},

brake() {
    let brakeSpeed = this.speed / 100
    return("Brake is "+brakeSpeed)
},

describe() {
    return("Brand is " + this.brand + "\nSpeed is " + this.speed)
}
};

automobile.construct("Toy car", 10)
console.log(automobile.describe())
console.log(automobile.accelerate())
console.log(automobile.brake())

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end();
}).listen(port);
