let start = true;
let level = 0;
let p = document.querySelector("p");
let color = ["red", "blue", "green", "yellow"];
let btn = document.querySelectorAll(".btn");
let userSeq = [];
let gameSeq = [];
let bd = document.querySelector("body");

document.addEventListener("keypress", function() {
    if(start === true) {
        bd.style.backgroundColor = "black";
        levelUp();
        start = false;
        for(btns of btn) {
            btns.addEventListener("click", btnPress);
        }
    }
});

function levelUp() {
    userSeq = [];
    level++;
    p.innerText = `Level ${level}`;
    let randNum = Math.floor(Math.random() * 4);
    let randColor = color[randNum];
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let id = btn.getAttribute("id");
    userSeq.push(id);
    check(userSeq.length - 1);
}

function check(ind) {
    if(gameSeq[ind] === userSeq[ind]) {
        if(gameSeq.length == userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        p.innerText = `Game Over! Your score is ${level} and Press any key to start`;
        bd.style.backgroundColor = "red";
        reStart();
    }
}
function reStart() {
    start = true;
    level = 0;
    userSeq = [];
    gameSeq = []
}

