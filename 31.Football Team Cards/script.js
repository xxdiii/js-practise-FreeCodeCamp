let footballTeam={
    team:"Argentina",
    year:1986,
    headCoach: "Carlos Bilardo",
    players:[
        {name:"Sergio Almirón",position:"forward",isCaptain:true,},
        {name:"Sergio Batista",position:"midfielder",isCaptain:false,},
        {name:"Ricardo Bochini",position:"midfielder",isCaptain:false,},
        {name:"Claudio Borghi",position:"midfielder",isCaptain:false,},
        {name:"José Luis Brown",position:"defender",isCaptain:false,},
        {name:"Daniel Passarella",position:"defender",isCaptain:false,},
        {name:"Jorge Burruchaga",position:"forward",isCaptain:false,},
        {name:"Nery Pumpido",position:"goalkeeper",isCaptain:false,},
        {name:"Pedro Pasculli",position:"forward",isCaptain:false,},
        {name:"Héctor Zelada",position:"goalkeeper",isCaptain:false,},
    ],
}

let headCoachName=document.getElementById("head-coach");
let teamName=document.getElementById("team");
let yearName=document.getElementById("year");
let playerData=document.getElementById("player-cards");
let play=document.getElementById("players")

headCoachName.innerHTML=footballTeam.headCoach;
yearName.innerHTML=footballTeam.year;
teamName.innerHTML=footballTeam.team;

footballTeam.players.map((item)=>{
    playerData.innerHTML+=`<div class="player-card"><h2>${item.name}</h2><p>Position: ${item.position}</p></div>`;
});

play.addEventListener("change",(e)=>{
    
    if(e.target.value==="all"){   
        playerData.innerHTML="";
        footballTeam.players.map((item)=>{
        playerData.innerHTML+=`<div class="player-card"><h2>${item.name}</h2><p>Position: ${item.position}</p></div>`;
        });
    
    }

    else if(e.target.value==="forward"){
        playerData.innerHTML="";
        footballTeam.players.filter((item)=>item.position=="forward").map((item)=>{
        playerData.innerHTML+=`<div class="player-card"><h2>${item.name}</h2><p>Position: ${item.position}</p></div>`;
    })
    }

    else if(e.target.value==="midfielder"){
        playerData.innerHTML="";
        footballTeam.players.filter((item)=>item.position=="midfielder").map((item)=>{
        playerData.innerHTML+=`<div class="player-card"><h2>${item.name}</h2><p>Position: ${item.position}</p></div>`;
        })
    }
    else if(e.target.value==="defender"){
        playerData.innerHTML="";
        footballTeam.players.filter((item)=>item.position=="defender").map((item)=>{
        playerData.innerHTML+=`<div class="player-card"><h2>${item.name}</h2><p>Position: ${item.position}</p></div>`;
        })
    }

    else if(e.target.value==="goalkeeper"){
        playerData.innerHTML="";
        footballTeam.players.filter((item)=>item.position=="goalkeeper").map((item)=>{
        playerData.innerHTML+=`<div class="player-card"><h2>${item.name}</h2><p>Position: ${item.position}</p></div>`;
        })
    }
    
    
});
