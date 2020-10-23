var FunctionsEle = document.body.querySelector(".Functions");

function DealDamage(damage,type){
  if(type=="Fire")
  DealDamage(Fire, "Fire Damage");
  if(type=="Ice")
  DealDamage(Ice, "Ice Damage");
  if(type=="Poison")
  DealDamage(Poison, "Poison Damage");
  if(DragonHP <= 0 ) {
  document.body.querySelector(".PlayerWins").innerHTML="You Emerged Victorious!";
}}

var damage = 0;
var DragonHP = 10;
var Fire = 3;
var Ice = 1;
var Poison = 4;

document.body.querySelector(".button1").addEventListener("click", function () {
  DealDamage(Fire, "FireDamage");
  DragonHP= (DragonHP - (Fire - 1));
  FunctionsEle.innerHTML= (Fire - 1), "FireDamage"
});

document.body.querySelector(".button2").addEventListener("click", function () {
  DealDamage(Ice, "IceDamage");
  DragonHP= (DragonHP - (Ice + 1));
  FunctionsEle.innerHTML= (Ice + 1), "IceDamage"
});

document.body.querySelector(".button3").addEventListener("click", function () {
  DealDamage(Poison, "PoisonDamage");
  DragonHP= (DragonHP - Poison);
  FunctionsEle.innerHTML= Poison, "PoisonDamage"
});