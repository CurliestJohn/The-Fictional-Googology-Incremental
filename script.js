game ={
 points: 0,
 pps: 0,
 pgen: [0,5,15,30,50,75,105,140,180,225,275,330,390],
 numOfpGens: 0
};

setInterval (function(){
game.points += game.pps/20;
document.getElementById("points").innerText = Math.floor(game.points);
document.getElementById("pps").innerText = game.pps;
document.getElementById("pg1Cost").innerText = game.pgen[game.numOfpGens];
document.getElementById("numOfPg1").innerText = game.numOfpGens;
}, 50);



function buyPGen1(){
  if(game.points >= game.pgen[game.numOfpGens]){
    game.points -= game.pgen[game.numOfpGens];
    game.pps += 1;
    game.numOfpGens++;
  }
}
