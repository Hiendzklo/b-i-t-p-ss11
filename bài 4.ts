// Định nghĩa lớp Vehicle
class Vehicle {
    // Thuộc tính
    protected name: string;
    protected speed: number;
    protected id: number;

    // Constructor
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    // Phương thức giảm tốc
    protected slowDown(value: number): void {
        this.speed -= value;
    }

    // Phương thức tăng tốc
    protected speedUp(value: number): void {
        this.speed += value;
    }

    // Phương thức in tốc độ hiện tại
    protected showSpeed(): void {
        console.log(`Current speed of ${this.name}: ${this.speed} km/h`);
    }
}

// Định nghĩa lớp Bicycle kế thừa từ lớp Vehicle
class Bicycle extends Vehicle {
    // Thuộc tính mới
    private gear: number;

    // Constructor
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id); // Gọi constructor của lớp cha
        this.gear = gear;
    }

    // Phương thức tăng tốc của xe đạp
    public speedUpBicycle(value: number): void {
        super.speedUp(value); // Gọi phương thức tăng tốc của lớp cha
    }

    // Phương thức giảm tốc của xe đạp
    public slowDownBicycle(value: number): void {
        super.slowDown(value); // Gọi phương thức giảm tốc của lớp cha
    }

    // Phương thức in thông tin của xe đạp
    public showInfo(): void {
        super.showSpeed(); // Gọi phương thức in tốc độ của lớp cha
        console.log(`Gear: ${this.gear}`);
    }
}

// Tạo một đối tượng từ lớp Bicycle
let bicycle: Bicycle = new Bicycle("Bicycle", 20, 1, 5);

// Tăng tốc độ của xe đạp lên 10 km/h
bicycle.speedUpBicycle(10);

// In ra thông tin hiện tại của xe đạp
bicycle.showInfo();
