let helloBtn    = document.getElementById("helloBtn");
let loginBtn    = document.getElementById("loginBtn");
let logoutBtn   = document.getElementById('logout');
let divEvent    = document.getElementById("divEvent");
let myList      = document.getElementById("list");
let myForm      = document.getElementById("form");
let catBtn = document.getElementById('cat-fact');
let catFact = document.getElementById('fact');
let caesBtn = document.getElementById('🐶');
let rickBtn     = document.getElementById('rickandmortypeople');
let rickList    = document.getElementById('rick-list');

 
function helloW()
{alert("hello mundo!");}

function login(){
if (localStorage.getItem("user_login")) {
    alert("Olá " + localStorage.getItem("user_login"));
  } else {
    let user = prompt("qual é o teu nome?");
 
    localStorage.setItem("user_login", user);
  }}

function changeToGreen() {
  this.style.backgroundColor = "green";
}
 
helloBtn.addEventListener("mouseout", helloW);
loginBtn.addEventListener("click", login,)
//loginBtn.addEventListener("click", helloW);
loginBtn.addEventListener("click", helloW);
divEvent.addEventListener("click", changeToGreen);
loginBtn.addEventListener("click", changeToGreen);
helloBtn.addEventListener("click", changeToGreen);
 
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key == "l" || event.key == "L") {
    alert("evento de teclado!" + event.key);
  }
});
 
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //traz um objecto com TODOS os inputs do formulário
  let data = new FormData(this);
 
  //acede ao input do formulário que tem no name newAnimal
  let animal = data.get("newAnimal");
 
  let newLi = document.createElement("li");
  newLi.innerText = animal;
 
  myList.appendChild(newLi);
 
  this.reset();
 
});

logoutBtn.addEventListener('click', function(){
  localStorage.removeItem('user_login')
})

catBtn.addEventListener('click', function(){
fetch('https://catfact.ninja/fact')
.then(response => response.json())
.then(data => {
// (verifica-se primeiro) - Console.log(data.fact)   
    catFact.innerText = data.fact;
})
})

document.getElementById('dog_image').addEventListener('click', function () {
    fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => response.json())
.then((data) =>{
    const img = document.createElement('img');
img.src = data.message;
document.body.appendChild(img);
});
});

rickBtn.addEventListener("click", function () {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      for (let element of data.results) {
        console.log(element.name);
        let li = document.createElement('li');
        li.innerText = element.name;
 
        rickList.appendChild(li);
      }
    });
});