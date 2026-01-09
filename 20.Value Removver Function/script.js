function destroyer(arr,...rest){
    let newArr=[];
    newArr=arr.filter(element=>!(rest.includes(element)))
    return newArr
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

