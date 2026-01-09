function sumPrimes(num){
    let allNum=[];
    if(num<2){
        return 0;
    }; 
    for(let i=2;i<=num;i++){
        allNum.push(i);
    }
    let prime=[];
    
    for(const n of allNum){   
        let isPrime=true;  
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n % i === 0){
             isPrime=false;
             break;
            }          
        }
        if(isPrime){
            prime.push(n);
        }  
    }
    return prime.reduce((acc,curr)=>acc+curr,0);
    
}

console.log(sumPrimes(10));
