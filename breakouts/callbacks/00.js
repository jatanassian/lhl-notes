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
