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
        .then((data) => {
            
    //console.log(data.value));
    //.then((rawObject) => { return new Joke(rawObject.joke) })    
            
    const jokeText = data.value;
    const jokeHTML = `<p>${jokeText}</p>`;            
    const jokeContainer = document.getElementById('main');
    jokeContainer.insertAdjacentHTML('afterend', jokeHTML);
  })
  .catch(error => console.log(error));
}


button.addEventListener("click", getJoke);   // app