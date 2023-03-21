game ={
 points: 0,
 pps: 0,
 pgen: [0,5,15,30,50,75,105,140,180,225,275,330,390,455,525,600,680,765,855,950,1050,1155,1265,1380,1500,1625,1755,1890,2030,2175,2325,2480,2640,2805,2975,3150,3330,3515,3705,3900,4100,4305,4515,4730,4950,5175,5405,5640,5880,6125,6375],
 numOfpGens: 0,
 putil: [1000,1250,1750,2500,3500,4750,6250,8000,10000,12250,14750,17500,20500,23750,27250,31000,35000,39250,43750,48500,53500,58750,64250,70000,76000,82250,88750,95500,102500,109750,117250,125000,133000,141250,149750,158500,167500,176750,186250,196000,206000,216250,226750,237500,248500,259750],
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
  } else{
     document.getElementById("Upgrades").style.display="none";
document.getElementById("notEnough").style.display="inline-block";
  }
}

function buyPUtl1(){
  if(game.points >= game.putil[game.numOfpUtils]){
    game.points -= game.putil[game.numOfpUtils];
    game.pps *= 1.05;
    game.numOfpUtils++;
  }else{
     document.getElementById("Upgrades").style.display="none";
document.getElementById("notEnough").style.display="inline-block";
  }
}

function backToGame() {
document.getElementById("Upgrades").style.display="inline-block";
document.getElementById("notEnough").style.display="none";

}
