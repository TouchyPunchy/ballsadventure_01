// -----------------------
// TitleState
// -----------------------
function TitleState(gameManager){
 
	this.gm = gameManager;
	
	this.init = function(){
		 // son
		 //sound.playSong(status);
	}
	
	this.inputCheck = function(){
		if(this.gm.pad.buttons.a === true)
			this.gm.setState(this.gm.gameState);
		
	}
	
	this.update = function(){
	}
	
	this.display = function(){
		background(0);
		fill(255);
		text("Title! press a !", 10, 20);
	} 

	this.init();
}
