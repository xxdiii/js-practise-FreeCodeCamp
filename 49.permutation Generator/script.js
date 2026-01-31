const permuteString=(str,prefix,results)=>{
    if(str.length===0){
        results.push(prefix);
        return results;
    }

    for(let i=0;i<str.length;i++){
        let char = str[i];
        let remaining=str.slice(0,i)+str.slice(i+1);
        permuteString(remaining,prefix+char,results);
    }

    const uniqueResults = Array.from(new Set(results));
    return uniqueResults;
}

const results=[];
console.log(permuteString("cat","",results));
