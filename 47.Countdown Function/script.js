

const countdown=(n)=>{
    
    if(n<1){
        return [];
    }
    const countArray=countdown(n-1);
    return [n,...countArray];
}

console.log(countdown(10));