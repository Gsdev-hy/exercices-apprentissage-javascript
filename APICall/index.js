// Appels API

// 1

const display_names = document.getElementById("display_names");

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
let display_meteo = document.getElementById("display_meteo");

askMeteo.addEventListener("click", () => {
  try {
    cityIsValid(city.value);
    postalCodeIsValid(postalCode.value);
    countryIsValid(country.value);

    getMeteo(city.value, country.value, postalCode.value);
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
    if (!response.ok) {
      throw new Error(`Erreur API: ${response.status}`);
    }
    console.log(response);
    let data = await response.json();
    console.log(data);

    // Formater les données en HTML
    const htmlContent = formatMeteoToHTML(data);
    display_meteo.innerHTML = htmlContent;
  } catch (error) {
    console.log("Erreur de connexion:", error);
    display_meteo.innerHTML = `<p style="color: red;">Erreur: ${error.message}</p>`;
  }
}

function formatMeteoToHTML(data) {
  // Conversion de Kelvin à Celsius (ou utiliser le paramètre units=metric dans l'URL)
  const tempCelsius = data.main.temp - 273.15;
  const tempFeelCelsius = data.main.feels_like - 273.15;

  return `
    <div class="meteo-info">
      <h3>Météo pour ${data.name}, ${data.sys.country}</h3>
      <ul>
        <li><strong>Température:</strong> ${tempCelsius.toFixed(1)}°C</li>
        <li><strong>Ressenti:</strong> ${tempFeelCelsius.toFixed(1)}°C</li>
        <li><strong>Humidité:</strong> ${data.main.humidity}%</li>
        <li><strong>Pression:</strong> ${data.main.pressure} hPa</li>
        <li><strong>Conditions:</strong> ${data.weather[0].description}</li>
        <li><strong>Vent:</strong> ${data.wind.speed} m/s</li>
        <li><strong>Visibilité:</strong> ${(data.visibility / 1000).toFixed(
          1
        )} km</li>
      </ul>
      
      <h4>Détails supplémentaires:</h4>
      <ul>
        <li><strong>Température min:</strong> ${(
          data.main.temp_min - 273.15
        ).toFixed(1)}°C</li>
        <li><strong>Température max:</strong> ${(
          data.main.temp_max - 273.15
        ).toFixed(1)}°C</li>
        <li><strong>Lever du soleil:</strong> ${new Date(
          data.sys.sunrise * 1000
        ).toLocaleTimeString()}</li>
        <li><strong>Coucher du soleil:</strong> ${new Date(
          data.sys.sunset * 1000
        ).toLocaleTimeString()}</li>
      </ul>
    </div>
  `;
}

// Fonctions de validation
function postalCodeIsValid(postalCode, country = "FR") {
  if (!postalCode || postalCode.trim() === "") {
    throw new Error("Le code postal est obligatoire");
  }

  const postalCodePatterns = {
    FR: /^\d{5}$/, // France: 5 chiffres
    US: /^\d{5}(-\d{4})?$/, // USA: 5 chiffres optionnellement suivis de -4 chiffres
    GB: /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/, // UK: format complexe
    DE: /^\d{5}$/, // Allemagne: 5 chiffres
    CA: /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/, // Canada: A1A 1A1
    default: /^\d{4,10}$/, // Format par défaut pour autres pays
  };

  const pattern = postalCodePatterns[country] || postalCodePatterns["default"];

  if (!pattern.test(postalCode.trim())) {
    throw new Error(`Code postal invalide pour ${country}`);
  }

  return true;
}

function countryIsValid(country) {
  if (!country || country.trim() === "") {
    throw new Error("Le pays est obligatoire");
  }

  // Liste des codes pays ISO 3166-1 alpha-2 valides
  const validCountries = [
    "FR",
    "US",
    "GB",
    "DE",
    "IT",
    "ES",
    "CA",
    "BE",
    "CH",
    "LU",
    "NL",
    "PT",
    "AU",
    "JP",
    "CN",
    "BR",
    "RU",
    "IN",
    "MX",
    "ZA",
    // Ajoutez d'autres pays selon vos besoins
  ];

  const countryUpper = country.trim().toUpperCase();

  if (!validCountries.includes(countryUpper)) {
    throw new Error(
      `Code pays invalide. Utilisez un code ISO 3166-1 alpha-2 (ex: FR, US, GB)`
    );
  }

  return countryUpper;
}

function cityIsValid(city) {
  if (!city || city.trim() === "") {
    throw new Error("La ville est obligatoire");
  }

  // Validation du nom de ville
  const cityRegex = /^[a-zA-ZÀ-ÿ\s\-'\.]{2,50}$/;

  if (!cityRegex.test(city.trim())) {
    throw new Error(
      "Nom de ville invalide. Utilisez uniquement des lettres, espaces, traits d'union et apostrophes"
    );
  }

  return city.trim();
}

// Appel initial avec des valeurs par défaut
getMeteo();

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
