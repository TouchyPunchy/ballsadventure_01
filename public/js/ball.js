function Ball(x,y,dx,dy){

	this.GRAVITY = 2;

	this.x = x;
	this.y = y;
	this.r = 20,
	this.dx = dx;
	this.dy = dy;
	this.friction = 0.005;
	this.toDelete = false;
	//console.log("new Ball("+this.x+","+this.y+","+this.dx+","+this.dy+")");

	this.update = function(){
		this.dy += this.GRAVITY;
		//this.dx *= this.friction;

		this.x += this.dx;
		this.y += this.dy;

		if(this.y + this.r >= height ){
			this.dy = -this.dy;
			this.y = height - this.r / 2;
			this.toDelete = true;
		}

		if(this.x + this.r <= 0){
			this.dx = - this.dx;
			this.x = this.r;
			//this.toDelete = true;
		}else if(this.x >= width + this.r){
			this.dx = - this.dx;
			this.x = width - this.r;
			//this.toDelete = true;
		}
	}

	this.show = function(){
		noStroke();
		fill(250,0,200,150);
		//stroke(255);
		ellipse(this.x, this.y, this.r, this.r);
	}

}