function findElement(arr, func){
    for(let i=0;i<arr.length;i++){
        let x=arr[i];
        if(func(x)==true){
            return x;
        }
    }
    return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
