let textInput=document.getElementById("text-input");
let charCount=document.getElementById("char-count");
let maxLength=50;
textInput.addEventListener("input",()=>{
    let count=textInput.value.length;
    if(count>maxLength){
        textInput.value=textInput.value.slice(0,50);
    }
    charCount.innerHTML=`Character Count: ${count}/${maxLength}`
    
    if(count==maxLength){
        charCount.style.color="red";
    }
    else{
       charCount.style.color="black"; 
    }
})

