var myArray = [
  "Presence",
  "Acceptance",
  "Grounded",
  "Creation",
  "Pleasure",
  "Stability"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

//document.body.innerHTML = randomItem;

document.getElementById("reminder").innerHTML = randomItem;