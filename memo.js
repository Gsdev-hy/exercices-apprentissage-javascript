// ****** Memo JS *******

// DOM

// Sélection
// 1 élément par iD unique
let div1 = document.getElementById("div1");

// Tous les éléments d'une classe
let features = document.getElementsByClassName("features");
console.log(features[0]);

// Tous les élément d'un type de tag / balise donnée
let buttons = document.getElementsByTagName("button");
console.log(buttons[0]);

// Tous les éléments correspondants à un selecteur CSS donné  balise / .class / #id
let selec = document.querySelector("button.primary");
// ex : sélectionne les éléments button avec la classe primary
// Ex alternatives sélecteur :  li  .intro   #solution
// img#intro.primary (même si un #id est unique) permet de selec :
// la balise image dont l'id est 'intro' et la classe'primary'
// intérêt : lisibilité, spécificité / priorité, éviter collisions (frameworks, oublis, ...)

let altimg = img.alt;
console.log(altimg);

// exemples sélecteur css
// Simples :
//
// * p .menu #header
// Composés :
//
// div p : tous les p dans une div
// div > p : enfant(s) direct de div
// div + p : le p juste après un div
// div - p : tous les p frères d'un div
// article h2.title : une balise h2 de classe title dans un article

// Sélecteurs de groupes
//
// A, B  -  h1, h2 {} tous les h1 et h2
// A.B   -  la classe B d'une  balise A

// Attributs :
//
// [attribut] : Sélectionner un élément avec un attribut spécifique
// ex : img[alt] {  border: 2px solid green; }
//
// a[href="https://example.com"] : Sélectionner un attribut avec une valeur exacte
// a[href^="https://"] : Sélectionner par début de valeur (^=)
// img[src$=".jpg"] : Sélectionner par fin de valeur ($=)
// div[data-info*="important"] :  Sélectionner par valeur contenant (*=)
// [att~="val"] - ex : [class~="danger"]  un des mot contient val
//
// En JavaScript : querySelector('[attribut]') : Sélectionner un élément avec un attribut
const imgAvecAlt = document.querySelector("img[alt]");
console.log(imgAvecAlt.alt);

// .getAttribute('nom') pour lire un attribut :]
// ex : const valeur = element.getAttribute('data-info');

//.setAttribute('nom', 'valeur') pour le modifier :
// ex : element.setAttribute('alt', 'Nouvelle description');

// .hasAttribute('nom') pour vérifier s’il existe :
// ex : if (element.hasAttribute('alt')) { ... }
