const regexPattern=document.getElementById("pattern");
const stringToTest=document.getElementById("test-string");
const testButton=document.getElementById("test-btn");
const testResult=document.getElementById("result");
const caseInsensitiveFlag=document.getElementById("i");
const globalFlag=document.getElementById("g");

function getFlags(){
    if(caseInsensitiveFlag.checked && globalFlag.checked){
        return "ig";
    }
    else if (caseInsensitiveFlag.checked){
        return "i";
    }
    else if(globalFlag.checked){
        return "g";
    }
    else{
        return "";
    }
}

testButton.addEventListener("click",()=>{
    const pattern=regexPattern.value;
    const flag=getFlags();
    const text=stringToTest.textContent;

    let regex;
    try{
        regex=new RegExp(pattern, flag);
    }catch(e){
        testResult.textContent ='no match';
        return;
    }

    const matches=text.match(regex);

    if(matches){
        testResult.textContent=matches.join(', ');
        const newHtml = text.replace(regex, (match) => {
            return `<span class="highlight">${match}</span>`;
        });

        stringToTest.innerHTML = newHtml;
    }else {
       
        testResult.textContent = 'no match';
        stringToTest.innerHTML = text; 
    }

})