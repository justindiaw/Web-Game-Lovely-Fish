var babyObj = function ()
{
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();

	this.babyTailTimer = 0;
	this.babyTailCount = 0;

	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;

}
babyObj.prototype.init = function ()
{
	this.x = canWidth *0.5 - 50;
	this.y = canHeight *0.5+ 50;
	this.angle=0;
	this.babyEye.src= "src/babyEye0.png";
	this.babyBody.src= "src/babyFade0.png";
	
}
babyObj.prototype.draw = function()
{
	
	// follow momther
	this.x = lerpDistance(mom.x,this.x,0.95);
	this.y = lerpDistance(mom.y,this.y,0.95);

	// delta angle
	var deltaX =  mom.x-this.x;
	var deltaY =  -mom.y + this.y;
	var alpha =  Math.atan2(deltaX,deltaY );

	//totate
	this.angle = lerpAngle(alpha , this.angle , 0.8);

	//babyTail count
	this.babyTailTimer += deltaTime;
	if (this.babyTailTimer > 30)
	{
		this.babyTailCount = (this.babyTailCount +1) %8;
		this.babyTailTimer %=30;
	}
	// baby body
	this.babyBodyTimer += deltaTime;
	if (this.babyBodyTimer > 300)
	{
		this.babyBodyCount = this.babyBodyCount +1;
		this.babyBodyTimer %= 300;
		if (this.babyBodyCount >19)
		{
			this.babyBodyCount = 19;

			//game over
			data.gameOver = true;
		}
	}

	// draw and translate coordinate
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle + 90);
	var babyTailCount = this.babyTailCount;
	ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width *0.5 +23, -babyTail[babyTailCount].height *0.5 );
	var babyBodyCount = this.babyBodyCount;
	ctx1.drawImage(babyBody[babyBodyCount], -babyBody[babyBodyCount].width * 0.5, -babyBody[babyBodyCount].height *0.5);
	ctx1.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height *0.5);
	ctx1.restore();
}
