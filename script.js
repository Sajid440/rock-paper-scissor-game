let userscore = 0;
let computerscore = 0;

const circalEl = document.querySelectorAll(".circal");
const msgEl = document.querySelector(".msg");
const userscoreEl = document.querySelector(".user-score");
const computerscoreEl = document.querySelector(".computer-score");
const userhandEl = document.querySelector(".user-hand");
const computerhandEl = document.querySelector(".computer-hand")

function getComputerchoice(){
    let choices = ["rock","paper","secissor"];
    let randomNo = Math.floor(Math.random()*3);

    if(randomNo === 0){
        computerhandEl.innerHTML = "✊";
    }
    else if(randomNo === 1){
        computerhandEl.innerHTML = "🤚"
    }
    else{
         computerhandEl.innerHTML = "✌️";
    }
     return choices[randomNo];
}

function showWinner(userWin){
    if(userWin == true){
        userscore++;
        userscoreEl.innerHTML = userscore;
        msgEl.innerHTML = "you win !";
        msgEl.style.backgroundColor = "green";
    }
    else{
        computerscore++;
        computerscoreEl.innerHTML = computerscore;
        msgEl.innerHTML = "you lose !";
         msgEl.style.backgroundColor = "red";
    }
}


function plyaGame(userchoice){
    let compchoice = getComputerchoice();
    if(userchoice === compchoice){
    msgEl.innerHTML = "draw ! play agian";
    msgEl.style.backgroundColor = "cyan";
    }
    else {
        let userWin = true;
        if(userchoice === "rock"){
            userhandEl.innerHTML = "✊";
            userWin = compchoice === "secissor" ? true : false;

        }
        else if(userchoice === "secissor"){
            userhandEl.innerHTML = "✌️";
            userWin = compchoice === "paper" ? true : false;
        }
        else{
            userhandEl.innerHTML = "🤚";
            userWin = compchoice === "rock" ? true : false;
        }
        showWinner(userWin);
        // (userchoice);
        

    }
}

circalEl.forEach((val) => {
    val.addEventListener("click", () => {
        let userchoice = val.getAttribute("Id");
        plyaGame(userchoice);
    })
})

