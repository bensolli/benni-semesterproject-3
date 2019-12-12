/*sets the items in local storage to a global variable*/
characterImages = JSON.parse(localStorage.getItem('players'));



/*defining the players*/
let playerOne = {
    tileNumber: 1,
    dragonEgg: 0,
    isPlayersturn: true,
    index: 0,
    playerType: "1",
    playerImage: characterImages[0]
}

let playerTwo = {
    tileNumber: 1,
    dragonEgg: 0,
    isPlayersturn: false,
    index: 1,
    playerType: "2",
    playerImage: characterImages[1]
}

/*makes a infocard for Player One*/
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

/*makes a infocard for Player Two*/
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

/*tells what tile-position the player is on*/
function playerCardPosition(player){
    let playerPosition = document.querySelector(".playerPosition-" + player.index);
    playerPosition.innerHTML = "";
    playerPosition.innerHTML += `
        Position: ${player.tileNumber}`;
}

/*tells whether the player has or has'nt a dragon egg*/
function eggInventory(traps){
    let eggContent = document.querySelector(".getDragonEgg-" + traps.index);
    eggContent.innerHTML = "";
    eggContent.innerHTML += `
    Dragon egg: ${traps.dragonEgg}`;
}

/*places the players on tile 1*/
itsPlayerTurn(playerOne);
itsPlayerTurn(playerTwo);

/*toggles the players turns*/
function togglePlayer() {
    if (playerOne.isPlayersturn == true) {
        playerTwo.isPlayersturn = true;
        playerOne.isPlayersturn = false;
        return playerTwo;
    }
    else {
        playerOne.isPlayersturn = true;
        playerTwo.isPlayersturn = false;
        return playerOne;
    }
}

/*indicates that it is Player Ones turn by turning player two opaic*/
document.getElementById("player-card-2").classList.add('player-Border-Indicator-On');

let playermodal = document.querySelector(".modal-wrapper-container");

/*places the players on the board*/
function playerturns() {

/*runs only if there is no popup modals*/
    if (!playermodal.hasChildNodes()){

        let player = togglePlayer();

        if (playerOne.isPlayersturn == true) {
            otherPlayer = playerTwo
        } else  otherPlayer = playerOne;

        theDice();

        otherPlayer.tileNumber = otherPlayer.tileNumber + diceNumber;
        
        itsPlayerTurn(otherPlayer);
        traps(otherPlayer);
        playerCardPosition(otherPlayer);
        if (diceSix(otherPlayer) !== true){
            /*adds a style to the player cards depending who's turn it is*/
            document.getElementById("player-card-" + (otherPlayer.index + 1)).classList.add('player-Border-Indicator-On');
            document.getElementById("player-card-" + (player.index + 1)).classList.remove('player-Border-Indicator-On');
            console.log(player);
        }
    }
}

/*checks if the dice is six and grants another turn*/
function diceSix(otherPlayer) {

    if (diceNumber === 6) {
        togglePlayer();
        diceSixModal(otherPlayer); 
        playerCardPosition(otherPlayer);
        return true;
    }

    return false;

}

/*message after getter a six on the dice*/
function diceSixModal(otherPlayer) {
    setTimeout(function () {
        playermodal.innerHTML += `<div class="modal-wrapper">
                <div class="modal-card">
                    <h2>Player ${otherPlayer.playerType} got six and is granted another turn!</h2>
                    <button onclick="clearModal()">continue</button>
                </div>
            </div>`;
    }, 1100);   
}

/*collecting all the traps in one function, defining where they will occur*/
function traps(traps) {
   
    switch (traps.tileNumber){
        case 3:
        case 25:
            spikeTrap(traps);
            playerCardPosition(traps);
            break;
        case 14:
        case 28:
            whiteWalker(traps);
            playerCardPosition(traps);
            break;
        case 7:
            dragonEgg(traps);
            playerCardPosition(traps);
            break;
        case 8:
        case 17:
            firetrap(traps);
            playerCardPosition(traps);
            break;
        case 30:
            checkIfWon(traps);
    }

   // if (traps.tileNumber < 1) {
    //   traps.tileNumber = 1;
   // }

    //???//
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

/*Placing its token on the respective step on the gameboard*/
function itsPlayerTurn(player) {
    setTimeout(function () {
        
        let playertoken1 = document.querySelector("#player-" + player.index);
         
        if (playertoken1) {
            playertoken1.remove();
        }

        let playertokens = document.querySelector(".board_step-" + player.tileNumber);
        /*getting the items from local storage, and converting it to a usable array*/
        let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : []
        console.log(playerArray);
        
        playertokens.innerHTML += `<div id="player-${player.index}"><img src=${playerArray[player.index]} /></div>`;

            

    }, 500);
}

/*spike trap, player has to go back to start*/
function spikeTrap(player) {

    setTimeout(function () {
        player.tileNumber = 1;
        itsPlayerTurn(player);
       
        playermodal.innerHTML += `<div class="modal-wrapper">
                <div class="modal-card">
                    <h2>Oh no! player ${player.playerType} you stept on deadly spikes, go back to start!</h2>
                    <button onclick="clearModal()">continue</button>
                </div>
            </div>`;
    }, 1100); 
}

/*Dragon egg, (antitrap), if aquired the player is able to survive the firetrap*/
function dragonEgg(traps) {
    setTimeout(function () {

        traps.dragonEgg =  1;
        itsPlayerTurn(traps);

        playermodal.innerHTML += `<div class="modal-wrapper">
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
            itsPlayerTurn(traps);
           
            playermodal.innerHTML += `<div class="modal-wrapper">
                    <div class="modal-card">
                        <h2>Player ${traps.playerType} skipped the fire with one extra step, sadly the dragon egg hatched and flew away</h2>
                        <button onclick="clearModal()">continue</button>
                    </div>
                </div>`;
                eggInventory(traps);
        } else {
            traps.tileNumber = traps.tileNumber - 7;
            itsPlayerTurn(traps);
           
            playermodal.innerHTML += `<div class="modal-wrapper">
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
        itsPlayerTurn(traps);
        
        playermodal.innerHTML += 
        `<div class="modal-wrapper">
                <div class="modal-card">
                    <h2>Oh no! player ${traps.playerType} just encountered a white walker! Save yourself! run back 10 steps</h2>
                    <button onclick="clearModal()">continue</button>
                </div>
            </div>`; 
                 
    }, 1100);
}

/*sets the key ENTER as a way of turning the dice and pressing "Continue buttons"*/
document.getElementById("pressEnter").addEventListener("keyup", function(event){

    if (event.keyCode === 32) {
        event.preventDefault();
        playerturns();
      }
 
      if (event.keyCode === 13) {
        event.preventDefault();
        clearModal();
      }
});
    

/*clears all open modals on the board*/
function clearModal() {
    playermodal.removeChild(playermodal.lastElementChild);
}

/*this sets whoever reaches step 30 or more to local storage, and opens a new window displaying the winner*/
function checkIfWon(traps) {
    setTimeout(function () {
        localStorage.setItem('winner', JSON.stringify('Player' + ' ' + traps.playerType + ' ' + 'is the winner!'));
        localStorage.setItem('winnerImg', JSON.stringify(traps.playerImage));
        window.open("winner-page.html", "_top");
    }, 1500);
}







