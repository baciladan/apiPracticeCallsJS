function handleResponse(response) {
    if (response.status >= 200 && response.status <= 299) {
        return response.json();
    }
    else {
        throw Error("There has been an error!");
    }
}

function returnSelectValue() {
    let select = document.getElementById("dogCatFoxSelect");
    return select.value;
}

function fetchDog() {
    let baseUrlDog = "https://dog.ceo/api/breeds/image/random";
    fetch(baseUrlDog, { method: 'GET' })
        .then(handleResponse)
        .then(function (parsedResponse) {
            let container = document.getElementById("animalImageContainer");
            let dogImage = new Image();
            dogImage.src = parsedResponse.message;
            container.innerHTML = "";
            container.append(dogImage);
        })

}
function fetchCat() {
    let baseUrlCat = "https://api.thecatapi.com/v1/images/search";
    fetch(baseUrlCat, { method: 'GET' })
        .then(handleResponse)
        .then(function (parsedResponse) {
            let container = document.getElementById("animalImageContainer");
            let catImage = new Image();
            // This API returns the response as an array so we use [0] to work with that array and it's contents
            catImage.src = parsedResponse[0].url;
            container.innerHTML = "";
            container.append(catImage);
        })
}

function fetchChuck() {
    let baseUrlChuck = "http://api.icndb.com/jokes/random";
    fetch(baseUrlChuck, { method: 'GET' })
        .then(handleResponse)
        .then(function (parsedResponse) {
            let container = document.getElementById("chuckContainer");
            container.innerHTML = "";
            container.innerHTML = parsedResponse.value.joke;
        })
}

function fetchJoke() {
    let baseUrlJoke = "https://official-joke-api.appspot.com/jokes/programming/random";
    fetch(baseUrlJoke, { method: 'GET' })
        .then(handleResponse)
        .then(function (parsedResponse) {
            let container = document.getElementById("progContainer");
            container.innerHTML = "";
            let setupContainer = document.createElement("h3");
            let punchlineContainer = document.createElement("p");
            setupContainer.innerText = parsedResponse[0].setup;
            punchlineContainer.innerText = parsedResponse[0].punchline;
            container.append(setupContainer, punchlineContainer);
        })
}

function fetchFox() {
    // let baseUrlFox = "https://randomfox.ca/floof/";
    // fetch(baseUrlFox, { method: 'GET' })
    //     .then(function (parsedResponse) {
    //         let container = document.getElementById("animalImageContainer");
    //         let foxImage = new Image();
    //         console.log(parsedResponse);

    //         foxImage.src = parsedResponse.image;
    //         container.innerHTML = "";
    //         container.append(foxImage);
    //     })
    let container = document.getElementById("animalImageContainer");
    container.innerHTML = "Sorry! This API does not work Yet!";
}
// Function that generates number random to pick a rick and morty character

function GenerateRandomNumber() {
    return (Math.floor((Math.random() * 100) + 1));
}

function fetchRickNMortyCharacter() {
    let baseUrlRick = "https://rickandmortyapi.com/api/character";
    let characterNumber = GenerateRandomNumber();
    fetch(baseUrlRick + "/" + characterNumber, { method: 'GET' })
        .then(handleResponse)
        .then(function (parsedResponse) {
            let mainContainer = document.getElementById("rickContainer");
            let nameContainer = document.createElement("h3");
            let speciesContainer = document.createElement("p");
            let statusContainer = document.createElement("p");

            mainContainer.innerHTML = "";

            nameContainer.innerText = "Name: " + parsedResponse.name;
            speciesContainer.innerText = "Species: " + parsedResponse.species;
            if (parsedResponse.status === "Alive") {
                statusContainer.style.color = "green";
            }
            else {
                statusContainer.style.color = "red";
            }

            statusContainer.innerText = "Status: " + parsedResponse.status;

            mainContainer.append(nameContainer, speciesContainer, statusContainer);

        })
}

window.addEventListener("load", function () {
    let buttonDogCatFox = document.getElementById("dogCatFoxButton");
    buttonDogCatFox.addEventListener("click", function () {
        var value = returnSelectValue();
        if (value === "Dog") {
            fetchDog();
        } else if (value === "Fox") {
            fetchFox();
        } else if (value === "Cat") {
            fetchCat();
        }
    })
    let buttonChuck = document.getElementById("chuckButton");
    buttonChuck.addEventListener("click", function () {
        fetchChuck();
    })
    let buttonProgJoke = document.getElementById("progJokes");
    buttonProgJoke.addEventListener("click", function () {
        fetchJoke();
    })
    let buttonRick = document.getElementById("rickCharacter");
    buttonRick.addEventListener("click", function () {
        fetchRickNMortyCharacter();
    })
})