function largestOfAll(arr){
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        let temp=arr[i][0];
        for(let j=0;j<arr[i].length;j++){
            if(temp<arr[i][j]){
                temp=arr[i][j];
            }
        }
        newarr.push(temp);
    }
    return newarr;
}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
