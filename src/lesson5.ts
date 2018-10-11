export default this;

const sumFunc = (number1: number, number2: number): number => number1 + number2;

// console.log(sumFunc(2, 2));

const countDown = (start: number = 5): void => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log("Done! ", start);
};

countDown();
