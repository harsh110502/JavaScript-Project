let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btm");
let newgamebtm=document.querySelector("#new-btm");
let msgcontainer=document.querySelector(".msg-container");
let msg =document.querySelector("#win-msg");

let trunO = true; //Palyer o 
const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box is Clicked");
        if(trunO){
            box.innerText="O";
            trunO=false;
        }else{
            box.innerText="X";
            trunO=true;
        }
        box.disabled=true;
        checkWin();
    });
});

const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=" ";
    }
}
const disbox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const resetGame=()=>{
    trunO=true;
    enablebox();
    msgcontainer.classList.add("hide");
}

const showwinner=(winner)=>{
    msg.innerText=`Congrats ,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disbox();
}
const checkWin=()=>{
    for( let pattern of winPatterns){
            let pos1vlau = boxes[pattern[0]].innerText;
            let pos2vlau = boxes[pattern[1]].innerText;
            let pos3vlau = boxes[pattern[2]].innerText
            
            if(pos1vlau != "" && pos2vlau != "" && pos3vlau != ""){
                if(pos1vlau==pos2vlau && pos2vlau==pos3vlau){
                    console.log("Winner" , pos1vlau);
                    showwinner(pos1vlau);
                }
            }
        }
};

newgamebtm.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
