// Exercices Formulaires

// Ex 1-2-3
let nom = document.getElementById("nom");
let email = document.getElementById("email");
let plats = document.getElementsByName("plat");
let service = document.getElementById("service");

let platChoisi = "";
let serviceChoisi = "";

start = document
  .getElementById("formulaire")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    for (let i = 0; i < plats.length; i++) {
      if (plats[i].checked) {
        platChoisi = plats[i].value;
        break;
      }
    }

    serviceChoisi = service.value;

    // if (!nomValue || !emailValue || !platChoisi || !serviceChoisi) {
    //   alert("Veuillez remplir tous les champs !");
    //   return;
    // }

    console.log("Nom : " + nom.value);
    console.log("Email : " + email.value);
    console.log("Plat choisi : " + platChoisi);
    console.log("Service choisi : " + serviceChoisi);

    setTimeout(() => {
      console.log("Bon appétit !");
    }, 2000);
  });
