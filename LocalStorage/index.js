// Exercices de pratique sur le local storage

localStorage.setItem("prenom", "Alice");

// let firstName = prompt("Quel est ton prénom");
let prenom = localStorage.getItem("prenom");
console.log(prenom);
const firstName = document.getElementById("firstName");
const paragraphe = document.getElementById("display");
const btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  prenom = firstName.value;
  if (prenom !== null) {
    console.log("La valeur existe :", prenom);
    paragraphe.textContent = "La valeur existe :" + prenom;
    localStorage.setItem("prenom", prenom);
  } else {
    console.log("Aucune valeur trouvée pour 'prenom'");
    paragraphe.textContent = "Aucune valeur trouvée pour 'prenom'";
  }
});

//localStorage.removeItem("prenom");
