export default this;

class Person {
  name: string;
  private type: string = "secret";
  protected age: number = 31;
  constructor(name: string, public username: string) {
    this.name = name;
  }
  run = () => {
    console.log(this.type);
  };
  private run1(type: string) {
    this.type = type;
  }
  run2 = () => {
    this.run1("gizli");
    console.log(this.type);
  };
}

const person = new Person("John", "mtnsut");
// console.log(person);
// person.run();

class person1 extends Person {
  name: string = "John";
  constructor(username: string) {
    super(name, username);
  }
  run3 = () => {
    console.log(this.name + " run3");
  };
  static run4 = () => {
    console.log("run4");
  };
}

const p2 = new person1("username");

// p2.run3();
// person1.run4();
// console.log(p2.name);

let asd: string = "asd";

class test {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  static getInfo() {
    return "get info";
  }
}

console.log(test.getInfo())
