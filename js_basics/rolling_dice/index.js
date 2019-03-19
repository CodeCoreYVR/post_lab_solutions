const args = process.argv.slice(2);

const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);

let rolled;
let rolledSum = 0;

for (let i = 0; i < num1; i++) {
    rolled = (Math.floor(Math.random() * num2 + 1));
    console.log("Rolled: " + rolled);
    rolledSum += rolled;
}

console.log("Average: " + rolledSum / num1);
console.log("Total: " + rolledSum);