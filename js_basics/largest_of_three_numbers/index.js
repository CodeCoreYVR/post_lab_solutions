const args = process.argv.slice(2)
if(args){
    let largestNumber = parseInt(args[0])
    args.forEach(function(value) {
       if(parseInt(value)>largestNumber){
           largestNumber=parseInt(value)
       }
    })
    console.log(`The largest number is ${largestNumber}`)
}