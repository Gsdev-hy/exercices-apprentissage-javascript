// Exercice : Fonctions
//
// 1.

console.log('Addition');
a = prompt('Valeur de a ? ');
b = prompt('Valeur de b ? ');

function add(a, b) {
    return a + b;
}

console.log('a + b = ' + add(a, b) );

// 2

let nom = prompt('Quel est ton nom ? ');

function sayHello (name) {
    console.log('Hello ' + name);
}

sayHello(nom);

// 3

notes = [85,90,78,92,88];

function mean (tab) {
    let total = 0;
    for (let i = 0; i<tab.length; i++) {
        total += tab[i];
    }
    return total / tab.length;
}

console.log('La moyenne des notes est : ' + mean(notes));

// 4 

age = prompt('Quel est ton âge ? ');
console.log("Tu es "+ isAdult(age));

function isAdult(age) {
    return age>17 ? "Majeur" : "Mineur";
}

// n

document.getElementById('go').addEventListener("click", => {
    document.getElementById('result').textContent = "Bonjour " + document.getElementById("name").value;
}