const numbers = [1, 2, 3, 4, 5];

const myOwnMap = (array) => {
  const result = [];

  for (const element of array) {
    result.push(element * 2);
  }

  return result;
};

console.log(myOwnMap(numbers));

const myOwnCallbackMap = (array, callback) => {
  const output = [];

  for (const element of array) {
    output.push(callback(element));
  }

  return output;
};

const multiplyByTwo = (element) => {
  return element * 2;
};

console.log(myOwnCallbackMap(numbers, multiplyByTwo));

const numbersByTwo = (array) => {
  // return array.map(element => element * 2);
  return array.map(multiplyByTwo);
};

// const numbersByTwo = (array) => array.map(multiplyByTwo);

console.log(numbersByTwo(numbers));
