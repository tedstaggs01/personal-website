// define positions

var top = 1;
var front = 2;
var back = 3;
var bottom = 4;
var left = 5;
var right = 6;

// define movements

var front = 7;
var back = 8;
var left = 9;
var right = 10;

// Movements

// Init

// Number of Rotations definer depending on Input or Random between range

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const n_rotations = randomIntFromInterval(1, 20);
  console.log(n_rotations);

// Speed definer

randomIntFromInterval(0,100);
  
  const speed = randomIntFromInterval(1, 100);
  console.log(speed);

// Code

randomIntFromInterval(1,6);
  
  const rndInt = randomIntFromInterval(1, 6);
  console.log(rndInt);


