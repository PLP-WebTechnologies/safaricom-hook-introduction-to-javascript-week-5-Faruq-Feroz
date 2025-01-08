// Part 1: JavaScript Basics

// Variables and Data Types
let name = "Hassan faruq"; // string
let age = 21; // number
let isStudent = true; // boolean
let hobbies = ["reading", "coding", "traveling"]; // array
let person = { firstName: "Hassan", lastName: "Faruq", age: 21 }; // object

// Log variable values and types to the console
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators: Simple Calculator
document.getElementById("calculate-btn").addEventListener("click", function() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent = "Please enter valid numbers!";
    return;
  }

  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Division by zero is not allowed!";
      break;
    default:
      result = "Invalid operation!";
  }

  document.getElementById("result").textContent = `Result: ${result}`;
});

// Functions: greetUser
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

// Display greeting message
const greetingElement = document.createElement("h2");
greetingElement.textContent = greetUser("Hassan");
document.getElementById("dynamic-content").appendChild(greetingElement);

// Part 2: JavaScript Control Structures

// If Statements: Voting Eligibility
document.getElementById("check-eligibility-btn").addEventListener("click", function() {
  const userAge = parseInt(prompt("Enter your age:"));

  if (!isNaN(userAge)) {
    const message = userAge >= 18
      ? "You are eligible to vote."
      : "You are not eligible to vote yet.";
    document.getElementById("eligibility").textContent = message;
  } else {
    document.getElementById("eligibility").textContent = "Invalid input. Please enter a valid age.";
  }
});

// Loops: Display numbers 1 to 10
const numberList = document.createElement("ol");
for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = i;
  numberList.appendChild(listItem);
}
document.getElementById("numbers-list").appendChild(numberList);

// Part 3: Introduction to the DOM

// Changing HTML structure and content
// Change the heading text
const heading = document.querySelector("h1");
heading.textContent = "JavaScript in Action!";

// Add dynamic content to the div
const dynamicContentDiv = document.getElementById("dynamic-content");
const newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContentDiv.appendChild(newParagraph);
