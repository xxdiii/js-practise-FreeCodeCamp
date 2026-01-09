function whatIsInAName(arr,objs){
    let objKey=Object.keys(objs);
    
    return arr.filter(obj=>{
        return objKey.every(key=>{
            return obj.hasOwnProperty(key) && obj[key]==objs[key]
        })
    })
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
