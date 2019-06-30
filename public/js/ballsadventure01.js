// -----------------------
// ballsadventure01.js 
//
// using : 
// p5.js + pxgamepad.js
//
// @author TouchyPunchy
// -----------------------

var gameManager;

// ---- SETUP

function setup(){
	const canvas = createCanvas(windowWidth,windowHeight);
	gameManager = new GameManager(0);
}

// ---- INPUT HANDLER (keyboard)

function keyPressed(){
	gameManager.keyPressed();
}

function keyReleased(){
	gameManager.keyReleased();
	return false;
}

// ---- LOOP

function draw(){
	gameManager.step();
}
