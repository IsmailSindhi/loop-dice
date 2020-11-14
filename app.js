/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var score, roundScore, activePlayer, gamePlaying, winScore;

init();
document.querySelector(".btn-new").addEventListener('click',init)
document.querySelector(".btn-roll").addEventListener('click',Roll)
document.querySelector(".btn-hold").addEventListener('click',hold)

function Roll()
{
    if(gamePlaying){
        // random number
        var diceOne = Math.floor((Math.random() * 6) + 1);
        var diceTwo = Math.floor((Math.random() * 6) + 1);
        
        // console.log(diceOne,diceTwo);
        
        
        var dice_one = document.getElementById("dice-1");
        var dice_two = document.getElementById("dice-2");
        // set dise display
        dice_one.style.display = "block";
        dice_two.style.display = "block";
        
        dice_one.src = 'dice-'+diceOne+'.png';
        dice_two.src = 'dice-'+diceTwo+'.png';
        // scores
        roundScore += diceOne+diceTwo
        
        console.log(activePlayer);
        console.log(roundScore);
        
        if(diceOne !==1 && diceTwo !==1){
            document.getElementById("current-"+activePlayer).textContent = roundScore;
            // document.querySelector('#current-' + activePlayer).textContent() = roundScore;

        }else{
            nextPlayer();
        }
    }
}
function nextPlayer()
{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}

function hold()
{
    // Update Global Score
    scores[activePlayer] += roundScore;
    // Upadate UI
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    var final_score = document.querySelector('.final-score').value;
    if(final_score){
        winScore = final_score
    }else{
        winScore = 100;
        // console.log(winScore);
    }
    console.log(winScore);
    
    // Cheak won
    if (scores[activePlayer] >= winScore)
    {
        document.getElementById('name-'+activePlayer).textContent = "Winner";

        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';

        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying = false
    }else{
        nextPlayer()
    }
}






function init()
{
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";
    

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}



/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/