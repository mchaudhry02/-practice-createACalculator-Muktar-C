// 1. Functions for each operation

// Absolute Value Calculation
function absoluteValue(num) {
  return Math.abs(num);
}

// Power Calculation
function power(base, exp) {
  return Math.pow(base, exp);
}

// Square Root Finder
function squareRoot(num) {
  return Math.sqrt(num);
}

// Maximum and Minimum Finder
function maxMin(numbers) {
  return {
    max: Math.max(...numbers),
    min: Math.min(...numbers)
  };
}

// Random Number Generator
function randomNumber(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

// Custom Rounding
function customRound(num, decimals) {
  return Number(num.toFixed(decimals));
}


// 2. Testing each function with sample inputs
console.log("Absolute Value of -45.67:", absoluteValue(-45.67));
console.log("5 to the power of 3:", power(5, 3));
console.log("Square root of 144:", squareRoot(144));
console.log("Max and Min of [3, 78, -12, 0.5, 27]:", maxMin([3, 78, -12, 0.5, 27]));
console.log("Random number between 1 and 50:", randomNumber(1, 50));
console.log("23.67891 rounded to 2 decimals:", customRound(23.67891, 2));


// 3. Calculator Program (Node.js version with prompt-sync)
const prompt = require("prompt-sync")();

function calculator() {
  console.log("\nWelcome to the Math Calculator");
  console.log("1. Absolute Value");
  console.log("2. Power");
  console.log("3. Square Root");
  console.log("4. Max & Min");
  console.log("5. Random Number Generator");
  console.log("6. Custom Rounding");
  console.log("7. Exit");

  while (true) {
    let choice = parseInt(prompt("Select an option (1-7): "));

    if (choice === 7) {
      console.log("Goodbye!");
      break;
    }

    switch (choice) {
      case 1:
        let num1 = parseFloat(prompt("Enter a number: "));
        console.log("Absolute Value:", absoluteValue(num1));
        break;

      case 2:
        let base = parseFloat(prompt("Enter base: "));
        let exp = parseFloat(prompt("Enter exponent: "));
        console.log("Power:", power(base, exp));
        break;

      case 3:
        let num2 = parseFloat(prompt("Enter a number: "));
        console.log("Square Root:", squareRoot(num2));
        break;

      case 4:
        let nums = prompt("Enter numbers separated by spaces: ")
          .split(" ")
          .map(Number);
        let result = maxMin(nums);
        console.log("Largest:", result.max, "Smallest:", result.min);
        break;

      case 5:
        let start = parseInt(prompt("Enter start of range: "));
        let end = parseInt(prompt("Enter end of range: "));
        console.log("Random Number:", randomNumber(start, end));
        break;

      case 6:
        let num3 = parseFloat(prompt("Enter a number: "));
        let decimals = parseInt(prompt("Enter decimal places: "));
        console.log("Rounded Value:", customRound(num3, decimals));
        break;

      default:
        console.log("Invalid choice! Try again.");
    }
  }
}

// Run the calculator
calculator();

