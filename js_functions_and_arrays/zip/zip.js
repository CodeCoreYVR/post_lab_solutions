function zip(arr1, arr2) {
    const output = [];
    if (arr1.length === arr2.length && Array.isArray(arr1) && Array.isArray(arr2)) {
        for (let i = 0; i < arr1.length; i++) {
            output.push([arr1[i], arr2[i]]);
        }
        return output;
    } 
}
