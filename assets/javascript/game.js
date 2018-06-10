var wins = 0;
var losses = 0;
var score = 0;
var randomNumber = Math.floor(Math.random() * 109) + 12;
var rose = {
    id: "rose-gem",
    value: (Math.floor(Math.random() * 12) + 1)
  };
var amethyst = {
    id: "amethyst-gem",
    value: (Math.floor(Math.random() * 12) + 1)
  };
var ruby = {
    id: "ruby-gem",
    value: (Math.floor(Math.random() * 12) + 1)
  };
var sapphire = {
    id: "sapphire-gem",
    value: (Math.floor(Math.random() * 12) + 1)
  };

function game () {

    $("#content").html("<h1>♦ Crystal Collector! ♦</h1>"
        + "<p>You will be given a random number at the start of the game.</p>" 
        + "<p>There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.</p>" 
        + "<p>You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.</p>"
        + "<p>The value of each crystal is hidden from you until you click on it.</p>"
        + "<p>Each time when the game starts, the game will change the values of each crystal.</p>");
    $("#number").html("<p id='number-text'>RandomNum:  " + randomNumber + "</p>");
    $("#wins-losses").html("<p id='wins-losses-text'>Wins:  " + wins + '<br/>' + "Losses: " + losses + "</p>");
    $("#total-score").html("<p id='score-text'>Your total score is:  " + '<br/>' + score + "</p>");
    
    $("button").on("click", function(){
        switch(this.id)
        {
            case "rose-gem":
                score+=rose.value;
                console.log("Rose Value: " + rose.value + " New Total: " + score);
                break;
            case "amethyst-gem":
                score+=amethyst.value;
                console.log("Amethyst Value: " + amethyst.value + " New Total: " + score);
                break;
            case "ruby-gem":
                score+=ruby.value;
                console.log("Ruby Value: " + ruby.value + " New Total: " + score);
                break;
            case "sapphire-gem":
                score+=sapphire.value;
                console.log("Sapphire Value: " + sapphire.value + " New Total: " + score);
                break;
        }
        $("#total-score").html("<p id='score-text'>Your total score is:  " + '<br/>' + score + "</p>");
        calculateScore();
    })

};

function calculateScore(){
    if (score === randomNumber){
        wins++;
        alert("Winner!");
        reset();
    }
    if (score > randomNumber){
        losses++;
        alert("Loser!");
        reset();
    }
    $("#wins-losses").html("<p id='wins-losses-text'>Wins:  " + wins + '<br/>' + "Losses: " + losses + "</p>");
};

function reset(){
    rose.value = (Math.floor(Math.random() * 12) + 1);
    amethyst.value = (Math.floor(Math.random() * 12) + 1);
    ruby.value = (Math.floor(Math.random() * 12) + 1);
    sapphire.value = (Math.floor(Math.random() * 12) + 1);
    randomNumber = Math.floor(Math.random() * 109) + 12;
    score = 0;
    $("#number").html("<p id='number-text'>RandomNum:  " + randomNumber + "</p>");
    $("#total-score").html("<p id='score-text'>Your total score is:  " + '<br/>' + score + "</p>");

};