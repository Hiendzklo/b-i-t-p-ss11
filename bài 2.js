"use strict";
// Định nghĩa lớp Employee
class Employee1 {
    // Constructor
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    // Phương thức in thông tin
    printInfo() {
        console.log("Name: " + this.name);
        console.log("Company: " + this.company);
        console.log("Phone: " + this.phone);
    }
}
// Định nghĩa lớp con Manager kế thừa từ lớp Employee
class Manager1 extends Employee1 {
    // Constructor
    constructor(name, company, phone, teamSize) {
        super(name, company, phone); // Gọi constructor của lớp cha
        this.teamSize = teamSize;
    }
    // Override phương thức printInfo để in ra tất cả thông tin
    printInfo() {
        super.printInfo(); // Gọi phương thức printInfo của lớp cha
        console.log("Team Size: " + this.teamSize);
    }
}
// Tạo một thực thể từ lớp Manager
let manager1 = new Manager1("Jane Smith", "XYZ Corporation", "987654321", 10);
// In thông tin của manager
console.log("\nManager Information:");
manager1.printInfo();
