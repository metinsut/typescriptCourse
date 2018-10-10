export default this;

let myName = "John Doe";
let myNumber = 31;

const func = (): string => {
  return myName;
};

const sayHello = (): void => {
  console.log("Hello");
};

// console.log(func());
// sayHello();

const multiple = (value1: number, value2: number): number => {
  return value1 * value2;
};

// console.log(multiple(5,2));

let myFunc: (val1: number, val2: number) => number;

// myFunc = sayHello;
// myFunc();

myFunc = multiple;
// console.log(myFunc(10,2));

let myUser: { name: string; age: number } = {
  name: "John Doe",
  age: 31
};

// myUser = {
//   a: "foo",
//   b: 0
// };

console.log(myUser);
