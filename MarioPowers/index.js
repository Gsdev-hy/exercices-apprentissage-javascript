// /* Mario Powers */
// let mario = {
//     name : 'Mario',
//     age : 40,
//     profession : 'Plombier',
// };
// mario.location = 'Mushroom Kingdom';
// mario.profession = 'Héros';
// delete mario.age;
// console.log(mario);

// let luigi = {...mario,age:'38',name :'Luigi'};
// console.log(luigi);

// let superLuigi = {...mario, power_up: 'Super Champignon', name :'SuperLuigi'};
// console.log(superLuigi);

// let team = {
//     mario : mario,
//     luigi : luigi,
// }

// console.log(team);

// let powerUp = prompt("Quel power Up ? "); //"champignon"; // fleur de feu  étoile

// console.log("Power Up détecté : ");
// switch (powerUp) {
//     case ('champignon'):
//         console.log('champignon');
//         break;

//     case ('fleur de feu') :
//         console.log('fleur de feu');
//         break;

//     case ('étoile') :
//         console.log('étoile');
//         break;

//     default :
//         console.log('Non trouvé');
// }

// for (let i=1; i<=10; i++) {
//     console.log(i);
// }

// let listeDeCourses=["Piles","Sopalin","Eponges","Biscuits"];

// for (let achat in listeDeCourses) {  //; achat < listeDeCourses.length; achat++) {
//     console.log(listeDeCourses[achat]);
// }

// for (let achat =0; achat < listeDeCourses.length; achat++) {
//     console.log(listeDeCourses[achat]);
// }

let number = -1;
while (number < 11) {
    number =  Number(prompt("Entre un nombre > 10 : "));
    if (number < 10) {
        console.log("Le nombre " + number + " n'est pas > 10");
    }
}
console.log('Nombre choisi : ' + number);