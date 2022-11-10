const randomArray = [1, "dog", 2, "cat", 3, 4, "bird", 5];

const filter = (array) => {
  for (const element of array) {
    if (typeof element === "number") {
      console.log(element);
    }
  }
};

// filter(randomArray);

const filterCallback = (array, callback) => {
  for (const element of array) {
    if (callback(element)) {
      console.log(element);
    }
  }
};

const isNumber = (element) => {
  return typeof element === "number";
};

filterCallback(randomArray, isNumber);
8;
