function diffArray(arr1,arr2){
    let filteredArr1=arr1.filter((str)=>arr2.indexOf(str)== -1);
    let filteredArr2=arr2.filter((str)=>arr1.indexOf(str)== -1);
    let filteredArr=filteredArr1.concat(filteredArr2)
    return filteredArr;
    
}

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));
