const checkBtn=document.getElementById("check-btn");
const textInput=document.getElementById("text-input");
const resultDiv = document.getElementById('result');



function isPalindrome(msg){
    const cleanInput = msg.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reverse=msg.split('').reverse().join('');
    if(cleanInput===reverse){
        return true;
    }
    else{
        return false;
    }
}

checkBtn.addEventListener("click",()=>{
    if(textInput.value===""){
        alert("Please input a value.");
    }

    if(isPalindrome(textInput.value)){
        resultDiv.textContent=`${textInput.value} is a palindrome`;
    }else{
        resultDiv.textContent=`${textInput.value} is not a palindrome`;
    }
})