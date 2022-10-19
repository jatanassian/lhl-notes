# Outlines

### Objects are a data structure

- Data types (primitives): String, Number, Boolean, Null, Undefined, BigInt, Symbol

```js
// replace the emptyObject by emptyArray, emptyString...
if (emptyObject) {
  console.log("This is NOT empty");
} else {
  console.log("This is empty");
}
```

- Objects (and arrays) are data structures
- They are used to store data

```js
const dogName = "Kimi";
const dogAge = 2;
const dogColor = "black and white";

const dogArray = ["Kimi", 2, "black and white"];

const dog = {
  name: "Kimi",
  age: 2,
  color: "black and white",
};

const listOfDogs = [dog, otherDog];
```

### How to access values inside an object

```js
console.log(dog.name); // dot syntax
console.log(dog[name]); // error name not defined
console.log(dog["name"]); // square bracket syntax

const key = "color";
console.log(dog[key]); // black and white
```

- Square brackets act like evaluators
- Dot syntax doesn't work with numbers, strings containing spaces, special characters

```js
console.log(dog.👋) // Doesn't work
console.log(dog.10) // Desn't work
```

### Objects = references

```js
const obj1 = { a: 1 };
const obj3 = obj1;
obj1.a = 999;
console.log(obj1, obj3);

const obj2 = { a: 999 };
console.log(obj1 === obj2); // false
```

Use [https://pythontutor.com/](Python Tutor) to help visualize

### Navigating inside complicated/deep objects

```js
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
```
