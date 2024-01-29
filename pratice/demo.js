// featch api
const URL="https://cat-fact.herokuapp.com/facts";
let factpara=document.querySelector(".factpara");
let Heading=document.querySelector(".Heading");
let btm=document.querySelector("#btm");
let head=document.querySelector(".head");

const getFatch=async ()=>{
    console.log("Getting data.....");
    let response= await fetch(URL);
    console.log(response);
    let data1= await response.json();
    console.log(data1[0].text);
    // Heading.innerText=data1[0].type;
    factpara.innerText=data1[1].text;
    head.innerText=data1[1].type;

};

btm.addEventListener("click",getFatch);
