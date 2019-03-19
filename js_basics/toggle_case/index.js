const args = process.argv.slice(2);
let word = args[0];

let toggledWord = '';

for (let i = 0; i < word.length; i++) {
    if(word.charAt(i) === word.charAt(i).toUpperCase()) {
        toggledWord += word.charAt(i).toLowerCase();
    } else {
        toggledWord += word.charAt(i).toUpperCase();
    }
}
console.log(toggledWord);