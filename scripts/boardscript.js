let playerOne = {
    tileNumber: 1,
    isPlayersturn: true
}

let playerTwo = {
    tileNumber: 1,
    isPlayersturn: false
}



function playerturns(){

    if(playerOne.isPlayersturn == true){
        
        playerTwo.isPlayersturn = true;
        playerOne.isPlayersturn = false;
        
        theDice();
        playerOne.tileNumber = playerOne.tileNumber + diceNumber;
        console.log(playerOne.tileNumber);


        itsPlayerOnesTurn();
        //playerOneClear = playerOne.tileNumber - clearsteps;
        //console.log(playerOneClear);

        let playerOneinneHTML = document.querySelector("#playerOnesTurn");
        playerOneinneHTML.innerHTML = "";

        playerOneinneHTML.innerHTML += `
        <h3>its player one's turn</h3>`;


    } else {
        playerOne.isPlayersturn = true;
        playerTwo.isPlayersturn = false;

        theDice();
        playerTwo.tileNumber = playerTwo.tileNumber + diceNumber;
        itsPlayerTwosTurn();
        //playerTwoClear = playerTwo.tileNumber - clearsteps;
        //console.log(playerTwoClear); 
        
        let playerTwoinneHTML = document.querySelector("#playerTwosTurn");
        playerTwoinneHTML.innerHTML = "";

        playerTwoinneHTML.innerHTML += `
        <h3>its player one's turn</h3>`;
        
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
    
    diceNumber = Math.floor(Math.random() * 6) + 1;
    
    let displayNumber = document.querySelector("#dicenumber");
    displayNumber.innerHTML = "";
    displayNumber.innerHTML += `
    <p>${diceNumber}</p>`;

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



function itsPlayerOnesTurn(){


    if(playerOne.tileNumber > 1 ){
        let playertokens = document.querySelector(".gameBoard__block-" + playerOne.tileNumber);
        playertokens.innerHTML = "";

        playerOneClear = playerOne.tileNumber - diceNumber;
        console.log(playerOneClear);
        
        let playertoken1 = document.querySelector(".gameBoard__block-" + playerOneClear);
        playertoken1.innerHTML = "";

                    /*getting the items from local storage, and converting it to a usable array*/
    let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : []
    console.log(playerArray);

        playertokens.innerHTML += `
        <div class="playertoken"><img src=${playerArray[0]} /></div>`;

    } else{
        let playertokens = document.querySelector(".gameBoard__block-" + playerOne.tileNumber);
        playertokens.innerHTML = "";

            /*getting the items from local storage, and converting it to a usable array*/
    let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : []
    console.log(playerArray);

        playertokens.innerHTML += `
        <div class="playertoken"><img src=${playerArray[0]} /></div>`;
    }

}

function itsPlayerTwosTurn(){



    if(playerOne.tileNumber > 1 ){
    let playertokens = document.querySelector(".gameBoard__block-" + playerTwo.tileNumber);
    playertokens.innerHTML = "";

    playerTwoClear = playerTwo.tileNumber - diceNumber;
    console.log(playerTwoClear);
    
    let playertoken1 = document.querySelector(".gameBoard__block-" + playerTwoClear);
    playertoken1.innerHTML = "";

    /*getting the items from local storage, and converting it to a usable array*/
    let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : []
    console.log(playerArray);

        playertokens.innerHTML += `
        <div class="playertoken"><img src=${playerArray[1]} /></div>`;
    } else{
        let playertoken1 = document.querySelector(".gameBoard__block-" + playerTwoClear);
        playertoken1.innerHTML = "";
    
        /*getting the items from local storage, and converting it to a usable array*/
        let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : []
        console.log(playerArray);
    
            playertokens.innerHTML += `
            <div class="playertoken"><img src=${playerArray[1]} /></div>`;
    }
}





