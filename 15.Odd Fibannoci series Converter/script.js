function sumFibs(num) {
    let prev=0;
    let curr=1;
    let finalSum=0;
    let sum=0;
    
    while(num>=curr){
        sum=curr+prev;
        if(curr%2!==0){
            finalSum+=curr;  
        }
        prev=curr;
        curr=sum;
    }
    return finalSum;
}

console.log( sumFibs(1000));
