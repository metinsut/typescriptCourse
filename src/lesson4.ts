export default this;

type bank = {
  money: number;
  deposit: (val: number) => void;
};

type self = {
  name: string;
  bankAccount: bank;
  hobbies: string[];
};

let bankAccount: bank = {
  money: 2000,
  deposit: (value: number): void => {
    bankAccount.money += value;
  }
};

let mySelf: self = {
  name: "John Doe",
  bankAccount: bankAccount,
  hobbies: ["code", "music"]
};

mySelf.bankAccount.deposit(3000);
console.log(mySelf.bankAccount.money);
