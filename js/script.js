const themeBtn = document.getElementById("themeBtn");
const imageBtn = document.getElementById("imageBtn");
const hobbyBtn = document.getElementById("hobbyBtn");
const colorBtn = document.getElementById("colorBtn");
const resetBtn = document.getElementById("resetBtn");
const jokeBtn = document.getElementById("jokeBtn");

const body = document.body;
const navbar = document.getElementById("navbar");

const mainImage = document.getElementById("mainImage");
const hobbyList = document.getElementById("hobbyList");
const hobbySection = document.getElementById("hobbySection");

const profileForm = document.getElementById("profileForm");
const profileName = document.getElementById("profileName");
const profileDesc = document.getElementById("profileDesc");
const profileImg = document.getElementById("profileImg");
const profileCard = document.getElementById("profileCard");

const updateCount = document.getElementById("updateCount");
const jokeText = document.getElementById("jokeText");

const initialState = {
  name: "Pedro Correia",
  desc: "3D Developer",
  img: "images/PC.png",
  mainImg: "https://www.hashstudioz.com/blog/wp-content/uploads/2022/07/low-code-No-code-vs-Custom-App-Development-300x169.png",
  hobbies: ["Correr a Maratona Diáriamente. Ida e volta.", "Levantar 500kg no ginásio, só mesmo naquela.", "Inventar parvoíces para colocar nas listas de hobbies."]
};

let count = localStorage.getItem("count");
if (!count) count = 0;
updateCount.innerText = count;

themeBtn.addEventListener("click", () => {

  body.classList.toggle("bg-dark");
  body.classList.toggle("text-light");
  body.classList.toggle("bg-light");
  body.classList.toggle("text-dark");

  navbar.classList.toggle("bg-dark");
  navbar.classList.toggle("navbar-dark");
  navbar.classList.toggle("bg-light");
  navbar.classList.toggle("navbar-light");

  profileCard.classList.toggle("bg-dark");
  profileCard.classList.toggle("text-light");

  if (themeBtn.innerText === "Tema") {
    themeBtn.innerText = "Light Mode";
  } else {
    themeBtn.innerText = "Dark Mode";
  }

});

imageBtn.addEventListener("click", () => {
  if (mainImage.src.includes("hashstudioz")) {
    mainImage.src = "https://picsum.photos/600";
  } else {
    mainImage.src = initialState.mainImg;
  }
});

hobbyBtn.addEventListener("click", () => {
  const hobby = prompt("Novo hobby:");
  if (hobby) {
    const li = document.createElement("li");
    li.innerText = hobby;
    hobbyList.appendChild(li);
  }
});

colorBtn.addEventListener("click", () => {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  hobbySection.style.backgroundColor = color;
});

profileForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("nameInput").value;
  const desc = document.getElementById("descInput").value;
  const color = document.getElementById("colorInput").value;
  const img = document.getElementById("imgInput").value;

  profileName.innerText = name;
  profileDesc.innerText = desc;

  if (img) profileImg.src = img;
  if (color) profileCard.style.backgroundColor = color;

  count++;
  localStorage.setItem("count", count);
  updateCount.innerText = count;
});

jokeBtn.addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      jokeText.innerText = data.setup + " - " + data.punchline;
    })
    .catch(() => {
      jokeText.innerText = "Erro ao carregar piada.";
    });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    alert("Tem a certeza de que acabou a sua visita?");
  }
});

resetBtn.addEventListener("click", () => {
  body.classList.remove("dark-mode");
  profileCard.classList.remove("dark-card");
  navbar.classList.remove("bg-dark", "navbar-dark");
  navbar.classList.add("bg-light", "navbar-light");

  profileName.innerText = initialState.name;
  profileDesc.innerText = initialState.desc;
  profileImg.src = initialState.img;
  profileCard.style.backgroundColor = "";

  mainImage.src = initialState.mainImg;

  hobbyList.innerHTML = "";
  initialState.hobbies.forEach(h => {
    const li = document.createElement("li");
    li.innerText = h;
    hobbyList.appendChild(li);
  });

  hobbySection.style.backgroundColor = "";

  count = 0;
  localStorage.setItem("count", count);
  updateCount.innerText = count;

  jokeText.innerText = "Clique no botão para carregar";

  profileForm.reset();
});