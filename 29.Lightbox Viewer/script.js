let galleryItem=document.querySelectorAll(".gallery-item");
let lightbox=document.querySelector(".lightbox")
let lightboxImg=document.getElementById("lightbox-image")
let closebtn=document.getElementById("close-btn")

galleryItem.forEach((item)=>{
    item.addEventListener("click",()=>{
        lightbox.style.display="flex";
        let src1=item.src;
        let newSrc=src1.replace("-thumbnail","");
        lightboxImg.src=newSrc;
    })
})

lightbox.addEventListener("click",(e)=>{
    if(e.target=== lightbox){
        lightbox.style.display="none";
    }
})

closebtn.addEventListener("click",(e)=>{
    if(e.target==closebtn){
        lightbox.style.display="none";
    }
})

