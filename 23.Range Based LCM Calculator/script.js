function smallestCommons(arr){
    const [min,max]=arr.sort((a,b)=>a-b);
    let allNum=[];
    for(let i=min;i<=max;i++){
        allNum.push(i);
    }
    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
    const lcm = (a, b) => (a * b) / gcd(a, b);
    
    return allNum.reduce((acc,curr)=>lcm(acc,curr));
    return allNum;
}

console.log(smallestCommons([1, 5]));
