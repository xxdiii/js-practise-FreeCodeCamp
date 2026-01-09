function steamrollArray(arr){
    return arr.reduce((acc,val)=>{
        if(Array.isArray(val)){
            acc.push(...steamrollArray(val));
        }else{
            acc.push(val);
        }
        return acc;
    },[])
}

console.log(steamrollArray([[["a"]], [["b"]]]));
