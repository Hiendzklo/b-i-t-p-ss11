"use strict";
// Định nghĩa lớp Person
class Person {
    // Constructor
    constructor(name) {
        this.name = name;
    }
    // Phương thức in thông tin
    displayInfo() {
        console.log("Name: " + this.name);
    }
}
// Định nghĩa lớp Student kế thừa từ lớp Person
class Student extends Person {
    // Constructor
    constructor(name, id) {
        super(name); // Gọi constructor của lớp cha
        this.id = id;
    }
    // Override phương thức displayInfo để in thông tin của Student
    displayInfo() {
        super.displayInfo(); // Gọi phương thức displayInfo của lớp cha
        console.log("ID: " + this.id);
    }
}
// Tạo một đối tượng từ lớp Student
let student = new Student("Duy Hien", 123456);
// Gọi phương thức displayInfo để in thông tin của student
student.displayInfo();
