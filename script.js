game ={
 points: 0,
 pps: 0,
 pgen: [0,5,15,30,50,75,105,140,180,225,275,330,390],
 numOfpGens: 0,
 putil: [1000,1250,1750,2500,3500,4750,6250,8000,10000,12250,14750,17500,20500,23750,27250,31000,35000,39250],
 numOfpUtils: 0
};

setInterval (function(){
game.points += game.pps/20;
document.getElementById("points").innerText = Math.floor(game.points);
document.getElementById("pps").innerText = Math.floor(game.pps);
document.getElementById("pg1Cost").innerText = game.pgen[game.numOfpGens];
document.getElementById("pu1cost").innerText = game.putil[game.numOfpUtils];
document.getElementById("numOfPg1").innerText = game.numOfpGens;
document.getElementById("numOfPu1").innerText = game.numOfpUtils;
}, 50);



function buyPGen1(){
  if(game.points >= game.pgen[game.numOfpGens]){
    game.points -= game.pgen[game.numOfpGens];
    game.pps += 1;
    game.numOfpGens++;
  }
}

function buyPUtl1(){
  if(game.points >= game.putil[game.numOfpUtils]){
    game.points -= game.putil[game.numOfpUtils];
    game.pps *= 1.05;
    game.numOfpUtils++;
  }
}
