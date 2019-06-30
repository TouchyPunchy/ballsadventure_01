// -----------------------
// GameManager
// -----------------------
class GameManager{

	constructor(status){
		this.STATUS_TITLE = 0;
		this.STATUS_GAME = 1;

		this.status = status;
	
		// Actual state
		this.state; 

		// All game states
		this.titleState = new TitleState(this);
		this.gameState = new GameState(this);
		this.endState = new EndState(this);
		this.pauseState = new PauseState(this);
		
		// Pad
		this.pad = new PxGamepad();
		this.gamePad = new GamePad();

		this.init();
	}
	
	init(){
		this.pad.start();	

		if(this.status == 0)
			this.state = this.titleState;
		if(this.status == 1)
			this.state = this.gameState;
	}
		
	step(){
		this.pad.update();
		this.state.inputCheck();
		this.state.update();
		this.state.display(); 
	}
	
	setState(state){
		this.state = state;  
	}

	keyPressed(){
		this.gamePad.keyPressed();
	}

	keyReleased(){
		this.gamePad.keyReleased();
		return false;
	}
}
