function bouncer(arr){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        
        if (Boolean(arr[i])==false){
            continue;
        }else{
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));



