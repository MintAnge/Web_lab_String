'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
class Automobile {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }
    accelerate() {
        let accelSpeed = this.speed / 60
        console.log("Accelerate is " +accelSpeed)
    }

    brake() {
        let brakeSpeed = this.speed / 100
        console.log("Brake is " + brakeSpeed)
    }
    describe() {
        console.log("Brand is " + this.brand + "\nSpeed is " + this.speed)
    }
}
let auto = new Automobile("porshe", 300)
    auto.accelerate();
    auto.brake();
auto.describe();


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end();
}).listen(port);
