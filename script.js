let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ["r","p","s"]
    let rand = Math.floor(Math.random() * 3);
    let choice = choices[rand];
    return choice;
}
function game(userChoice){
    let computerChoice = getComputerChoice();
    if(userChoice === 'r'){
        if(computerChoice === 's'){
            userScore += 1;
            userScore_span.innerText = userScore;
            document.getElementById("r").classList.add("green-glow");
            setTimeout(function(){document.getElementById("r").classList.remove("green-glow")},3000);
            result_div.innerText = "Rock Beats Scissors! You Win!";
        }
        if(computerChoice === 'p'){
            computerScore += 1;
            computerScore_span.innerText = computerScore;
            document.getElementById("r").classList.add("red-glow");
            setTimeout(function(){document.getElementById("r").classList.remove("red-glow")},3000);
            result_div.innerText = "Rock loses to Paper! You Lose !"
        }
        if(computerChoice === 'r'){
            document.getElementById("r").classList.add("gray-glow");
            setTimeout(function(){document.getElementById("r").classList.remove("gray-glow")},3000);
            result_div.innerText = "It's a Tie!"
        }
    }
    if(userChoice === 'p'){
        if(computerChoice === 'r'){
            userScore += 1;
            document.getElementById("p").classList.add("green-glow");
            setTimeout(function(){document.getElementById("p").classList.remove("green-glow")},3000);
            userScore_span.innerText = userScore;
            result_div.innerText = "Paper Beats Rock! You Win!"
        }
        if(computerChoice === 's'){
            computerScore += 1;
            computerScore_span.innerText = computerScore;
            document.getElementById("p").classList.add("red-glow");
            setTimeout(function(){document.getElementById("p").classList.remove("red-glow")},3000);
            result_div.innerText = "Paper loses to Scissors! You Lose !"
        }
        if(computerChoice === 'p'){
            document.getElementById("p").classList.add("gray-glow");
            setTimeout(function(){document.getElementById("p").classList.remove("gray-glow")},3000);
            result_div.innerText = "It's a Tie!"
        }
    }
    if(userChoice === 's'){
        if(computerChoice === 'p'){
            userScore += 1;
            userScore_span.innerText = userScore;
            document.getElementById("s").classList.add("green-glow");
            setTimeout(function(){document.getElementById("s").classList.remove("green-glow")},3000);
            result_div.innerText = "Scissors Beats Paper! You Win!"
        }
        if(computerChoice === 'r'){
            computerScore += 1;
            computerScore_span.innerText = computerScore;
            document.getElementById("r").classList.add("green-glow");
            setTimeout(function(){document.getElementById("s").classList.remove("green-glow")},3000);
            result_div.innerText = "Scissors loses to Rock! You Lose !"
        }
        if(computerChoice === 's'){
            result_div.innerText = "It's a Tie!"
        }
    }
}
function main(){
    rock_div.addEventListener('click',function(){
        game("r")
    })
    paper_div.addEventListener('click',function(){
        game("p")
    })
    scissors_div.addEventListener('click',function(){
        game("s")
    })
}
main();
