const sayHello = () => {
  return "hello";
};

const sayHelloCallback = (callback) => {
  console.log(callback());
};

sayHelloCallback(sayHello());
