// -----------------------
// GamePad
//
// usage : if(gamePad.state & gamePad.KEY_A) 
//
// -----------------------
class GamePad{
  
	constructor(){
		// pad buttons
		this.DIR_UP = 1;
		this.DIR_DOWN = 2;
		this.DIR_LEFT = 4;
		this.DIR_RIGHT = 8;
		this.KEY_A = 16;
		this.KEY_B = 32;
		this.KEY_C = 64;
		this.KEY_START = 128;
		this.KEY_PAUSE = 256;
		
		this.state = 0;
	}
	
	keyPressed(){
		//console.log("key : " + keyCode,);
		if(keyCode === UP_ARROW)
			this.state = this.state | this.DIR_UP;
		if(keyCode === DOWN_ARROW)
			this.state = this.state | this.DIR_DOWN;
		if(keyCode === LEFT_ARROW)
			this.state = this.state | this.DIR_LEFT;
		if(keyCode === RIGHT_ARROW)
			this.state = this.state | this.DIR_RIGHT;
		if(key === ' ')
			this.state = this.state | this.KEY_A;
		//console.log('++ '+this.state);
	}

	keyReleased(){
		if (keyCode === UP_ARROW)
			this.state = this.state & (0xFFFF ^ this.DIR_UP);
		if (keyCode === DOWN_ARROW)
			this.state = this.state & (0xFFFF ^ this.DIR_DOWN);
		if (keyCode === LEFT_ARROW)
			this.state = this.state & (0xFFFF ^ this.DIR_LEFT);
		if (keyCode === RIGHT_ARROW)
			this.state = this.state & (0xFFFF ^ this.DIR_RIGHT);
		if (key === ' ')
			this.state = this.state & (0xFFFF ^ this.KEY_A);
		//console.log('- '+this.state);
	}
}