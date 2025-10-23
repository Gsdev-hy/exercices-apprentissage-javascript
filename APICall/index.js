// Appels API

// 1

const display_names = document.getElementById("display_names");
const display_meteo = document.getElementById("display_meteo");

let htmlBlock = "<ul>";

async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(data[0].name);
    data.forEach((user) => {
      console.log(user.name);
      htmlBlock += "<li>" + user.name + "</li>";
      display_names.textContent += user.name + " - ";
    });
    htmlBlock += "</ul>";
    display_names.innerHTML = htmlBlock;
  } catch (error) {
    console.log("Erreur de connexion.");
  }
}

getUsers();

// 2

const OPEN_WEATHER_KEY = "e688d6ea721efc05a3a42783db5cc5f3";
let city = document.getElementById("city");
let country = document.getElementById("country");
let postalCode = document.getElementById("postalCode");
let askMeteo = document.getElementById("btn");

askMeteo.addEventListener("click", () => {
  try {
    // postalCodeIsValid();
    // countryIsValid(Input.value);
    // cityIsValid(Input.value);
    alert(`Votre nom est ${nameInput.value}`);
    alert(`Votre age est ${ageInput.value}`);
  } catch (error) {
    alert("Erreur : " + error.message);
    return;
  }
});

async function getMeteo(
  city = "BRUMATH",
  country = "FR",
  postalCode = "67170"
) {
  try {
    let response = await fetch(
      // `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${OPEN_WEATHER_KEY}`
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${postalCode},${country}&appid=${OPEN_WEATHER_KEY}`
    );
    console.log(response);
    let data = await response.json();
    console.log(data);
    display_meteo.textContent = data;
    data.forEach((key) => {
      console.log(data.key + "\n");
      display_meteo.textContent += data.key + "\n";
    });
  } catch (error) {
    console.log("Erreur de connexion.");
  }
}

function postalCodeIsValid() {}

function countryIsValid() {}

function cityCodeIsValid() {}

getMeteo(city.value, country.value, postalCode.value);

// async function findLatitudeAndLongitude() {
//   try {
//     let response = await fetch(
//       `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${OPEN_WEATHER_KEY}`
//     );
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Erreur de connexion.");
//   }
// }
