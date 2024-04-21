"use strict";
// Định nghĩa lớp Vehicle
class Vehicle {
    // Constructor
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    // Phương thức giảm tốc
    slowDown(value) {
        this.speed -= value;
    }
    // Phương thức tăng tốc
    speedUp(value) {
        this.speed += value;
    }
    // Phương thức in tốc độ hiện tại
    showSpeed() {
        console.log(`Current speed of ${this.name}: ${this.speed} km/h`);
    }
}
// Định nghĩa lớp Bicycle kế thừa từ lớp Vehicle
class Bicycle extends Vehicle {
    // Constructor
    constructor(name, speed, id, gear) {
        super(name, speed, id); // Gọi constructor của lớp cha
        this.gear = gear;
    }
    // Phương thức tăng tốc của xe đạp
    speedUpBicycle(value) {
        super.speedUp(value); // Gọi phương thức tăng tốc của lớp cha
    }
    // Phương thức giảm tốc của xe đạp
    slowDownBicycle(value) {
        super.slowDown(value); // Gọi phương thức giảm tốc của lớp cha
    }
    // Phương thức in thông tin của xe đạp
    showInfo() {
        super.showSpeed(); // Gọi phương thức in tốc độ của lớp cha
        console.log(`Gear: ${this.gear}`);
    }
}
// Tạo một đối tượng từ lớp Bicycle
let bicycle = new Bicycle("Bicycle", 20, 1, 5);
// Tăng tốc độ của xe đạp lên 10 km/h
bicycle.speedUpBicycle(10);
// In ra thông tin hiện tại của xe đạp
bicycle.showInfo();
