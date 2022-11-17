const doSomething = (something) => {
  something();
};

const sayHello = () => {
  console.log("Hello!!"); // Make it a one liner later
};

// doSomething(sayHello);

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
