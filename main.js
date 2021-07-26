//select element area//
const p1disScore=document.querySelector("#p1displayScore")
const p2disScore=document.querySelector("#p2displayScore")
const player01btn =document.querySelector("#p1btn")
const player02btn =document.querySelector("#p2btn")
const resetbtn =document.querySelector("#resetbtn")
const inputbtn =document.querySelector("#inputBtn")
const winScore=document.querySelector("#winDisplayScore span")
//select element area//

//element initialize
let p1Score=0;
let p2Score=0;
let winingScore=0;
let gameOver=false;
//element initialize

//function for no code repeataion
function winner(oldScore,winingScore){
    if(oldScore===winingScore){
        
        gameOver=true;
      //  p1Score.classlist.add("winner")
       player01btn.setAttribute("disabled",'disabled')
       player02btn.setAttribute("disabled",'disabled')
    }
}

//reset function area
function reset(){
    p1Score=0;
    p2Score=0;
    //winning score ta reset korte chai
    winingScore.textContent=0
    gameOver=false;
    p1disScore.textContent=0
    p2disScore.textContent=0
    player01btn.removeAttribute("disabled")
    player02btn.removeAttribute("disabled")
}

//addEventListner start
player01btn.addEventListener("click",()=>{
    //data change
    if(!gameOver){
        p1Score+=1;
        winner(p1Score,winingScore)
        //show data
        p1disScore.textContent=p1Score;
      
    }
   
})
player02btn.addEventListener("click",()=>{
      //data change
      if(!gameOver){
        p2Score+=1;
        winner(p2Score,winingScore)  
        //show data
        p2disScore.textContent=p2Score;
       
    }
    
})
resetbtn.addEventListener("click",reset)

inputbtn.addEventListener("change",()=>{
    winScore.textContent=inputbtn.value;
    winingScore=Number(inputbtn.value)
    inputbtn.value=""
    reset();
})
//addEventListner end