/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;
var spelStatus = UITLEG; // status waarmee de game begint


const KEY_W = 87 // toets W
const KEY_A = 65 // toets A 
const KEY_S = 83 // toets S
const KEY_D = 68 // toets D
const KEY_SPATIE= 32 // toets Spatie
const KEY_R = 69 // toets  R
const ARROW_UP = 38 // pijl omhoog
const ARROW_LEFT = 37 // pijl naar links
const ARROW_DOWN = 40 // pijl naar beneden
const ARROW_RIGHT = 39 // pijl naar rechts


var snelheid_speler = 10 //snelheid van de spelers
var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var speler2X = 600; // x-positie van speler2
var speler2Y = 900; // y-positie van speler2


var kogel1X = 2000; // waar de kogels in de map zijn.
var kogel1Y = 2000; // waar de kogels in de map zijn.
var kogelvliegt = false;
var kogel2X = 2000; // waar de kogels in de map zijn.
var kogel2Y = 2000; // waar de kogels in de map zijn.
var kogelvliegt2 = false;


var aantal = 0 // aantal keren dat consolelog af gaat
var points1= 0 // punten van speler 1
var points2= 0 // punten van speler 2
var img;
var tijd_resterend = 2000; // tijd waarmee de game begint


/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */


var beweegAlles = function () {
  // speler
    if (keyIsDown (KEY_A)) {
      spelerX = spelerX - snelheid_speler
    }

    if (keyIsDown (KEY_W)) {
      spelerY = spelerY - snelheid_speler
    }

    if (keyIsDown (KEY_S)) {
      spelerY = spelerY + snelheid_speler
    }
  
    if (keyIsDown (KEY_D)) {
      spelerX = spelerX + snelheid_speler
    } 


  //speler2
    if (keyIsDown (ARROW_LEFT)) {
      speler2X = speler2X - snelheid_speler
    }

    if (keyIsDown (ARROW_UP)) {
      speler2Y = speler2Y - snelheid_speler
    }

    if (keyIsDown (ARROW_DOWN)) {
      speler2Y = speler2Y + snelheid_speler
    }
  
    if (keyIsDown (ARROW_RIGHT)) {
      speler2X = speler2X + snelheid_speler
    }
  

  /* grond/plafondss */
if (spelerY > 694) {
  spelerY = 694
}

if (spelerY < 424) {
  spelerY = 424
}

  /* muren */
if (spelerX > 1255) {
  spelerX = 1255
}
  
if (spelerX < 25) {
  spelerX = 25
}
  // speler2
 if (speler2Y > 302) {
  speler2Y = 302
}

if (speler2Y < 25) {
  speler2Y = 25
}

  /* muren */
if (speler2X > 1255) {
  speler2X = 1255
}
  
if (speler2X < 25) {
  speler2X = 25
};
  // kogel
if (kogelvliegt === false && keyIsDown (69)) {
  console.log("speler1schiet");
  kogelvliegt = true;
  kogel1X = spelerX ;
  kogel1Y = spelerY ;
}  if(kogelvliegt === true ){
    kogel1Y = kogel1Y -10; 
}  
  if(kogelvliegt === true && 
      kogel1Y < -25 ) {
    kogelvliegt = false ;
      }

 // kogel2
if (kogelvliegt2 === false && keyIsDown (13)) {
  console.log("speler2schiet");
  kogelvliegt2 = true;
  kogel2X = speler2X ;
  kogel2Y = speler2Y ;
}  if(kogelvliegt2 === true ){
    kogel2Y = kogel2Y +10; 
}  
  if(kogelvliegt2 === true && 
      kogel2Y > 750 ) {
    kogelvliegt2 = false ;
  }

};
/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing kogel tegen speler2
    if (kogel1X - speler2X < 50 &&
        kogel1X - speler2X >-50 &&
        kogel1Y - speler2Y < 50 &&
       kogel1Y - speler2Y >-50)
    {
    kogelvliegt = false;
      console.log("speler2geraakt")
      kogel1Y = 2000
      points1 = points1 + 1;
    }
  // botsing kogel2 tegen speler1
   if (kogel2X - spelerX < 50 &&
        kogel2X - spelerX >-50 &&
        kogel2Y - spelerY < 50 &&
       kogel2Y - spelerY >-50)
    {
    kogelvliegt = false;
      console.log("speler1geraakt")
      kogel2Y = 2000
      points2 = points2 + 1;
    }
};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
   fill("white")
  rect(0,0,1280,720)
  fill("black")
  rect(0,325,1280,75)
  
  // kogel1
   fill("red");
  ellipse(kogel1X -5 ,kogel1Y- 10 ,50,50)

  // kogel2
  fill("blue");
  ellipse(kogel2X +5 ,kogel2Y - 10 ,50,50)

  
  // speler
  fill("red");
  rect(spelerX - 25, spelerY - 25, 50, 50);

  // speler2
  fill("blue");
  rect(speler2X - 25, speler2Y - 25, 50, 50);


  // punten
  fill("black");
  textSize(50);
  text("Player1: "+points1, 25,450);

  fill("black");
  textSize(50);
  text("Player2: "+points2, 25,310);
  
   textSize(35);
  fill("black");
  text("Time left = " + tijd_resterend, 495, 35);

};


/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
   // gameover als spelers elkaar raken
   if (spelerX - speler2X < 50 &&
         spelerX - speler2X > -50 &&
         spelerY - speler2Y< 50 &&
         spelerY - speler2Y > -50) {
         aantal = aantal + 1;
         console.log("SpelerTegenSpeler" + aantal);
        return true;
         } 
if (points1 >= 5){
    snelheid_speler = snelheid_speler + 0.01 
  } 

  if (points2 >= 5){
    snelheid_speler = snelheid_speler + 0.01 
  } 
  // gameover als tijd voorbij
  
  if (tijd_resterend <= 0) {
      return true;
  }
  tijd_resterend = tijd_resterend -1;
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */

function preload() {
  img = loadImage('tijd.png');
  img1 = loadImage('vs.png');
  img2 = loadImage('pressspace.png')

}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('white');
  rect(-10,290,1350,150)
  
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
   if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("gameover");
      fill("white")
  rect(0,0,1280,720)
    textSize(50);
    fill("black");
    text("PRESS F", 50, 350)
    image(img, 0, 0);
         if (keyIsDown(70)) { //f
           spelerX = 600
           spelerY = 600
           speler2X = 600
           speler2Y = 900
        
    spelStatus = UITLEG;
      tijd_resterend = 2000;
      points1 = 0;
      points2 = 0;
    }

  }
  if (spelStatus === UITLEG) {
    // UITLEG SCHERM
      console.log("uitleg");
      fill("white")
  rect(0,0,1280,720)
    image(img1, 0, 0,1280,720);
    image(img2, 0, 0,900,75);
    
    // speler1uitleg
    textSize(50);
    fill("black");
    text("Player1:", 0, 100,)
    textSize(25);
    fill("black");
    text("Movement: W, A, S, D", 0, 125,)
    textSize(25);
    fill("black");
    text("Shoot: E", 0, 150,)
    
    // speler2uitleg
    textSize(50);
    fill("black");
    text("Player2:", 0, 205,)
    textSize(25);
    fill("black");
    text("Movement: Arrow Up, Down, Left, Right", 0, 230,)
    textSize(25);
    fill("black");
    text("Shoot: Enter", 0, 255,)
    
    
       if (keyIsDown(32)) { // SPATIE
    spelStatus = SPELEN;

      snelheid_speler = 10  
      spelerX = 600
      spelerY = 600
      speler2X = 600
      speler2Y = 900   
      kogel1X = 5000
      kogel2X = 5000
      tijd_resterend = 2000;
      points1 = 0;
      points2 = 0;
    }

  }
}
  