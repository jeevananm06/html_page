var compare=function(choice1,choice2){
    if (choice1===choice2 ){
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if(choice2 === "scissors"){
            return "You win";
        } else {
            return "Computer win";
        }
    } else if (choice1 === "paper") {
        if(choice2 === "scissors"){
            return "Computer wins";
        } else {
            return "You wins";
        }
    } else {
        if(choice2 === "rock"){
            return "Computer wins";
        } else {
            return "You wins";
        }
    }
        confirm("result")
}
confirm("lets play")
var userResponse = prompt("Do you choose rock, paper or scissors?");
var userChoice=userResponse.toLowerCase()
var userChoice="paper";
console.log(userChoice)
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} confirm(("Computer: " + computerChoice));
if (userChoice !== "paper" && userChoice !== "rock" && userChoice !== "scissors"){
    confirm("invalid choice choose the option as mentioned in the popup")  
} else {
    //confirm("lets play test")
    //var result=compare(userChoice,computerChoice);
    confirm(compare(userChoice,computerChoice))

}

