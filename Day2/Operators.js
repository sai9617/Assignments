let inputNumber = 15;

if (inputNumber > 0 && inputNumber % 2 === 0) {
  console.log("The input given is a positive even number");
} else if (inputNumber > 0 && inputNumber % 2 !== 0) {
  console.log("The input given is a positive odd number");
} else if (inputNumber < 0 && inputNumber % 2 === 0) {
  console.log("The input given is a negative even number");
} else if (inputNumber < 0 && inputNumber % 2 !== 0) {
  console.log("The input given is a negative odd number");
} else {
  console.log("The input given is zero");
}