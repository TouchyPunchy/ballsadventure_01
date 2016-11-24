// -----------------------
// GamePad
// -----------------------
function GamePad(){
	
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
	
	this.keyPressed = function(){
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

	this.keyReleased = function () {
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

/*
var keys = {},
    speed = 4,
    player = document.getElementById('player'),
    applyDeadzone = function(number, threshold){
        percentage = (Math.abs(number) - threshold) / (1 - threshold);
        if(percentage < 0){
            percentage = 0;
        }
        return percentage * (number > 0 ? 1 : -1);
    },
    gamepad = null,
    joystickX = 0, 
    horizontalMovement = 0,
    getHorizontalMovementFromKeys = function(){
      
      movement = 0;
      
      if(keys[37]){
        movement = -speed;
      }
      if(keys[39]){
        movement += speed;
      }
      
      return movement;
    },
    gameloop = function(){
      
      gamepad = navigator.getGamepads()[0];
      if(gamepad){
        joystickX = applyDeadzone(gamepad.axes[0], 0.25) * speed;
        if(Math.abs(joystickX) > 0){
          horizontalMovement = joystickX;
        }else{
          horizontalMovement = getHorizontalMovementFromKeys();
        }
      }else{
        horizontalMovement = getHorizontalMovementFromKeys();
      }
       
      if(Math.abs(horizontalMovement) > 0){
        playerLeft = parseFloat(window.getComputedStyle(player,null).getPropertyValue("left"));

        if(playerLeft){
          player.style.left = (playerLeft + horizontalMovement) + "px";
        }
      }

      window.requestAnimationFrame(gameloop);
    };

window.onkeydown = function(e){
  var e = e || window.event;
  keys[e.keyCode] = true;
}

window.onkeyup = function(e){
  var e = e || window.event;
  delete keys[e.keyCode];
}

gameloop();
*/