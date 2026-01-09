function getIndexToIns(arr,num){
    arr.sort((a, b) => a - b);
    console.log(arr);
    if(arr.length==0){
        return 0;
    }
    else if(arr[arr.length-1]<num){
        return arr.length;
    }
    
    return arr.findIndex(element=> element>=num);
}

console.log(getIndexToIns([3, 10, 5], 11));
