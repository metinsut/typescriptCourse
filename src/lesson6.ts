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
  private detail: string = "more info";
  constructor(username: string) {
    super(name, username);
  }
  run3 = () => {
    console.log(this.name + " run3");
  };
  private run5 = () => {
    return console.log(this.name + " run5");
  };
  run6 = () => {
    return this.run5();
  };

  set detailInfo(value: string) {
    if (value.length > 3) {
      this.detail = value;
    } else {
      this.detail;
    }
  }

  get detailInfo() {
    return this.detail;
  }
}

const p2 = new person1("username");

// p2.run3();
// console.log(p2.name);
// p2.run6();
// console.log(p2.detailInfo);
// p2.detailInfo = "Carpet";
// console.log(p2.detailInfo);

class Helpers {
  static PI: number = 3.14;
  static calcArea = (radius: number): number => {
    return Helpers.PI * radius * radius;
  };
}

// console.log(Helpers.PI);
// console.log(Helpers.calcArea(2));
