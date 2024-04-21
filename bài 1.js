"use strict";
// Định nghĩa lớp Employee
class Employee {
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
class Manager extends Employee {
    // Constructor
    constructor(name, company, phone, teamSize) {
        super(name, company, phone); // Gọi constructor của lớp cha
        this.teamSize = teamSize;
    }
    // Override phương thức printInfo để bao gồm teamSize
    printInfo() {
        super.printInfo(); // Gọi phương thức printInfo của lớp cha
        console.log("Team Size: " + this.teamSize);
    }
}
// Lớp Main để kiểm tra
class Main {
    static main() {
        // Tạo một đối tượng Employee
        let employee = new Employee("Duy Hien", "Hien Company", "123456789");
        // In thông tin của employee
        console.log("Employee Information:");
        employee.printInfo();
        // Tạo một đối tượng Manager
        let manager = new Manager("Huyen Thu", "Thu Corporation", "987654321", 10);
        // In thông tin của manager
        console.log("\nManager Information:");
        manager.printInfo();
    }
}
// Gọi hàm main để chạy chương trình
Main.main();
