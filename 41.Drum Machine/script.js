const pads=document.querySelectorAll(".drum-pad");


function playSound(key){
    const audio=document.getElementById(key);

    if(!audio) return;

    audio.currentTime=0;
    audio.play();

    const drumPad=audio.parentElement;
    const display=document.getElementById("display");
    display.innerText=drumPad.id;


}

pads.forEach(pad=>{
    pad.addEventListener("click",()=>{
        const audioChild=pad.querySelector('audio');
        playSound(audioChild.id);
    });
});

document.addEventListener("keydown",(event)=>{
    const key=event.key.toUpperCase();
    playSound(key);
})