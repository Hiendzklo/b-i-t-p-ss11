class Account {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    }

    public withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log(`Insufficient funds in account ${this.accountNumber}.`);
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
        }
    }
}

class SavingsAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    public calculateInterest(): number {
        const monthlyInterest = this.balance * (this.interestRate / 100) / 12;
        console.log(`Monthly interest on account ${this.accountNumber}: ${monthlyInterest}`);
        return monthlyInterest;
    }
}

// Tạo một tài khoản từ lớp SavingsAccount
let savingsAccount = new SavingsAccount("SA12345", 1000, 5);

// Tính và in ra tiền lãi hàng tháng trong tài khoản
savingsAccount.calculateInterest();

// Gửi thêm tiền vào tài khoản và tính lại tiền lãi hàng tháng
savingsAccount.deposit(500);
savingsAccount.calculateInterest();
