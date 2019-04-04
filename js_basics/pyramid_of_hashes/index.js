const rows = Math.floor(process.argv[2]);
if (typeof rows === 'number') {
    for (let i = 1; i <= rows; i++) {
        console.log(' '.repeat(rows - i) + '# '.repeat(i));
    }
} else {
    console.log("You must enter a number");
}
