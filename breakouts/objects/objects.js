// Primitives: number, string, undefined, null, boolean, symbol, bigint

const emptyObject = {};
const emptyArray = [];
const emptyString = "";
const nullVariable = null;

if (emptyObject) {
  console.log("This is NOT empty");
} else {
  console.log("This is empty");
}

const dogName = "Kimi";
const dogAge = 2;
const dogColor = "black and white";

const dogArray = ["Kimi", 2, "black and white"]; // Bad

// Good
const dog = {
  name: "Kimi",
  age: 2,
  color: "black and white",
  50: "50",
  "👋": "hello",
};

const otherDog = {
  name: "Layla",
  age: 1,
  color: "brown",
};

const listOfDogs = [dog, otherDog];

// Access objects values
console.log(dog.name);
console.log(dog["name"]);

const key = "color";
console.log(dog.key); // undefined
console.log(dog[key]); // black and white

console.log(dog[50]);
console.log(dog["👋"]);

// Object = references
const obj1 = { a: 1 };
const obj3 = obj1;
obj1.a = 999;
console.log(obj1, obj3);

const obj2 = { a: 999 };
console.log(obj1 === obj2); // false

// How to navigate complicated objects
const levels = {
  one: {
    two: {
      three: {
        four: {
          five: "5th level",
        },
      },
    },
  },
};

console.log(levels.one.two.three.four.five);
const levelFour = levels.one.two.three.four;
console.log(levelFour.five);
