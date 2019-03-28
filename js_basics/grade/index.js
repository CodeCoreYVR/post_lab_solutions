// A 86 - 100
// B 73 - 85
// C+ 67 - 72
// C 60 - 66
// C- 50 - 59
// F 0 - 49
const arg = parseFloat(process.argv[2])
let letter_grade = ''
if(arg>85 && arg <=100){
    letter_grade='A'
}else if(arg >72 && arg <=85){
    letter_grade='B'
}else if(arg > 66 && arg <=72){
    letter_grade='C+'
}else if(arg >59 && arg <=66){
    letter_grade = 'C'
}else if(arg > 49 && arg <= 59){
    letter_grade='C-'
}else if(arg <=49){
    letter_grade='F'
}
console.log(letter_grade)