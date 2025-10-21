/* Capital de départ */
let marioCoins = ['Pièce1', 'Pièce2', 'Pièce3', 'Pièce4', 'Pièce5'];
marioCoins.splice(2,1,'PièceBonus');
marioCoins.splice(3,1);
limitedCoins = marioCoins.slice(0,2);
console.log(marioCoins);
console.log(limitedCoins);