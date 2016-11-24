function Block(x,y){

	this.x = x;
	this.y = y;
	this.dx = 0;
	this.dy = 0;
	this.width = 120;
	this.length = 24;
	this.dirx = 0;

	this.update = function(){
		//this.dy += this.GRAVITY;
		//this.dx *= this.friction;

		this.dx = this.dirx * 5;

		this.x += this.dx;
		this.y += this.dy;		

		if(this.y >= height + this.r){
			this.dy = -this.dy;
			this.y = height;
		}

		if(this.x + this.r <= 0){
			this.dx = -this.dx;
			this.x = this.r;
			this.toDelete = true;
		}else if(this.x >= width + this.r){
			this.dx = - this.dx;
			this.x = width - this.r;
			this.toDelete = true;
		}
	}

	this.show = function(){
		fill(0);
		stroke(255);
		rect(this.x, this.y, this.width, this.length);
	}

	this.move = function(direction){
		this.dirx = - direction;
		//this.x += - direction * this.dx;
	}
}