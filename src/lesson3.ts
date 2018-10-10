export default this;

type type1 = { data: number[]; output: (all: boolean) => number[] };

let complex: type1 = {
  data: [100, 3.99, 10],
  output: (all: boolean): number[] => {
    return this.data;
  }
};

let complex2: type1 = {
  data: [0, 1],
  output: (a): number[] => {
    return this.data;
  }
};

//union types

let myType: number | string;
myType = 22;

// console.log(myType)

function error(message: string): never {
  throw new Error(message);
}

// null
let beNull = 12;
beNull = null;
console.log(beNull);

let beUndefined;
console.log(beUndefined);
