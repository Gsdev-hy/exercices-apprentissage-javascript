// Exercice : for of / in
//
// 1.

let mario = {
  nom: "mario",
  costume: "rouge",
  pouvoir: "Fleur de feu",
};

for (let cle in mario) {
  console.log(cle + " : " + mario[cle]);
}

// 2.

powerUps = ["Champignon", "Fleur de feu", "Etoile"];

for (item of powerUps) {
  console.log(item);
}

// 3.

scores = [1200, 1500, 1000, 1300];
let total = 0;
console.log(scores);
for (score of scores) {
  console.log(score);
  total += score;
}
console.log("Moyenne des valeurs : " + total / scores.length);
