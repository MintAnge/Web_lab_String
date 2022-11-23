'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    toString() {
        console.log("Name: " + this.name + "    price: " + this.price)
    }
}
class shoppingCart {
    constructor() {
    this.cart = []
    }

    addProduct(name,price) {
        let p = new Product(name, price)
        this.cart.push(p)
    }

    bill() {
        let fullSum = 0;
        for (let i = 0; i < this.cart.length; i++) {
            console.log(this.cart[i].toString());
            fullSum = fullSum + this.cart[i].price
        }
        console.log("Bill full price is "+fullSum)
    }

}

let c = new shoppingCart()
c.addProduct("apple", 10)
c.addProduct("ananas", 20)
c.addProduct("duck", 100)
c.bill()


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end();
}).listen(port);
