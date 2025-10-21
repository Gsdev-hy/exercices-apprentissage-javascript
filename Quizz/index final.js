// Variables globales
let score = 0;
let currentQuestionIndex = 0;
let username = "";
let currentDifficulty = "debutant";
let questions = [];

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
const resultsScreen = document.getElementById("results-screen");
const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("username-error");
const difficultySelect = document.getElementById("difficulty");
const startBtn = document.getElementById("start-btn");
const currentPlayerSpan = document.getElementById("current-player");
const currentScoreSpan = document.getElementById("current-score");
const currentDifficultySpan = document.getElementById("current-difficulty");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackDiv = document.getElementById("feedback");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const nextBtn = document.getElementById("next-btn");
const finalScoreDiv = document.getElementById("final-score");
const bestScoreDiv = document.getElementById("best-score");
const restartBtn = document.getElementById("restart-btn");

// Initialisation
document.addEventListener("DOMContentLoaded", function () {
  startBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", nextQuestion);
  restartBtn.addEventListener("click", restartQuiz);

  // Validation en temps réel du username
  usernameInput.addEventListener("input", validateUsername);
});

// Validation du formulaire
function validateUsername() {
  const username = usernameInput.value.trim();
  if (username.length < 3) {
    usernameError.textContent = "Le pseudo doit contenir au moins 3 caractères";
    return false;
  } else {
    usernameError.textContent = "";
    return true;
  }
}

// Démarrer le quiz
function startQuiz() {
  if (!validateUsername()) {
    return;
  }

  username = usernameInput.value.trim();
  currentDifficulty = difficultySelect.value;
  questions = questionsParDifficulte[currentDifficulty];

  // Réinitialiser les variables
  score = 0;
  currentQuestionIndex = 0;

  // Mettre à jour l'affichage
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  currentPlayerSpan.textContent = `Joueur: ${username}`;
  currentDifficultySpan.textContent =
    difficultySelect.options[difficultySelect.selectedIndex].text;
  currentScoreSpan.textContent = `Score: ${score}`;
  totalQuestionsSpan.textContent = questions.length;

  displayQuestion();
}

// Afficher une question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionText.textContent = currentQuestion.question;
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  // Vider les options précédentes
  optionsContainer.innerHTML = "";

  // Créer les boutons d'options
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className = "option-btn";
    button.addEventListener("click", () =>
      checkAnswer(option, currentQuestion.correct)
    );
    optionsContainer.appendChild(button);
  });

  // Cacher le bouton suivant et le feedback
  nextBtn.classList.add("hidden");
  feedbackDiv.textContent = "";
  feedbackDiv.className = "feedback";
}

// Vérifier la réponse
function checkAnswer(selectedAnswer, correctAnswer) {
  const optionButtons = document.querySelectorAll(".option-btn");

  // Désactiver tous les boutons
  optionButtons.forEach((button) => {
    button.disabled = true;
  });

  // Marquer les bonnes et mauvaises réponses
  optionButtons.forEach((button) => {
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    } else if (
      button.textContent === selectedAnswer &&
      selectedAnswer !== correctAnswer
    ) {
      button.classList.add("incorrect");
    }
  });

  // Vérifier si la réponse est correcte
  if (selectedAnswer === correctAnswer) {
    score++;
    currentScoreSpan.textContent = `Score: ${score}`;
    feedbackDiv.textContent = "Bonne réponse ! 🎉";
    feedbackDiv.classList.add("correct");
  } else {
    feedbackDiv.textContent = `Mauvaise réponse ! La bonne réponse était: ${correctAnswer}`;
    feedbackDiv.classList.add("incorrect");
  }

  // Afficher le bouton suivant
  nextBtn.classList.remove("hidden");
}

// Question suivante
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

// Afficher les résultats
function showResults() {
  quizScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");

  finalScoreDiv.textContent = `${username}, votre score final est: ${score}/${questions.length}`;

  // Sauvegarder le meilleur score
  const bestScoreKey = `bestScore_${currentDifficulty}`;
  const storedBestScore = localStorage.getItem(bestScoreKey);

  if (!storedBestScore || score > parseInt(storedBestScore)) {
    localStorage.setItem(bestScoreKey, score.toString());
    bestScoreDiv.textContent = `Nouveau meilleur score pour le niveau ${currentDifficulty}: ${score}/${questions.length} 🏆`;
  } else {
    bestScoreDiv.textContent = `Meilleur score pour le niveau ${currentDifficulty}: ${storedBestScore}/${questions.length}`;
  }
}

// Redémarrer le quiz
function restartQuiz() {
  resultsScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");

  // Réinitialiser le formulaire
  usernameInput.value = "";
  usernameError.textContent = "";
}
