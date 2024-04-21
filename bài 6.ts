class Product {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getDescription(): void {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
}

class Electronics extends Product {
    private brand: string;

    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }

    public displayInfo(): void {
        this.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}

// Tạo một đối tượng từ lớp Electronics
let phone = new Electronics("Smartphone", 500, "Samsung");

// In ra thông tin của đối tượng vừa khởi tạo
phone.displayInfo();
