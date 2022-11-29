// What is a promise?
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const consoleLogging = (string) => {
  return new Promise((resolve, reject) => {
    if (!string) {
      reject("You forgot a string!");
    } else {
      resolve(`Here is your string: ${string}`);
    }
  });
};

consoleLogging()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => {
    // Do something... (remove loading spinner for example)
  });
