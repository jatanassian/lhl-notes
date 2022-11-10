const numbers = [1, 2, 3, 4, 5];

const myOwnMap = (array) => {
  for (const element of array) {
    console.log(element * 2);
  }
};

// myOwnMap(numbers)

const myOwnCallbackMap = (array, callback) => {
  for (const element of array) {
    // console.log(element * 2);
    console.log(callback(element));
  }
};

const multiplyByTwo = (element) => {
  return element * 2;
};

myOwnCallbackMap(numbers, multiplyByTwo);

// IF THEY KNOW ARRAY.MAP

const numbersByTwo = (array) => {
  // return array.map(element => element * 2);
  return array.map(multiplyByTwo);
};

// console.log(numbersByTwo(numbers));
