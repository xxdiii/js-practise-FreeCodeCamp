function convertHTML(str) {
    if(str.includes('&')){
        str=str.replaceAll("&","&amp;");
    }
    if(str.includes('<')){
        str=str.replaceAll("<","&lt;")
    }
    if(str.includes('>')){
        str=str.replaceAll(">","&gt;")
    }
    if(str.includes('"')){
        str=str.replaceAll('"',"&quot;")
    }
    if(str.includes("'")){
        str=str.replaceAll("'","&apos;")
    }
    return str;
}

console.log(convertHTML("Dolce & Gabbana"));
