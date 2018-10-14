export default this;

const write = <T>(data: T): T => data;

// console.log(write("123").length);
// console.log(write<number>(123));

const result: Array<number | string> = [2, 3];
const result2: any | boolean[] = [3, 4];

result.push(44);
result.push("44");
result2.push(55);
result2.push(true);

// console.log(result);
// console.log(result2);

const print = <M>(args: M[]) => {
  args.map(item => console.log(item));
};

// print<string>(["one", "two"]);

const echo = (value: any) => value;

const echoType: <P>(data: P) => P = echo;

console.log(echo("heyyy"));
console.log(echoType(123))
