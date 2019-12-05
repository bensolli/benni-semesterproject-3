/*defining the players*/
let playerOne = {
    tileNumber: 1,
    dragonEgg: 0,
    isPlayersturn: true,
    index: 0,
    playerType: "one"
}

let playerTwo = {
    tileNumber: 1,
    dragonEgg: 0,
    isPlayersturn: false,
    index: 1,
    playerType: "two"
}


characterImages = JSON.parse(localStorage.getItem('players'));
/*document.querySelector(".board_step-1").innerHTML += `<img src="${characterImages[0]}" />`;
document.querySelector(".board_step-1").innerHTML += `<img src="${characterImages[1]}" />`;*/


let playerCard1 = document.querySelector(".player-card-1");
playerCard1.innerHTML += `
<div class="player-card_img"><img src="${characterImages[0]}" /></div>
<div class="player-card_text">
    <ul>
        <li><h3>Player 1</h3></li>
        <li class="playerPosition-0">Position:${playerOne.tileNumber}</li>
        <li class="getDragonEgg-0">Dragon egg: ${playerOne.dragonEgg}</li>
    </ul>
</div>`;


let playerCard2 = document.querySelector(".player-card-2");
playerCard2.innerHTML += `
<div class="player-card_img"><img src="${characterImages[1]}" /></div>
<div class="player-card_text">
    <ul>
        <li><h3>Player 2</h3></li>
        <li class="playerPosition-1">Position:${playerTwo.tileNumber}</li>
        <li class="getDragonEgg-1">Dragon egg: ${playerTwo.dragonEgg}</li>
    </ul>
</div>`;


function playerCardPosition(player){
    let playerPosition = document.querySelector(".playerPosition-" + player.index);
    playerPosition.innerHTML = "";
    playerPosition.innerHTML += `
        Position: ${player.tileNumber}`;
}

function eggInventory(traps){
    let eggContent = document.querySelector(".getDragonEgg-" + traps.index);
    eggContent.innerHTML = "";
    console.log("bennies code",traps.dragonEgg)
    eggContent.innerHTML += `
    Dragon egg: ${traps.dragonEgg}`;
}

/*toggles the players turns*/
if (playerOne.tileNumber = 1) {
    document.querySelector(".board_step-1").innerHTML += `<img src="${characterImages[0]}" />`;
}
if (playerTwo.tileNumber = 1) {
    document.querySelector(".board_step-1").innerHTML += `<img src="${characterImages[1]}" />`;
}


function truOrFalse() {
    if (playerOne.isPlayersturn == true) {
        playerTwo.isPlayersturn = true;
        playerOne.isPlayersturn = false;
    }
    else {
        playerOne.isPlayersturn = true;
        playerTwo.isPlayersturn = false;
    }
}
document.getElementById("player-card-2").classList.add('player-Border-Indicator-On');

function playerturns() {

    if (playerOne.isPlayersturn == true) {
        truOrFalse();
        theDice();

        playerOne.tileNumber = playerOne.tileNumber + diceNumber;
        if (playerOne.tileNumber > 1) {
            document.querySelector(".board_step-1").innerHTML = "";
        }
        if (playerTwo.tileNumber === 1) {
            document.querySelector(".board_step-1").innerHTML += `<img src="${characterImages[1]}" />`;
        }
        console.log(diceNumber, playerOne.tileNumber);
        itsPlayerTurn(playerOne);
        traps(playerOne);
        diceSix();
        playerCardPosition(playerOne);

        document.getElementById("player-card-1").classList.add('player-Border-Indicator-On');
        document.getElementById("player-card-2").classList.remove('player-Border-Indicator-On');
    }

    else {
        truOrFalse();
        theDice();
        playerTwo.tileNumber = playerTwo.tileNumber + diceNumber;
        if (playerOne.tileNumber > 1) {
            document.querySelector(".board_step-1").innerHTML = "";
        }
        console.log(diceNumber, playerTwo.tileNumber);
        itsPlayerTurn(playerTwo);
        traps(playerTwo);
        diceSix();
        playerCardPosition(playerTwo);

        document.getElementById("player-card-2").classList.add('player-Border-Indicator-On');
        document.getElementById("player-card-1").classList.remove('player-Border-Indicator-On');
    }
    console.log(playerOne);
    console.log(playerTwo);
}


function diceSix() {
    if (diceNumber == 6) {
        truOrFalse();
        diceSixModal();
    }

    console.log(playerOne.isPlayersturn);
    console.log(playerTwo.isPlayersturn);

}

/*message after getter a six on the dice*/
function diceSixModal() {
    setTimeout(function () {
        let playermodal = document.querySelector(".modal-wrapper-container");
        playermodal.innerHTML += `
            <div class="modal-wrapper">
                <div class="modal-card">
                    <h2>You got six and is granted another turn!</h2>
                    <button onclick="clearModal()">continue</button>
                </div>
            </div>`;
    }, 1100);   
}


/*collecting all the traps in one function*/
function traps(traps) {
    if (traps.tileNumber === 3) {
        spikeTrap(traps);
    }
    if (traps.tileNumber === 7) {
        dragonEgg(traps);  
    }
    if (traps.tileNumber === 8) {
        firetrap(traps);   
    }
    if (traps.tileNumber === 14) {
        whiteWalker(traps);
    }
    if (traps.tileNumber === 17) {
        firetrap(traps);
    }
    if (traps.tileNumber === 25) {
        spikeTrap(traps);
    }
    if (traps.tileNumber === 28) {
        whiteWalker(traps);
    }
    if (traps.tileNumber === 30) {
        checkIfWon(traps);
    }
    if (traps.tileNumber > 30) {
        traps.tileNumber = traps.tileNumber - diceNumber;
    }
}

/*the dice function, outputs a random number and sets the dice*/
function theDice() {
    playAudio();
    diceNumber = Math.floor(Math.random() * 6) + 1;
    let diceImage = "images/dice/dice-" + diceNumber + ".svg";
    document.querySelector('.dice-img').setAttribute('src', diceImage);
}

/*displays whatever players turn it is, and placing its token on the respective step on the gameboard*/
function itsPlayerTurn(player) {
    setTimeout(function () {
        let playertokens = document.querySelector(".board_step-" + player.tileNumber);
        let playertoken1 = document.querySelector("#player-" + player.index);
        if (playertoken1) {
            playertoken1.remove();
        }

        /*
                if(characterImages){
                    characterImages[player.index].remove();
                }*/

        /*getting the items from local storage, and converting it to a usable array*/
        let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : []
        console.log(playerArray);
        playertokens.innerHTML += `
            <div id="player-${player.index}"><img src=${playerArray[player.index]} /></div>`;
    }, 500);
}


/*spike trap, player has to go back to start*/
function spikeTrap(traps) {
    setTimeout(function () {
        traps.tileNumber = 1;
        let playermodal = document.querySelector(".modal-wrapper-container");
        playermodal.innerHTML += `
            <div class="modal-wrapper">
                <div class="modal-card">
                    <h2>Oh no! player ${traps.playerType} you stept on deadly spikes, go back to start!</h2>
                    <button onclick="clearModal()">continue</button>
                </div>
            </div>`;
    }, 1100);
    
}


/*Dragon egg, (antitrap), if aquired the player is able to survive the firetrap*/
function dragonEgg(traps) {
    setTimeout(function () {
        traps.dragonEgg =  1;
        let playermodal = document.querySelector(".modal-wrapper-container");
        playermodal.innerHTML += `
            <div class="modal-wrapper">
                <div class="modal-card">
                    <h2>Player ${traps.playerType} aquired a dragon egg, and is now fireresistant!</h2>
                    <button onclick="clearModal()">continue</button>
                </div>
            </div>`;
            eggInventory(traps);
    }, 1100);
}

/*Firetrap, the players has to go back 10 steps if they do not have a dragon egg*/
function firetrap(traps) {
    setTimeout(function () {
        if (traps.dragonEgg === 1) {
            traps.tileNumber = traps.tileNumber + 1;
            traps.dragonEgg = 0;
            console.log("camerons code",traps.dragonEgg)
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
                <div class="modal-wrapper">
                    <div class="modal-card">
                        <h2>Player ${traps.playerType} skipped the fire with one extra step, sadly the dragon egg hatched and flew away</h2>
                        <button onclick="clearModal()">continue</button>
                    </div>
                </div>`;
                eggInventory(traps);
        } else {
            traps.tileNumber = traps.tileNumber - 7;
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
                <div class="modal-wrapper">
                    <div class="modal-card">
                        <h2>Oh no! player ${traps.playerType} had to run back seven steps to put out the fire</h2>
                        <button onclick="clearModal()">continue</button>
                    </div>
                </div>`;
        }
    }, 1100);
}

/*white walker, basically the same as firetrap, without possibility to avoid it*/
function whiteWalker(traps) {
    setTimeout(function () {
        traps.tileNumber = traps.tileNumber - 10;
        let playermodal = document.querySelector(".modal-wrapper-container");
        playermodal.innerHTML += `
            <div class="modal-wrapper">
                <div class="modal-card">
                    <h2>Oh no! player ${traps.playerType} just encountered a white walker! Save yourself! run back 10 steps</h2>
                    <button onclick="clearModal()" >continue</button>
                </div>
            </div>`;       
    }, 1100);
}


document.getElementById("pressEnter").addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        playerturns();
        clearModal();
      }
    });


/*clears all open modals on the board*/
function clearModal() {
    let playermodal = document.querySelector(".modal-wrapper-container");
    playermodal.innerHTML = "";
}


/*this sets whoever reaches step 30 or more to local storage, and opens a new window displaying the winner*/
function checkIfWon(traps) {
    setTimeout(function () {
    localStorage.setItem('winner', JSON.stringify('Player' + ' ' + traps.playerType + ' ' + 'is the winner!'));
    window.open("winner-page.html", "_top");
}, 1500);
}

/*adds sound effects*/
function playAudio() {
    let x = document.getElementById("characterAudio");
    x.play();
}





