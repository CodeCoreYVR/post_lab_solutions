// sentence
const args = process.argv[2].split(' ')
// optional input to represent # of spacing
const num_spacing = parseInt(process.argv[3]) ? parseInt(process.argv[3]) : 2
let indenting=''

args.forEach(function(e){

    console.log(indenting+e)
    // 
    if(e[e.length-1]==='.'){
        indenting=''
    }else{
        if(indenting.length >= num_spacing){
            indenting+='|'
        }
        let i;
        // spacing
        if(indenting.includes('|')){
            i=1
        }else{
            i=0
        }
        for(i; i<num_spacing; i++){
            indenting+=' '
        }
    }
})

