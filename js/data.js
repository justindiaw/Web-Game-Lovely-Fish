var dataObj = function()
{
	this.foodNum = 0;
	this.double = 1 ;
	this.score = 0;
	this.gameOver =false;
	this.alpha = 0;

}



dataObj.prototype.draw = function()
{
	var w = can1.width;
	var h = can1.height;

	ctx1.fillStyle = "white";


	ctx1.fillText("SCORE :"+this.score,w *0.5-30,h-20);
	if (this.gameOver)
	{
		this.alpha +=deltaTime * 0.001;
		if (this.alpha >1)
		{
			this.alpha = 1;
		}
		ctx1.fillStyle = "rgba(255,255,255,"+ this.alpha +")";
		ctx1.fillText("GAMEOVER", w *0.5 -100, h * 0.5);
	}

}
dataObj.prototype.addScore = function()
{
	this.score +=this.foodNum *100 * this.double;
	this.foodNum = 0;
	this.double = 1;

}