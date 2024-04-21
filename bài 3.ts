// Định nghĩa lớp Person
class Person {
    // Thuộc tính
    protected name: string;

    // Constructor
    constructor(name: string) {
        this.name = name;
    }

    // Phương thức in thông tin
    public displayInfo(): void {
        console.log("Name: " + this.name);
    }
}

// Định nghĩa lớp Student kế thừa từ lớp Person
class Student extends Person {
    // Thuộc tính mới
    private id: number;

    // Constructor
    constructor(name: string, id: number) {
        super(name); // Gọi constructor của lớp cha
        this.id = id;
    }

    // Override phương thức displayInfo để in thông tin của Student
    public displayInfo(): void {
        super.displayInfo(); // Gọi phương thức displayInfo của lớp cha
        console.log("ID: " + this.id);
    }
}

// Tạo một đối tượng từ lớp Student
let student: Student = new Student("Duy Hien", 123456);
// Gọi phương thức displayInfo để in thông tin của student
student.displayInfo();
