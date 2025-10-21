// Exercices de manipulation du DOM

// 1

imageUrls = ["atari.png", "amiga.png"];

let image = document.querySelector("img");
image.setAttribute("src", imageUrls[0]);

// 2

let maDiv = document.getElementById("maDiv");
maDiv.classList.add("active");
maDiv.classList.remove("inactive");

// 3

let image1 = document.getElementById("image1");
image1.setAttribute("alt", "ATARI");
image1.setAttribute("title", "ATARI");

// 4

maDiv.classList.add("nouvelleClasse1", "nouvelleClasse2");

// n

// Nouvelle série

// 1

let newParag = document.createElement("p");
let conteneur = document.getElementById("conteneur");
conteneur.appendChild(newParag);
newParag.innerText = "Ceci est un nouveau paragraphe";

// 2

maDiv2 = document.getElementById("maDiv2");
maDiv3 = document.getElementById("maDiv3");
maDiv2.innerHTML = `Bonjour, <strong>Mario</strong>`;
maDiv3.innerText = `Bonjour, Mario`;

//3

let salut = document.getElementById("salutation");
let nom = "Luigi";
let hero = `Bonjour ${nom}`;
salut.innerText = hero;

// Events

// 1

let userName = document.getElementById("name");
let startSignal = document.getElementById("go");

startSignal.addEventListener("click", function (event) {
  alert("Bouton cliqué");
  console.log(this.className);
  console.log(event.currentTarget === this);
});

// 2

let colorBlock = document.getElementById("bg-color");

colorBlock.addEventListener("mouseover", function (event) {
  colorBlock.style.backgroundColor = "red";
});

// 3

document.addEventListener("keydown", function (event) {
  alert("Touche appuyée"); // event.key
});
