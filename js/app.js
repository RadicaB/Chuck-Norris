const button = document.querySelector('#button');
const randomJoke = document.querySelector('#random-joke');  //ui

class Joke {
    constructor(value) {
        this.value = value;
    }
}

const getJoke = () => {
    return fetch(`https://api.chucknorris.io/jokes/random`)
        .then((response) => response.json())
        .then((data) => console.log(data.value));
    //.then((rawObject) => { return new Joke(rawObject.joke) })    
}

const renderJoke = value.result.map(value => {
    return `
    <p class = "joke">${data.value}</p>`
} )

    



//function getJoke(e)  - data

button.addEventListener("click", getJoke);   //app