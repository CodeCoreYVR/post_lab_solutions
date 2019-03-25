function findDuplicates(arr) {
    const arrayOfDupes = [];
    for (let i of arr) {
        let count = 0;
        for (let j of arr) {
            if (i === j) {
                count++;
            }
        }
        if (count > 1) {
            arrayOfDupes.push(i);
        }
        count = 0;
    }    
    arrayOfDupes.sort();
    const output = Object.assign([], arrayOfDupes);
    for (let k = 0, l = 0; k < arrayOfDupes.length; k++) {
        if (arrayOfDupes[k] === arrayOfDupes[k + 1]) {
            output.splice(k - l, 1);
            l++;
        }
    }
    return output;
}
