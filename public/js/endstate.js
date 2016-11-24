// -----------------------
// EndState
// -----------------------
function EndState(gameManager){
	
	this.gm = gameManager;
	
	this.init = function(){
	}
	
	this.inputCheck = function(){
		if(this.gm.pad.buttons.a === true)
			this.gm.setState(this.gm.titleState);
	}
	
	this.update = function(){
	}
	
	this.display = function(){
		background(0);
		noStroke();
		fill(255);
		text("End! press y!", 10, 20);
	}
	
	this.init();
}
