const name = "James";
const person = { first: name };
console.log(person);

const sayHelloLinting = (fName) => {
  console.log(`Hello liniting, ${fName}`);
  console.log("test");
};

sayHelloLinting("James");
