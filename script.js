const gameButtons = document.querySelectorAll(".gameBtn");
const game_text = document.getElementsByClassName("gameText");
const game_input = document.getElementById("gameInput");
const game_alert = document.querySelector(".gameAlert")
const errorLow = document.getElementById("errorLow")
const errorHigh = document.getElementById("errorHigh")
const correct= document.getElementById("correct")
let secretNumber;


secretNumber = Math.floor(Math.random() * 300);

gameButtons[0].addEventListener("click" , function(){
    game_alert.innerText = "New number has been selected.";
    

    // alert(secretNumber)
    
})

game_alert.innerText = ""
function checkUserGuess(){
    let userGuess = game_input.value;
    if (userGuess === ""){
        game_text[1].innerText = "Please provide a number."
        errorLow.play();
    }
    else if(secretNumber === parseInt(userGuess)){
        game_text[1].innerText = "Congratulations !!! You won"
        correct.play();

    }
    else if(parseInt(userGuess) < secretNumber){
        game_text[1].innerText = `${userGuess} is too low.`
        errorLow.play();
     }
     else if(parseInt(userGuess) > secretNumber){
        game_text[1].innerText = `${userGuess} is too high.`
        errorHigh.play();   
     }
     game_input.value = "";
}


gameButtons[1].addEventListener("click" , checkUserGuess)

document.addEventListener("keydown" ,function(e){
    if(e.key === "Enter"){
        checkUserGuess();
    }
})