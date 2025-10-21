// Exercice : Créer un quiz interactif en JavaScript
//
// 1. Variables et Bases du JavaScript
let score = 0;
let username = 'Nom'
username = prompt("Nom du joueur ? ");
console.log("Nom du joueur : " + username);
console.log("Score : " + score);

// 2. Tableaux et Itérations

tableauQR = [
    {
        question: "Quelle est la couleur du cheval blanc d'Henri IV ? ",
        options: ["violet", "jaune", "blanc"],
        correct: "blanc"
    },
    {
        question: "Où a eu lieu la bataille de Verdun ? ",
        options: ["Pékin", "Verdun", "Oberschaeffolsheim"],
        correct: "Verdun"
    },
    {
        question: "Quand la guerre 14-18 à elle commencé ? ",
        options: ["1914", "1918", "1418"],
        correct: "1914"
    },
    {
        question: "Laquelle des 3 dernières questions était une tautologie ? ",
        options: ["1", "2", "Toutes"],
        correct: "Toutes"
    },
    {
        question: "Pourquoi tant de haine ? ",
        options: ["Parce que !", "Pppffff....", "Tout à fait "],
        correct: "Parce que !"
    },
]

console.log('1ère question :' + tableauQR[0].question );

for (let questionNumber = 0; questionNumber < tableauQR.length; questionNumber++) {
    console.log('Question n° ' + questionNumber + ' : ' + tableauQR[questionNumber].question);
} 

// 3. Conditions

// let score = 0;

function checkAnswer(userAnswer, questionNumber) {
    
    if (userAnswer === tableauQR[questionNumber].correct) {
        console.log("Bonne réponse!");
        score += 1;
    }
    else {
        console.log('Mauvaise réponse!');
    }
    return (userAnswer === tableauQR[questionNumber].correct)

}

checkAnswer(prompt(tableauQR[0].question), 0);

// 4. Boucles et Logique de Jeu

for (questionNumber = 0; questionNumber < tableauQR.length; questionNumber++) {
    console.log('Question n° ' + questionNumber + ' : ' + tableauQR[questionNumber].question);
    console.log('Choix possibles : ');
    for (let answerNumber = 0; answerNumber <= 2; answerNumber++) {
        console.log('> ' + tableauQR[questionNumber].options[answerNumber]);
    }
    checkAnswer(prompt(tableauQR[questionNumber].question), questionNumber);
} 

// 5.  Fonctions

function displayQuestion(questionNumber)  {
    console.log('Question n° ' + questionNumber + ' : ' + tableauQR[questionNumber].question);
        console.log('Choix possibles : ');
    for (let answerNumber = 0; answerNumber <= 2; answerNumber++) {
        console.log('> ' + tableauQR[questionNumber].options[answerNumber]);
    }
}

function getUserAnswer ()  {
    return prompt("Quelle est ta réponse ? ");
}

function startQuiz() {
    console.log('Bienvenue dans le je du Quizz !');
    for (questionNumber = 0; questionNumber < tableauQR.length; questionNumber++) {
        displayQuestion(questionNumber);
        getUserAnswer ();
        if (userAnswer === tableauQR[questionNumber].correct) {
            console.log("Bonne réponse!");
            score += 1;
        }
        else {
            console.log('Mauvaise réponse!');
        }
    } 
}

startQuiz()

// 6. Modification du DOM

let userName = getElementById(name);
let startSignal = getElementById(start-quiz);
startSignal.addEventListener("click", function (e) {
  console.log(this.className); 
  console.log(e.currentTarget === this); 
});

