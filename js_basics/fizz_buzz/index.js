const args = process.argv.slice(2)
const first = "fizz"
const second = "buzz"
if(args){
    for(let i= 1;i<101;i++){
        if(((i)%parseInt(args[0])===0) && ((i)%parseInt(args[1])===0)){
            console.log(first+second)
        }else if((i)%parseInt(args[0])===0){
            console.log(first)
        }else if((i)%parseInt(args[1])===0){
            console.log(second)
        }else{
            console.log(i)
        }
    }
}