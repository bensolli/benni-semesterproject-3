
characters = [];

/*SelectedPlayer stores the selected players*/
selectedPlayers = [];




function selectCharacter(id){
    addPlayer(id);
    markSelectedPlayersChecked();
    fetchCharacterInfo(id)
    .then(createCard);
}


function fetchCharacterInfo(id) {
    return fetch('https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/characters/' + id)
    .then((response) => response.json()).then((CharacterInfo) => characters[id] = CharacterInfo);
}






function createCard(){

    let someCards = document.getElementById("cards");

    someCards.innerHTML = "";

    for (let i = 0; i < selectedPlayers.length; i++){ 

        let id = selectedPlayers[i];

        let character = characters[id];
        
        someCards.innerHTML += `
            <div class="card">
            <h3>Player ${i+1}</h3>
            <h2>${character.name}</h2>
            <p>${character.culture}</p>
            <p>${character.gender}</p>
            <p>${character.playedBy}</p>
            <hr>`;
    }

    


    /*
    let someCards = document.getElementById("cards");
    someCards.innerHTML = "";
    someCards.innerHTML += `
    <div class="card">
    <h3>${player1}</h3>
    <h2>${id.name}</h2>
    <p>${id.culture}</p>
    <p>${id.gender}</p>
    <p>${id.playedBy}</p>`;
*/


}







/*Limits SelectedPlayer to have two element*/
function addPlayer(id){

    /*Adds the selected players to the end of SelectedPlayer*/
    selectedPlayers.push(id);

    /*Overwrites SelectedPlayer to only contain the two last selected players*/
    selectedPlayers = selectedPlayers.slice(-2);

}

function markSelectedPlayersChecked() {
      
    /*unchecking all the checkboxeses*/
    let checkboxList = document.getElementsByTagName('input');
    for (let i = 0; i < checkboxList.length; i++){ 
        checkboxList[i].checked = false;
    }
    

    /*loops the characterArray to check the added players*/
    for (let i = 0; i < selectedPlayers.length; i++){ 
        document.getElementById("character-checkbox-" + selectedPlayers[i]).checked = true;
    }  
}


//how to somehow signify whats player 1 and 2?

