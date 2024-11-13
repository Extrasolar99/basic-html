//console.log("Hello from app.js!");


// const hello = "Hello";
// let js = "JavaScript";

// js = js;

// console.log(hello + " " + js);
// console.log(`${hello} ${js}`.toUpperCase());

// const numbers = [2, 3, 6, 7, 9];

// for (const num of numbers) {
//     console.log(num);
// }
// console.log(numbers);
//console.log(numbers[2]);

// numbers[3] = 10;
// numbers[3] = "Kak";

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

//numbers.forEach(num => console.log(num));

// const doubledNumbers = numbers.map(num => num * 2);

// doubledNumbers.forEach(num => console.log(num));


// const personJohn = {
//     name: "John",
//     age: 17,
//     city: "New York"
// }

// const { name, age, city } = personJohn;
// console.log(age);


// console.log(personJohn.name);

// for (const [key, value] of Object.entries(personJohn)) {
    //     console.log(`${key} = ${value}`);
    // }
    
// if (personJohn.age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// function add(a, b) {
//     return a + b;
// }

// const add = function (a, b) {
//     return a + b;
// }

// const addArrow = (a, b) => (c, d) => a + b + c + d;


// let num1 = 1
// let num2 = 2

// function test(num3, num4) {
//     return num1 + num2 + num3 + num4
// }

// console.log(test(3, 4))


// const add_ = function (a, b) {
//     return function add__ (c, d) {
//         return a + b + c + d;
//     }
// }

// console.log(addArrow(2, 3)(4, 5));

// function greet(age, name = "John") {
//     return `Hello, ${name} of age ${age}`;
// }

// console.log(greet(17));
// console.log(greet(17, "Doe"));

const numbers = [];

for (let i = 0; i <= 30; i++) {
    numbers.push(i);
}

// numbers.splice(9, 1)

// const fruit = ["Apple", "Orange", "Grapes"];

// fruit.splice(1, 1);

// console.log(fruit)
// delete numbers[9];
// numbers.push(31);

// for (let num of numbers) {
//     console.log(num + 2);
// }

// console.log(numbers);

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// const bool = true;
// const num = 1;

// console.log(bool == num)

//console.log(null == undefined);

// const obj1 = { name: "Jeroen" };
// const obj2 = { name: "Jeroen" };
// const obj3 = obj1;

// console.log(obj1 == obj2);
// console.log(obj1 === obj2);
// console.log(obj1 == obj3);
// console.log(obj1 === obj3);

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const jeroen = new Person("Jeroen", 34);
// console.log(jeroen);

// class Employee extends Person {
//     constructor(name, age, jobTitle) {
//         super(name, age);
//         this.jobTitle = jobTitle;
//     }
// }

// import { subtract, add, multiply, globalVariable } from './math.js';

// console.log(subtract(globalVariable, 2));
// console.log(multiply(globalVariable, 2));
// console.log(add(globalVariable, 2));