 let gameSeq = [];
 let userSeq = [];


 let btns = ["yellow","red","purple","green"];



 let started = false;
 let level = 0;

 let h2 = document.querySelector("h2");

 document.addEventListener("Keypress", function (){
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
 });

 function userflash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
 }


 function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
   //  console.log(randIdx);
   //  console.log(randcolor);
   //  console.log(randbtn);
   gameSeq.push(randColor);
   console.log(gameSeq);
    gameflash(randBtn);
 } 

 function checkAns() {
   // console.log("curr level : ",level);
   let idx = level - 1; 

   if(userSeq[idx] == gameSeq[idx]) {
      console.log("save value");
   } else {
      h2.innerText = ` Game over ! press nay key to start`;
   }
 }

 function btnPress() {
     console.log(this);
     let btn = this;
     userflash(btn);

     userColor = btn.getAttribute("id");
     userSeq.push(userColor);

     checkAns();

     
 }

 let allBtns = document.querySelector(".btn");
 for(btn of allBtns){
    btn.addEventListener("click", btnPress);
 }