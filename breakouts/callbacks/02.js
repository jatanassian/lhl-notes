const numbers = [1, 2, 3, 4, 5];

const myOwnMap = (array) => {
  const result = [];

  for (const element of array) {
    result.push(element * 2);
  }

  return result;
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

const numbersByTwo = (array) => {
  // return array.map(element => element * 2);
  return array.map(multiplyByTwo);
};

// console.log(numbersByTwo(numbers));
