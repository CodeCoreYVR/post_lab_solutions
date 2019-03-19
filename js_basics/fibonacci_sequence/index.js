const args = process.argv.slice(2);

if (!args[0]) {
    console.log("A number arguement is required");
} else if (args[0] < 0) {
    console.log("An integer number is required.")
} else {
    let fib = [];
    fib[0] = 1;
    fib[1] = 1;
    for (let i = 2; i < args[0]; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib.slice(0, args[0]));
}