helloBtn.addEventListener("mouseout", helloW);
loginBtn.addEventListener("click", login,)
loginBtn.addEventListener("click", helloW);
divEvent.addEventListener("click", changeToGreen);
loginBtn.addEventListener("click", changeToGreen);
helloBtn.addEventListener("click", changeToGreen);

let helloBtn    = document.getElementById("helloBtn");
let myForm      = document.getElementById("form");
let catBtn = document.getElementById('cat-fact');
let rickBtn     = document.getElementById('rickandmortypeople');
let rickList    = document.getElementById('rick-list');

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key == "Enter" || event.key == "L") {
    alert("evento de teclado!" + event.key);
  }
});
 
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let data = new FormData(this);
 
logoutBtn.addEventListener('click', function(){
  localStorage.removeItem('user_login')
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