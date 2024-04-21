"use strict";
class Account1 {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Gửi ${amount} vào tài khoản ${this.accountNumber}.`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Số dư không đủ trong tài khoản ${this.accountNumber}.`);
        }
        else {
            this.balance -= amount;
            console.log(`Rút ${amount} từ tài khoản ${this.accountNumber}.`);
        }
    }
}
class CheckingAccount extends Account1 {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            console.log(`Rút ${amount} từ tài khoản ${this.accountNumber}.`);
        }
        else {
            console.log(`Số tiền rút vượt quá hạn mức cho phép trong tài khoản ${this.accountNumber}.`);
        }
    }
}
// Tạo một tài khoản từ lớp CheckingAccount
let checkingAccount = new CheckingAccount("Duy Hien12345", 1000, 500);
// Rút quá số tiền trong tài khoản
checkingAccount.withdraw(1500);
// Rút vượt quá hạn mức cho phép
checkingAccount.withdraw(3000);
