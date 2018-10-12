import { calcSquare } from "./lesson8";

export default this;

namespace MyMath {
  export const PI: number = 3.14;

  export const calcArea = (radius: number): number => {
    return PI * radius * radius;
  };
}
// console.log(MyMath.calcArea(5));
// console.log(MyMath.PI);

console.log(calcSquare.square(4,5))