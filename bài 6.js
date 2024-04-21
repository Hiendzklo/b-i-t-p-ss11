"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    displayInfo() {
        this.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}
// Tạo một đối tượng từ lớp Electronics
let phone = new Electronics("Smartphone", 500, "Samsung");
// In ra thông tin của đối tượng vừa khởi tạo
phone.displayInfo();
