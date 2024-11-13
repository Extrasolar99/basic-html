console.log("Hello from script.js!");

//console.log(document)

let nameInput = document.getElementById("nameInput");
let greetButton = document.getElementById("greetButton");
let nameDisplay = document.getElementById("nameDisplay");

function greet() {
    const name = nameInput.value;
    nameDisplay.innerHTML = name;
    nameInput.value = "";
}

greetButton.addEventListener('click', () => {
    greet();
});

nameInput.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.key === "Enter") {
        greet();
    }
});


let ageInput = document.getElementById("ageInput");
let ageButton = document.getElementById("ageButton");
let ageDisplay = document.getElementById("ageDisplay");

ageButton.addEventListener('click', () => {
    let age = Number(ageInput.value) + 7;
    ageDisplay.innerHTML = age;
});

// let classes = document.getElementsByClassName("container");
// console.log(classes);

const calcButtons = document.querySelectorAll('.calc-button');
const calcDisplay = document.getElementById("calcDisplay");
const resultDisplay = document.getElementById("resultDisplay");
let currentInput = "";
let operator = "";
let first = "";
let second = "";

calcButtons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
    
        if (value === "=") {
            second = currentInput;
            const result = calculate(first, second, operator);
            calcDisplay.value = result;
            resultDisplay.innerHTML = result;
            currentInput = result;
            first = "";
            second = "";
            operator = "";
        } else if (value === "C") {
            currentInput = "";
            operator = "";
            first = "";
            second = "";
            calcDisplay.value = "";
            resultDisplay.innerHTML = "";
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (first === "") {
                first = currentInput;
                operator = value;
                currentInput = "";
            } else {
                second = currentInput;
                const result = calculate(first, second, operator);
                first = result;
                operator = value;
                currentInput = "";
                calcDisplay.value = result;
                resultDisplay.innerHTML = result;
            }
        } else {
            currentInput += value;
            calcDisplay.value = currentInput;
        }
    })
});

function calculate(first, second, operator) {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return second;
    }
}

// API call example

// function fetchData() {
//     const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

//     fetch(apiUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             // Process the data here
//             displayData(data);
//         })
//         .catch(error => {
//             console.error('There has been a problem with your fetch operation:', error);
//         });
// }