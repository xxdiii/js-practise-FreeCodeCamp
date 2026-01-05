function titleCase(str){
    let newstr=[]
    let arr=str.split(" ")
    for(let i=0;i<arr.length;i++){
        
            let x=arr[i];
            let lower="";
            let upper=x[0].toUpperCase();
            for(j=1;j<arr[i].length;j++){
                lower=x[j].toLowerCase();
                upper+=lower;
            }
            
            newstr.push(upper);
        
        
    }
    return newstr.join(" ");
}

console.log(titleCase("sHoRt AnD sToUt"));
