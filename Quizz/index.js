// Variables globales
let score = 0;
let currentQuestionIndex = 0;
let username = "";
const regexNom = /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]+$/;
let questionnaire = []; // Portée globale
let level; // Portée globale

// Tableau de questions
const questions = [
  {
    question: "Quelle est la couleur du cheval blanc d'Henri IV ?",
    options: ["Violet", "Jaune", "Blanc"],
    correct: "Blanc",
  },
  {
    question: "Où a eu lieu la bataille de Verdun ?",
    options: ["Pékin", "Verdun", "Oberschaeffolsheim"],
    correct: "Verdun",
  },
  {
    question: "Quand la guerre 14-18 a-t-elle commencé ?",
    options: ["1914", "1918", "1418"],
    correct: "1914",
  },
  {
    question: "Laquelle des 3 dernières questions était une tautologie ?",
    options: ["1", "2", "Toutes"],
    correct: "Toutes",
  },
  {
    question: "Pourquoi tant de haine ?",
    options: ["Parce que !", "Pppffff....", "Tout à fait"],
    correct: "Parce que !",
  },
];

// Tableaux de questions par difficulté
const questionsParDifficulte = {
  debutant: [
    {
      question: "Quelle est la couleur du cheval blanc d'Henri IV ?",
      options: ["Violet", "Jaune", "Blanc"],
      correct: "Blanc",
    },
    {
      question: "Où a eu lieu la bataille de Verdun ?",
      options: ["Pékin", "Verdun", "Oberschaeffolsheim"],
      correct: "Verdun",
    },
    {
      question: "Quand la guerre 14-18 a-t-elle commencé ?",
      options: ["1914", "1918", "1418"],
      correct: "1914",
    },
    {
      question: "Laquelle des 3 dernières questions était une tautologie ?",
      options: ["1", "2", "Toutes"],
      correct: "Toutes",
    },
    {
      question: "Pourquoi tant de haine ? ",
      options: ["Parce que !", "Pppffff....", "Tout à fait "],
      correct: "Parce que !",
    },
  ],
  moyen: [
    {
      question: "Quel est le plus grand océan du monde ?",
      options: ["Atlantique", "Pacifique", "Indien"],
      correct: "Pacifique",
    },
    {
      question: "Qui a peint la Joconde ?",
      options: ["Van Gogh", "Leonardo da Vinci", "Picasso"],
      correct: "Leonardo da Vinci",
    },
    {
      question: "Quel est l'élément chimique représenté par 'O' ?",
      options: ["Or", "Oxygène", "Osmium"],
      correct: "Oxygène",
    },
    {
      question: "Combien de continents y a-t-il sur Terre ?",
      options: ["5", "6", "7"],
      correct: "7",
    },
    {
      question: "Quelle planète est surnommée 'la planète rouge' ?",
      options: ["Mars", "Jupiter", "Vénus"],
      correct: "Mars",
    },
  ],
  difficile: [
    {
      question: "En quelle année a été fondée Google ?",
      options: ["1996", "1998", "2000"],
      correct: "1998",
    },
    {
      question: "Quel est le nom du fondateur de Tesla ?",
      options: ["Jeff Bezos", "Bill Gates", "Elon Musk"],
      correct: "Elon Musk",
    },
    {
      question: "Combien de dents un adulte a-t-il normalement ?",
      options: ["28", "30", "32"],
      correct: "32",
    },
    {
      question: "Quelle est la vitesse de la lumière dans le vide ?",
      options: ["299 792 458 m/s", "300 000 000 m/s", "299 792 km/s"],
      correct: "299 792 458 m/s",
    },
    {
      question: "Qui a découvert la pénicilline ?",
      options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur"],
      correct: "Alexander Fleming",
    },
  ],
};

// Éléments DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");
const usernameInput = document.getElementById("username");
const startBtn = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const feedback = document.getElementById("feedback");
const currentScore = document.getElementById("current-score");
const finalScore = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");
const errorMessage = document.getElementById("error-message");

// Exercice 6-8: Gestion des événements et validation
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
  username = usernameInput.value.trim();
  // Validation du formulaire
  if (username.length < 3) {
    errorMessage.textContent = "Le pseudo doit contenir au moins 3 caractères ";
    return;
  }
  if (!regexNom.test(username)) {
    errorMessage.textContent = "Le pseudo doit être sans caractères spéciaux";
    return;
  }

  errorMessage.textContent = "";
  startScreen.style.display = "none";
  quizScreen.style.display = "block";

  level = document.getElementById("level").value;
  questionnaire = questionsParDifficulte[level];

  // Sauvegarder le nom d'utilisateur
  localStorage.setItem("quizUsername", username);

  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex >= questionnaire.length) {
    endQuiz();
    return;
  }

  const currentQuestion = questionnaire[currentQuestionIndex]; // questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";
  feedback.textContent = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className = "answer-btn";
    button.addEventListener("click", () => checkAnswer(option));
    answersContainer.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = questionnaire[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correct;

  if (isCorrect) {
    score++;
    feedback.textContent = "Bonne réponse !";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Mauvaise réponse ! La bonne réponse était : ${currentQuestion.correct}`;
    feedback.style.color = "red";
  }

  currentScore.textContent = score;

  // Désactiver les boutons après réponse
  const answerButtons = answersContainer.getElementsByClassName("answer-btn");
  for (let button of answerButtons) {
    button.disabled = true;
  }

  // Passer à la question suivante après un délai
  setTimeout(() => {
    currentQuestionIndex++;
    loadQuestion();
  }, 2000);
}

function endQuiz() {
  quizScreen.style.display = "none";
  endScreen.style.display = "block";
  finalScore.textContent = score;

  // Sauvegarder le score dans le localStorage
  const bestScore = localStorage.getItem("quizBestScore") || 0;
  if (score > bestScore) {
    localStorage.setItem("quizBestScore", score);
  }
}

function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  currentScore.textContent = "0";
  endScreen.style.display = "none";
  startScreen.style.display = "block";
  usernameInput.value = "";
}

// Initialisation
console.log("Quiz initialisé");
