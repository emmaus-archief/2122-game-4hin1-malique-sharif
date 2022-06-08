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
var spelStatus = SPELEN;
const KEY_W = 87
const KEY_A = 65
const KEY_S = 83
const KEY_D = 68
const KEY_SPATIE= 32
const ARROW_UP = 38
const ARROW_LEFT = 37
const ARROW_DOWN = 40
const ARROW_RIGHT = 39
var snelheid_speler = 10
var aantal = 0

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var kogel1X = 400;
var kogel1Y = 300;
var kogelvliegt = false;
var d = 1

var speler2X = 600;
var speler2Y = 300;

var tijd_resterend = 500;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */S
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
    if (keyIsDown (KEY_SPATIE))
    {KOGEL1Y = spelerY - 1}

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
/*if (spelerY > 694) {
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
if (kogelvliegt === false && keyIsDown (32)) {
  kogelvliegt = true;
  kogel1X = spelerX ;
  kogel1Y = spelerY ;
}  if(kogelvliegt === true ){
    kogel1Y = kogel1Y -5; 
}  
  if(kogelvliegt === true && 
      kogel1Y < 25 ) {
    kogelvliegt = false ;
      }
};
/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
   fill("blue")
  rect(0,0,1280,720)
  fill("black")
  rect(0,325,1280,75)
  // vijand

  // kogel1X
   fill("red");
  ellipse(kogel1X -5 ,kogel1Y- 10 ,50,50)

  
  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // speler2
   
  fill("yellow");
  rect(speler2X - 25, speler2Y - 25, 50, 50);
  fill("black");
  ellipse(speler2X, speler2Y, 10, 10);

  // punten en health
   textSize(35);
  fill("white");
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
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
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
      fill("black")
  rect(0,0,1280,720)
    textSize(50);
    fill("white");
    text("GAMEOVER, PRESS F", 100, 100)
         if (keyIsDown(70)) { //f
           spelerX = 600
           spelerY = 600
        
    spelStatus = SPELEN;
      tijd_resterend = 500;
    }

  }
  if (spelStatus === UITLEG) {
    // UITLEG SCHERM MOET NOG KOME

  }
}
  
