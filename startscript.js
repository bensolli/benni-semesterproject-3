function getcards(id) {

    fetch('https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/characters/' + id)
        .then((res) => res.json())
        .then((data) => {
            let result2 = data;
            console.log(data);

            let someCards = document.getElementById("cards");
            someCards.innerHTML = "";
            someCards.innerHTML += `
            <div class="card">
            <h2> ${result2.name} </h2>
            <p> ${result2.gender} </p>
            <p> ${result2.culture}</p>
            <p> ${result2.born} </p>`;

        })

}