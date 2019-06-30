// -----------------------
// TitleState
// -----------------------
class TitleState{
	
	constructor(gameManager){
		this.gm = gameManager;
		this.init();
	}
	
	init(){
		 // son
		 //sound.playSong(status);
	}
	
	inputCheck(){
		if(this.gm.pad.buttons.a === true)
			this.gm.setState(this.gm.gameState);
		if(this.gm.gamePad.state === this.gm.gamePad.KEY_A)
			this.gm.setState(this.gm.gameState);
	}
	
	update(){
	}
	
	display(){
		background(0);
		fill(255);
		text("Title! press a !", 10, 20);
	} 
}
