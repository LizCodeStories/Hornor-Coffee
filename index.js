let chances = ["Congratulations! You won free coffee today! Take this screenshot to claim your free drink.",
  "You claim 10% off your coffee today! Take this screenshot to claim 10% off your drink.",
  "You have claimed 50% off your drink today! Take this screenshot to claim 50% off your drink.",
  "You have claimed 15% off your drink today! Take this screenshot to claim 50% off your drink.",
  "Sorry, you didn't win today but try again tomorrow!"
]

let button = document.getElementById('chance-button');
let chance = document.getElementById('chance');

function chanceSelector(){
  let randomChance = Math.floor(Math.random() * chances.length);
  return chances[randomChance];
}

function showChance(){
  chance.innerHTML = chanceSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";

  //add your code here
button.removeEventListener('click', showChance);
}

button.addEventListener('click', showChance);