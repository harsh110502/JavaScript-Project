let userscore=0;
let compscore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const generateCompchoce=()=>{
    const options=["rock","paper","sicssors"];
    const randomidx = Math.floor(Math.random()*3);  
    return options[randomidx];
};

const showWinner=(userwin,userchoice,compchoice)=>{
    if (userwin) {
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText=`You win!  Your ${userchoice} beast ${compchoice}`;
        msg.style.backgroundColor="#2E294E";
    }else{
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=`You lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="#D90368";
    }
};

const drawGame=()=>{
    // console.log("game is draw");
    msg.innerText="Game Was Draw";
    msg.style.backgroundColor="#326273";
};

const palygame=(userchoice)=>{
    // console.log( "User choise is = ",userchoice);
    const compchoice= generateCompchoce();
    // console.log("Comp Choice is = " , compchoice);
    if(userchoice===compchoice){
        drawGame();
    }else{
        let userwin=true;
        if(userchoice=="rock"){
            userchoice=compchoice==="paper"?false:true;
        }else if(userchoice=="paper"){
            userwin=compchoice==="sicssors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("Id");
        // console.log("clicked", userchoice);
        palygame(userchoice);
    });
});