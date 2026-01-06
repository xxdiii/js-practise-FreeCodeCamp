function pairElement(str){
    let dna=[];
    for(let i=0;i<str.length;i++){
        let char=str[i];
        let nextChar="";
        if(char=="A"){
            nextChar="T";
        }
        else if(char==="T"){
            nextChar="A";
        }
        else if(char==="C"){
            nextChar="G";
        }
        else if(char==="G"){
            nextChar="C";
        }
        dna.push([char,nextChar]);
    }
    return dna;
}

console.log(pairElement("ATCGA"));
