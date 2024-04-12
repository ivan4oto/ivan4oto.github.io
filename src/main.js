import { jokes } from "./jokes.js"

var images = [
    "https://i.ibb.co/hfkYVjR/sashoto1.jpg",
    "https://i.ibb.co/P4Q2dcK/sashoto01.jpg",
    "https://i.ibb.co/Jk3qyxF/sashoto02.jpg",
    "https://i.ibb.co/pxzdnY3/sashoto03.jpg",
    "https://i.ibb.co/JpMkLQP/sashoto04.jpg"
]


for (const [key, value] of Object.entries(jokes)) {
    var selectForm = document.getElementById("select-form");
    selectForm.innerHTML += `<option>${key}</option>`
  }
console.log(jokes)
console.log('running')
var jokeButton = document.getElementById("jokeBtn")

jokeButton.onclick = function() { 
    var e = document.getElementById("select-form");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    var personalJokes = jokes[text]
    var joke = personalJokes[Math.floor(Math.random()*personalJokes.length)];
    var sasho = images[Math.floor(Math.random()*images.length)];
    document.getElementById("modalImg").src=sasho;
    document.getElementById("joke").innerHTML = joke

};