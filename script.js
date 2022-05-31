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

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var kogel1X = 400;
var kogel1Y = 300;
var speler2X = 600;
var speler2Y = 300;

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
if (keyIsDown (32)) {
  kogel1X = spelerX ;
  kogel1Y = spelerY ;
}
    kogel1Y = kogel1Y -5; 

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

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
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

  }
}
 