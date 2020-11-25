function fullName(firstName = "", lastName = "") {
  return firstName + " " + lastName;
}

let result = fullName("Abhi", "Kum");
let expected = "Abhis Kum";

if (result !== expected) {
  throw new Error(`${expected} didnt match with ${result}`);
}

let result1 = fullName("John", "Snow");
console.log(result1);
let expected1 = "John Snow";

if (result1 !== expected1) {
  throw console.error(`${expected1} didnt match with ${result1}`);
}

function totalAmount(amount = 0, taxRate = 0) {
  return amount + amount * taxRate;
}

let res = totalAmount(2000, 2);

let exp = 6005;

if (result !== expected) {
  throw new Error(`${exp} didnt match with ${res}`);
}

let res1 = totalAmount(2000, 2);

let exp1 = 6000;
if (result !== expected) {
  throw new Error(`${exp1} didnt match with ${res1}`);
}
