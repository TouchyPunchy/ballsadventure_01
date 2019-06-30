// -----------------------
// EndState
// -----------------------
class EndState{
	
	constructor(gameManager){
		this.gm = gameManager;
	}
	
	inputCheck(){
		if(this.gm.pad.buttons.a === true)
			this.gm.setState(this.gm.titleState);
	}
	
	update(){
	}
	
	display(){
		background(0);
		noStroke();
		fill(255);
		text("End! press y!", 10, 20);
	}
}
