function addTogether(...args){
    const [first,second]=args;

    if(typeof first!=="number"){
        return undefined;
    }

    if(args.length===2){
        if(typeof second!=="number"){
            return undefined;
        }

        return first+second;
    }

    return function(third){
        if(typeof third!== "number"){
            return undefined;
        }
        return first+third;
    }
    
}