function getcards(id) {
/*husk å separere disse to*/
    fetch('https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/characters/' + id)
        .then((res) => res.json())
        .then((data) => {
            let result2 = data;
            console.log(data);

            let someCards = document.getElementById("cards");
            someCards.innerHTML = "";
            someCards.innerHTML += `
            <div class="card">
            <h2>${result2.name}</h2>
            <p>${result2.gender}</p>
            <p>${result2.culture}</p>
            <p>${result2.born}</p>`;

        })
        
        addPlayer(id);
        markSelectedPlayersChecked();
}


/*SelectedPlayer stores the selected players*/
selectedPlayers = [];

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


