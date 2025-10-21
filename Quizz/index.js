// Variables globales
let score = 0;
let currentQuestionIndex = 0;
let username = "";

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

  // Validation du formulaire (Exercice 8)
  if (username.length < 3) {
    errorMessage.textContent = "Le pseudo doit contenir au moins 3 caractères";
    return;
  }

  errorMessage.textContent = "";
  startScreen.style.display = "none";
  quizScreen.style.display = "block";

  // Sauvegarder le nom d'utilisateur
  localStorage.setItem("quizUsername", username);

  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
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
  const currentQuestion = questions[currentQuestionIndex];
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
