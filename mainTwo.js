let letter = "x"
let winner = document.getElementById("winner")
let tryAgain = document.getElementById("try")
let ids = document.querySelectorAll(".game button")
let win = "no"
let box = document.querySelectorAll(".box")
console.log(box[0].innerHTML)
let player = "you"
let array = [9]
for(let i = 0 ; i < box.length ; i++){
    box[i].onclick = function(){
        if(letter === "x"){
        box[i].innerHTML = "x"
        box[i].disabled = true;
        array.push(i)
        letter = "o"
        if(array.length !== 10){
            setTimeout(computer,1000)
        }
        check()
        if(win !== "yes"){
            noWinner()
        }
        winner.innerHTML = "you win"
    }
} 
}
// when computer play
function computer(){
    if(letter === "o"){
        let randomvar = Math.ceil(Math.random()  *10 )- 1
        while(array.includes(randomvar)){
            randomvar = Math.ceil(Math.random()  *10 )- 1
        }
        box[randomvar].innerHTML = "o"
        box[randomvar].disabled = true;
        array.push(randomvar)
        letter = "x"
        check()
        if(win !== "yes"){
            noWinner()
        }
        winner.innerHTML = "you lose"
    }
}
// check if there is a winner or not
let color = "aqua"
function check(){
    let i;
    // the winner in row
    if(ids[0].innerHTML ==="x" || ids[0].innerHTML === "o"){
        if(ids[0].innerHTML === ids[1].innerHTML&& ids[1].innerHTML === ids[2].innerHTML){
            ids[0].style.background = color
            ids[1].style.background = color
            ids[2].style.background = color
            whenWin()
        }
}
// 
    if(ids[4].innerHTML ==="x" || ids[4].innerHTML === "o"){
        if(ids[3].innerHTML === ids[4].innerHTML&& ids[4].innerHTML === ids[5].innerHTML){
            ids[3].style.background = color
            ids[4].style.background = color
            ids[5].style.background = color
            whenWin()
        }
    }
    if(ids[8].innerHTML ==="x" || ids[8].innerHTML === "o"){
        if(ids[6].innerHTML === ids[7].innerHTML&& ids[7].innerHTML === ids[8].innerHTML){
            ids[6].style.background = color
            ids[7].style.background = color
            ids[8].style.background = color
            whenWin()
        }
    }
    // the winner in coulumn
    if(ids[0].innerHTML ==="x" || ids[0].innerHTML === "o"){
        if(ids[0].innerHTML === ids[3].innerHTML&& ids[3].innerHTML === ids[6].innerHTML){
            ids[0].style.background = color
            ids[3].style.background = color
            ids[6].style.background = color
            whenWin()
        }
    }
    if(ids[4].innerHTML ==="x" || ids[4].innerHTML === "o"){
        if(ids[1].innerHTML === ids[4].innerHTML&& ids[4].innerHTML === ids[7].innerHTML){
            ids[1].style.background = color
            ids[4].style.background = color
            ids[7].style.background = color
            whenWin()
        }
    }
    if(ids[8].innerHTML ==="x" || ids[8].innerHTML === "o"){
        if(ids[2].innerHTML === ids[5].innerHTML&& ids[5].innerHTML === ids[8].innerHTML){
            ids[2].style.background = color
            ids[5].style.background = color
            ids[8].style.background = color
            whenWin()
        }
    }
    if(ids[4].innerHTML ==="x" || ids[4].innerHTML === "o"){
        if(ids[2].innerHTML === ids[4].innerHTML&& ids[4].innerHTML === ids[6].innerHTML){
            ids[2].style.background = color
            ids[4].style.background = color
            ids[6].style.background = color
            whenWin()
        }
        else if(ids[0].innerHTML === ids[4].innerHTML&& ids[4].innerHTML === ids[8].innerHTML){
            ids[0].style.background = color
            ids[4].style.background = color
            ids[8].style.background = color
            whenWin()
        }
    }
}
// to try again
function noWinner(){
    if(ids[1].innerHTML !== "" &&
       ids[2].innerHTML !== "" &&
       ids[3].innerHTML !== "" &&
       ids[4].innerHTML !== "" &&
       ids[5].innerHTML !== ""&&
       ids[6].innerHTML !== "" &&
       ids[7].innerHTML !== "" &&
       ids[8].innerHTML !== ""){
           tryAgain.style.display = "block"
    }
}
// make some task at winnig time
function whenWin(){
    winner.style.display= "block"
    win = "yes"
    letter = "M"
    for(let i = 0; i< ids.length; i++){
        ids[i].disabled = true;
    }
}