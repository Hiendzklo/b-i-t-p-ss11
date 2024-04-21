"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds in account ${this.accountNumber}.`);
        }
        else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
        }
    }
}
class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
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
