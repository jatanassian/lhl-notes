# Breakout - Callbacks

## What are callabcks?

- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.

## Basic examples

```js
const doSomething = (something) => {
  console.log(typeof something); // Add that log later to check difference passing/calling
  something();
};

const sayHello = () => {
  console.log("Hello!!"); // Make it a one liner later
};

doSomething(sayHello()); // Do this one at first to explain difference between calling and passing a function
doSomething(sayHello);
```

- A callback function can be passed with other arguments/parameters

```js
const greetings = (name = stranger) => {
  console.log(`Hello, ${name}`);
};

const sayBye = (name) => {
  console.log(`Goodbye, ${name}`);
};

const doSomethingWithStuff = (something, stuff) => {
  something(stuff);
};

doSomethingWithStuff(greetings, "Julien");
doSomethingWithStuff(sayBye, "Julien");
```

```js
const doMaths = (a, b) => {
  console.log(a + b);
};

doMaths(1, 2); // Only for one operation, not practical

const addition = (x, y) => {
  return x + y;
};

const substraction = (x, y) => {
  return x - y;
};

const multiplication = (x, y) => {
  return x * y;
};

const division = (x, y) => {
  return x / y;
};

const doMathsCallback = (a, b, callback) => {
  console.log(callback(a, b));
};

doMathsCallback(2, 2, division);
```

## Real examples using callbacks

### Array.map

- Build our own map function

```js
const numbers = [1, 2, 3, 4, 5];

const myOwnMap = (array) => {
  const result = [];

  for (const element of array) {
    result.push(element * 2);
  }

  return result;
};

console.log(myOwnMap(numbers));
```

- Implement the callback logic

```js
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
```

- The actual .map function

```js
const numbersByTwo = (array) => {
  // return array.map(element => element * 2);
  return array.map(multiplyByTwo);
};

// const numbersByTwo = (array) => array.map(multiplyByTwo);

console.log(numbersByTwo(numbers));
```

### Array.filter
