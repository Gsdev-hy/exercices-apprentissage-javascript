// Try - Catch exercices

// 1
let age = prompt("Quel est ton âge ? ");

function checkAge(age) {
  if (age < 18) {
    throw new Error("Tu n'es pas majeur");
  } else {
    alert("Tu es majeur. C'est bon.");
  }
}

try {
  checkAge(age);
} catch (error) {
  alert("Erreur détectée : " + error.message);
}

// 2
let a = Number(prompt("Entre un numérateur pour une division : "));
let b = Number(prompt("Entre un dénominateur pour une division : "));
let result;

function divide(a, b) {
  if (b == 0) {
    throw new Error("Division par 0 impossible.");
    return;
  }
  return a / b;
}

try {
  result = divide(a, b);
} catch (error) {
  alert("Erreur détectée : " + error.message);
} finally {
  if (Number.isInteger(result)) alert("Résultat de la division : " + result);
}

// 3

const regexUsername = /^[a-zA-Z0-9_-]{3,20}$/;
const regexAge = /^(0?[1-9]|[1-9][0-9]|1[01][0-9]|120)$/;
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const validate = document.getElementById("validate");

validate.addEventListener("click", () => {
  try {
    ageIsValid(ageInput.value);
    nameIsValid(nameInput.value);
    alert(`Votre nom est ${nameInput.value}`);
    alert(`Votre age est ${ageInput.value}`);
  } catch (error) {
    alert("Erreur : " + error.message);
    return;
  }
});

function ageIsValid(age) {
  if (!regexAge.test(age)) {
    throw new Error("Age non valide.");
  } else return true;
}

function nameIsValid(name) {
  if (!regexUsername.test(name)) {
    throw new Error("Nom non valide");
  } else return true;
}
