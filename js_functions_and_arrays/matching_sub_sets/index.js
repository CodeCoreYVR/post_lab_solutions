function matchingSet(arr1, arr2) {
    const output = [];
    for (let i of arr1) {
        for (let j of arr2) {
            if (i === j) {
                output.push(i);
            }
        }
    }
    return output;
}
