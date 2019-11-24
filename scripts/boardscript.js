let playerOne = {
    tileNumber: 1,
    isPlayersturn: true
}

let playerTwo = {
    tileNumber: 1,
    isPlayersturn: false
}



function playerturns() {

    playersTurnModal();
    checkifwon();

    if (playerOne.isPlayersturn == true) {

        playerTwo.isPlayersturn = true;
        playerOne.isPlayersturn = false;

        theDice();
        playerOne.tileNumber = playerOne.tileNumber + diceNumber;
        console.log(playerOne.tileNumber);


        itsPlayerOnesTurn();
        //playerOneClear = playerOne.tileNumber - clearsteps;
        //console.log(playerOneClear);



    } else {
        playerOne.isPlayersturn = true;
        playerTwo.isPlayersturn = false;

        theDice();

        playerTwo.tileNumber = playerTwo.tileNumber + diceNumber;

        itsPlayerTwosTurn();





        //playerTwoClear = playerTwo.tileNumber - clearsteps;
        //console.log(playerTwoClear); 

    }

    console.log(playerOne);
    console.log(playerTwo);

}


function rollTheDice() {

    playerturns();
    //createPlayers();

}

//startNumber = 0;

//diceArray = [];





function theDice() {
    //console.log(diceArray);
    // diceArray = diceArray.slice(-2);
    playAudio();
    diceNumber = Math.floor(Math.random() * 6) + 1;
    let diceImage = "images/dice/dice-" + diceNumber + ".svg";
    document.querySelector('.dice-img').setAttribute('src', diceImage);


    // startNumber = startNumber + diceNumber;
    //console.log(startNumber);

    // diceArray.push(startNumber);
    //clearsteps = diceArray[0];
    //console.log(clearsteps);

    /*
    theNumber1 = playerOne.tileNumber;
    theNumber1 = theNumber1 - diceNumber;
    
    theNumber2 = playerTwo.tileNumber;
    theNumber2 = theNumber2 - diceNumber;
    
    console.log(theNumber2);
*/

    //rolldiceofturn();
}



function itsPlayerOnesTurn() {
    setTimeout(function () {

        if (playerOne.tileNumber > 1) {
            let playertokens = document.querySelector(".board_step-" + playerOne.tileNumber);
            playertokens.innerHTML = "";

            playerOneClear = playerOne.tileNumber - diceNumber;
            console.log(playerOneClear);

            let playertoken1 = document.querySelector(".board_step-" + playerOneClear);
            playertoken1.innerHTML = "";

            /*getting the items from local storage, and converting it to a usable array*/
            let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : []
            console.log(playerArray);

            playertokens.innerHTML += `
        <div class="playertoken"><img src=${playerArray[0]} /></div>`;

        } else {
            let playertokens = document.querySelector(".board_step-" + playerOne.tileNumber);
            playertokens.innerHTML = "";

            /*getting the items from local storage, and converting it to a usable array*/
            let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : []
            console.log(playerArray);

            playertokens.innerHTML += `
        <div class="playertoken"><img src=${playerArray[0]} /></div>`;
        }

    }, 500);

}

function itsPlayerTwosTurn() {
    setTimeout(function () {


        if (playerOne.tileNumber > 1) {
            let playertokens = document.querySelector(".board_step-" + playerTwo.tileNumber);
            playertokens.innerHTML = "";

            playerTwoClear = playerTwo.tileNumber - diceNumber;
            console.log(playerTwoClear);

            let playertoken1 = document.querySelector(".board_step-" + playerTwoClear);
            playertoken1.innerHTML = "";

            /*getting the items from local storage, and converting it to a usable array*/
            let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : [];
            console.log(playerArray);

            playertokens.innerHTML += `
        <div class="playertoken"><img src=${playerArray[1]} /></div>`;
        } else {
            let playertoken1 = document.querySelector(".board_step-" + playerTwoClear);
            playertoken1.innerHTML = "";

            /*getting the items from local storage, and converting it to a usable array*/
            let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : [];
            console.log(playerArray);

            playertokens.innerHTML += `
            <div class="playertoken"><img src=${playerArray[1]} /></div>`;
        }
    }, 500);
}


function playersTurnModal() {

    setTimeout(function () {
        if (playerOne.isPlayersturn == true) {
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
        <div class="modal-wrapper">
            <div class="modal-card">
                <h2>Its player one's turn!</h2>
                <button onclick="clearModal()">continue</button>
            </div>
        </div>`;
        } else {
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
        <div class="modal-wrapper">
            <div class="modal-card">
                <h2>Its player two's turn!</h2>
                <button onclick="clearModal()">continue</button>
            </div>
        </div>`;
        }
    }, 1000);
}

function clearModal() {
    let playermodal = document.querySelector(".modal-wrapper-container");
    playermodal.innerHTML = "";
}

function checkifwon() {
    if (playerOne.tileNumber >= 30) {
        localStorage.setItem('winner', JSON.stringify('Player One is the winner!'));
        window.open("winner-page.html", "_top");

    } else {
        localStorage.setItem('winner', JSON.stringify('Player Two is the winner!'));
        if (playerTwo.tileNumber >= 30) {
            window.open("winner-page.html", "_top");

        } else {
            
        }
    }
}

/*adds sound effects*/
function playAudio() { 
    let x = document.getElementById("characterAudio"); 
      x.play(); 
    } 
    




