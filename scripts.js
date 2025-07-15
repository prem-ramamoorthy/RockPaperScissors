let score = JSON.parse(localStorage.getItem('score'));
if(score === null ){
    score = {win : 0 , lose : 0 , tie : 0 } ;
}
function ComputerPrediction() {
    const ComputerNo = Math.random();
    if (ComputerNo <= 1 / 3 && ComputerNo > 0) {
        return 'Rock';
    } else if (ComputerNo <= 2 / 3 && ComputerNo > 1 / 3) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
function updater(result , playermove , computermove , score){
    document.querySelector('.Result').innerHTML = `Result : <p class="result-emoji">${result}</p> ` ;
    document.querySelector('.score').innerHTML = `Total wins : ${score.win} , Total Lose : ${score.lose} , Total Ties : ${score.tie} ` ;
    document.querySelector('.Moves').innerHTML = `Your Move : <p class="result-emoji">${playermove}</p>  , computer move : <p class="result-emoji">${computermove}</p>` ;
}

function playgame(playerChoice) {
    const computerChoice = ComputerPrediction();
    if (playerChoice === 'Scissors') {
        if (computerChoice === 'Scissors') {
            score.tie += 1;
            updater( "🟰" , "✌️" , "✌️" , score)
        } else if (computerChoice === 'Paper') {
            score.win += 1;
            updater( "🏆" , "✌️" , "🖐️"  , score)
        } else {
            score.lose += 1;
            updater( "😶‍🌫️" , "✌️" , "✊" , score)
        }
    } else if (playerChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            score.win += 1;
            updater( "🏆" , "✊" , "✌️" , score)
        } else if (computerChoice === 'Paper') {
            score.lose += 1;
            updater( "😶‍🌫️" , "✊" , "🖐️" , score)
        } else {
            score.tie += 1;
            updater( "🟰" , "✊" , "✊" , score)
        }
    } else if (playerChoice === 'Paper') {
        if (computerChoice === 'Scissors') {
            score.lose += 1;
            updater( "😶‍🌫️" , "🖐️"  , "✌️" , score)
        } else if (computerChoice === 'Paper') {
            score.tie += 1;
            updater( "🟰" , "🖐️"  , "🖐️"  , score)
        } else {
            score.win += 1;
            updater( "🏆" , "🖐️"  , "✊" , score)
        }
    }
    localStorage.setItem('score', JSON.stringify(score));
}
function resetScore() {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem('score');
    updater( "___" , "___" , "___" , "Total wins : __ , Total Lose : __ , Total Ties : __ ") ;
    document.querySelector('.Moves').innerHTML = `Your Move : ______  , computer move : _______` ;
    document.querySelector('.score').innerHTML = `Total wins : __ , Total Lose : __ , Total Ties : __` ;
    document.querySelector('.Result').innerHTML = `Result : ____ ` ;
}