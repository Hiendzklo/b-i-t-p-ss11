// Định nghĩa lớp Employee
class Employee {
    // Thuộc tính
    public name: string;
    protected company: string;
    private phone: string;
    
    // Constructor
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    
    // Phương thức in thông tin
    public printInfo(): void {
        console.log("Name: " + this.name);
        console.log("Company: " + this.company);
        console.log("Phone: " + this.phone);
    }
}

// Định nghĩa lớp con Manager kế thừa từ lớp Employee
class Manager extends Employee {
    // Thuộc tính mới
    private teamSize: number;
    
    // Constructor
    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone); // Gọi constructor của lớp cha
        this.teamSize = teamSize;
    }
    
    // Override phương thức printInfo để bao gồm teamSize
    public printInfo(): void {
        super.printInfo(); // Gọi phương thức printInfo của lớp cha
        console.log("Team Size: " + this.teamSize);
    }
}

// Lớp Main để kiểm tra
class Main {
    public static main(): void {
        // Tạo một đối tượng Employee
        let employee: Employee = new Employee("Duy Hien", "Hien Company", "123456789");
        // In thông tin của employee
        console.log("Employee Information:");
        employee.printInfo();
        
        // Tạo một đối tượng Manager
        let manager: Manager = new Manager("Huyen Thu", "Thu Corporation", "987654321", 10);
        // In thông tin của manager
        console.log("\nManager Information:");
        manager.printInfo();
    }
}

// Gọi hàm main để chạy chương trình
Main.main();
