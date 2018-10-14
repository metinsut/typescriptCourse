export default this;

class calcSum<C extends number | string> {
  val1: C;
  val2: C;
  sum = (): number => +this.val1 + +this.val2;
}

const sumFunc = new calcSum<number>();
sumFunc.val1 = 10;
sumFunc.val2 = 20;
console.log(sumFunc.sum());

class calcMulti<A extends number | string, B extends number | string> {
  value1: A;
  value2: B;
  multi = (): number => +this.value1 * +this.value2;
}

const multiFunc = new calcMulti<number, string>();

multiFunc.value1 = 10;
multiFunc.value2 = "20";

console.log(multiFunc.multi());  
