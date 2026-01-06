function uniteUnique(...args){
    let newArr=[];
    for(const arg of args){
        for(let i=0;i<arg.length;i++){
            if(newArr.includes(arg[i])){
                continue;
            }else{
                newArr.push(arg[i]);
            }
        }
    }
    return newArr;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));


