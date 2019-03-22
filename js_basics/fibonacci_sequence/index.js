const seqNum = process.argv.slice(2);

if (!seqNum[0] || seqNum[0] < 0) {
    console.log("A valid number is required");
    process.exit(1);
}

let fibo = [];
fibo[0] = 1;
fibo[1] = 1;
for (let i = 2; i < seqNum[0]; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo.slice(0, seqNum[0]));
