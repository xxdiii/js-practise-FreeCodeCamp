let buttons=document.querySelectorAll(".favorite-icon");

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        btn.classList.toggle("filled");
        if(btn.classList.contains("filled")){    
            btn.innerHTML="&#10084;";
        }
        else{
            btn.innerHTML="&#9825;";
        }
    
    });
});
