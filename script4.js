

const joke = document.getElementById('joke');
const createbutton =document.getElementById('create');
const urljoke = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getjoke = ()=>{
fetch(urljoke).then(data =>data.json()).then(item =>joke.textContent = `${item.joke}`);
}
createbutton.addEventListener('click',getjoke);
getjoke();









