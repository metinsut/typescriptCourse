export default this;

interface NamedPerson {
  name: string;
  age?: number;
  [propName: string]: any;
}

const person = (value: NamedPerson) => {
  return "Hello " + value.name;
};

const personAge = (value: NamedPerson) => {
  return "Hello " + value.name + " you are " + value.age + " years old.";
};

const personArray = (value: NamedPerson) => {
  return value.books;
};

const newPerson = {
  name: "John",
  books: ["history", 31]
  // age: 31
};

class Person implements NamedPerson {
  name: string;
  run(lastname: string) {
    console.log(this.name + " " + lastname);
  }
}

const p1 = new Person();
p1.name = "John";
// p1.run("Doe");
// console.log(personArray(newPerson));

interface funcTest {
  (value1: number, value2: number): number;
}

const calcSum: funcTest = (val1: number, val2: number) => val1 + val2;

// console.log(calcSum(2, 3));
