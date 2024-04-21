"use strict";
/*
    Access modifier protected được sử dụng để chỉ ra rằng thuộc tính hoặc phương thức chỉ có thể truy cập từ các lớp con
    hoặc từ cùng một gói. Nó không thể truy cập từ bên ngoài của gói hoặc từ các lớp không phải là lớp con.

    Access modifier private giới hạn việc truy cập thuộc tính hoặc phương thức chỉ cho phép từ bên trong cùng một lớp.
    Nó không thể truy cập từ bên ngoài của lớp đó, bao gồm cả các lớp con.
*/
// Lớp cha
class Parent {
    constructor(protectedVariable, privateVariable) {
        this.protectedVariable = protectedVariable;
        this.privateVariable = privateVariable;
    }
    protectedMethod() {
        console.log("This is a protected method in the parent class");
    }
    privateMethod() {
        console.log("This is a private method in the parent class");
    }
    displayVariables() {
        console.log(`Protected variable: ${this.protectedVariable}`);
        console.log(`Private variable: ${this.privateVariable}`);
    }
    callProtectedMethod() {
        this.protectedMethod();
    }
    callPrivateMethod() {
        this.privateMethod();
    }
}
// Lớp con kế thừa từ lớp cha
class Child extends Parent {
    constructor(protectedVariable, privateVariable) {
        super(protectedVariable, privateVariable);
    }
    accessProtected() {
        console.log(`Protected variable from child: ${this.protectedVariable}`);
        // Phương thức protectedMethod có thể được gọi từ lớp con
        this.protectedMethod();
    }
    accessPrivate() {
        // Không thể truy cập vào privateVariable từ lớp con
        // console.log(`Private variable from child: ${this.privateVariable}`);
        // Không thể gọi privateMethod từ lớp con
        // this.privateMethod();
    }
}
// Tạo một đối tượng từ lớp con
let child = new Child(10, 20);
// Truy cập vào thuộc tính và phương thức của lớp cha từ lớp con
child.displayVariables(); // In ra protectedVariable và privateVariable
child.callProtectedMethod(); // Gọi phương thức protectedMethod
child.callPrivateMethod(); // Không thể gọi phương thức privateMethod từ bên ngoài lớp cha
// Truy cập vào thuộc tính và phương thức của lớp con
child.accessProtected(); // Truy cập vào protectedVariable và phương thức protectedMethod từ lớp con
child.accessPrivate(); // Không thể truy cập vào privateVariable và phương thức privateMethod từ lớp con
