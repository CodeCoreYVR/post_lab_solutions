const args = process.argv.slice(2)
if(args){
    let foundZeroElement= false
    let perimiter = 0
    // calculate perimiter
    args.forEach(function(e) {
        perimiter += parseInt(e)
        // if zero element found, set flag to true
        if(e==='0'){foundZeroElement=true}
    });
    let subArea = perimiter/2
    // calculate area
    args.forEach(function(e){
        subArea *= (perimiter/2-parseInt(e))        
    })
    const area = Math.sqrt(subArea)
    // if area not a value or 0, if only 3 sides of values provided, 
    // and none of sides was 0 in size, then print out perimiter and area
    if(area && args.length ===3 && !foundZeroElement){
        console.log(`Perimiter: ${perimiter}\nArea: ${area}`);
    }else{
       console.log('Impossible triangle!') 
    }
}