// -----------------------
// ballsadventure01.js 
//
// using : 
// p5.js + pxgamepad.js
//
// @author TouchyPunchy
// -----------------------

// Canvas size
var W = 1200;
var H = 600;
var gameManager;

// ---- SETUP

function setup(){
	W = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	H = window.innerHeight || document.documentElement.clientHeight	|| document.body.clientHeight;
	W = W - 32;
	H = H - 18;
	createCanvas(W,H);
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
