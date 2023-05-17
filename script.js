game ={
 points: 0,
 pps: 0,
 pgen: [0,5,15,30,50,75,105,140,180,225,275,330,390,455,525,600,680,765,855,950,1050,1155,1265,1380,1500,1625,1755,1890,2030,2175,2325,2480,2640,2805,2975,3150,3330,3515,3705,3900,4100,4305,4515,4730,4950,5175,5405,5640,5880,6125,6375,6630,6890,7155,7425,7700,7980,8265,8555,8850,9150,9455,9765,10080,10400,10725,11055,11390,11730,12075,12425,12780,13140,13505,13875,14250,14630,15015,15405,15800,16200,16605,17015,17430,17850,18275,18705,19140,19580,20025,20475,20930,21390,21855,22325,22800,23280,23765,24255,24750,25250,25755,26265,26780,27300,27825,28355,28890,29430,29975,30525,31080,31640,32205,32775,33350,33930,34515,35105,35700,36300,36905,37515,38130,38750,39375,40005,40640,41280,41925,42575,43230,43890,44555,45225,45900,46580,47265,47955,48650,49350,50055,50765,51480,52200,52925,53655,54390,55130,55875,56625,57380,58140,58905,59675,60450,61230,62015,62805,63600,64400,65205,66015,66830,67650,68475,69305,70140,70980,71825,72675,73530,74390,75255,76125,77000,77880,78765,79655,80550,81450,82355,83265,84180,85100,86025,86955,87890,88830,89775,90725,91680,92640,93605,94575,95550,96530,97515,98505,99500,100500],
 numOfpGens: 0,
 putil: [1000,1250,1750,2500,3500,4750,6250,8000,10000,12250,14750,17500,20500,23750,27250,31000,35000,39250,43750,48500,53500,58750,64250,70000,76000,82250,88750,95500,102500,109750,117250,125000,133000,141250,149750,158500,167500,176750,186250,196000,206000,216250,226750,237500,248500,259750,271250,283000,295000,307250,319750,332500,345500,358750,372250,386000,400000,414250,428750,443500,458500,473750,489250,505000,521000,537250,553750,570500,587500,604750,622250,640000,658000,676250,694750,713500,732500,751750,771250,791000,811000,831250,851750,872500,893500,914750,936250,958000,980000,1002250,1024750,1047500,1070500,1093750,1117750,1141000,1165000,1189250,1213750,1238500],
 numOfpUtils: 0
};

setInterval (function(){
game.points += game.pps/20;
document.getElementById("points").innerText = Math.floor(game.points);
document.getElementById("pps").innerText = Math.floor(game.pps);
if (game.numOfpGens < game.pgen.length){
	document.getElementById("pg1Cost").innerText = game.pgen[game.numOfpGens];
} else {
	document.getElementById("pg1Cost").innerText = "MAX";
}
if (game.numOfpUtils < game.putil.length){
	document.getElementById("pu1cost").innerText = game.putil[game.numOfpUtils];
}else{
	document.getElementById("pu1cost").innerText = "MAX";
}
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
document.getElementById("notEnough").style.display="block";
  }
}

function buyPUtl1(){
  if(game.points >= game.putil[game.numOfpUtils]){
    game.points -= game.putil[game.numOfpUtils];
    game.pps *= 1.05;
    game.numOfpUtils++;
  }else{
     document.getElementById("Upgrades").style.display="none";
document.getElementById("notEnough").style.display="block";
  }
}

function backToGame() {
document.getElementById("Upgrades").style.display="block";
document.getElementById("notEnough").style.display="none";

}

function tab(tab){
	document.getElementById("Upgrades").style.display = "none";
   document.getElementById("howTo").style.display = "none";
   document.getElementById("credits").style.display = "none";
	document.getElementById(tab).style.display = "block";
}

tab('Upgrades');
