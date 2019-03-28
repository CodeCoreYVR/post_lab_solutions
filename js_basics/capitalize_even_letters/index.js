const word = process.argv[2]
if(word){
    let new_word = ''
    for(let i =0; i < word.length;i++){
        if(i%2!==0){
            new_word +=word[i].toUpperCase()
        }else{
            new_word +=word[i].toLowerCase()
        }
    }
    console.log(new_word)
}