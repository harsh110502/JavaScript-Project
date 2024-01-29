const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg = document.querySelector(".msg");


// for(code in countryList){
//   console.log(code,countryList[code]);
// }

for(let select of  dropdown){
  for(currCode in countryList){
    let newOptions = document.createElement("option");
    newOptions.innerText=currCode;
    newOptions.value=currCode;
    if(select.name === "from" && currCode ==="USD"){
      newOptions.selected="selected";
    }else if(select.name === "to" && currCode ==="INR"){
      newOptions.selected="selected";
    }
    select.append(newOptions);
  }
  select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
  })
}

const updateFlag=(element)=>{
    // console.log(element.value);
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src=newSrc;
}



btn.addEventListener("click", async (evt)=>{
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal= amount.value;
  if (amtVal ===" "|| amtVal<1){
      amtVal=1;
      amtVal="1";
  }
  // console.log(amtVal);
  // console.log(fromCurr.value,toCurr.value );

  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];
  // console.log(rate);
  let finalAmt  = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;

});