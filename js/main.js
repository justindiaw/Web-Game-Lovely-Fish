var can1;
var can2;

var canwidth;
var canheight;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var bgPic = new Image();

var seaweed;
var food;
var mom;
var baby;

var mx;
var my;

var babyTail = [];
var babyBody = [];

var momTail = [];
var momBodyOra = [];
var momBodyBlue = [];

var data;

var dust;
var dustPic = [];


document.body.onload = game;

function game()
{
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();

}

function init()
{
    //obtain canvas context
	can1 = document.getElementById("canvas1");
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove',onMouseMove,false);
	bgPic.src="src/background.jpg"; 
	canWidth=can1.width;
	canHeight=can1.height;

	seaweed = new seaObj;
	seaweed.init();
	food = new foodObj;
	food.init();
	mom = new momObj();
	mom.init(); 
	baby = new babyObj;
	baby.init();
	
	mx=canWidth*0.5;
	my=canHeight*0.5;

	//add babyTail image
	for (var i = 0;i <8 ;i ++ )
	{
		babyTail[i] = new Image();
		babyTail[i].src = "src/bigTail" +i + ".png";
	}

	//add babyBody image
	for (var i = 0;i < 20 ;i ++ )
	{
		babyBody[i]  = new Image();
		babyBody[i].src="src/babyFade"+i+ ".png";
	}
	
	//add momTail image
	for (var i = 0;i <8 ;i ++ )
	{
		momTail[i] = new Image();
		momTail[i].src = "src/bigTail" +i + ".png";
	}

	data = new dataObj();
	//add momBodyOra
	for (var i = 0;i <8 ;i ++ )
	{
		momBodyOra[i] = new Image();
		momBodyOra[i].src = "src/bigSwim" +i + ".png";
	}

	//add momBodyBlue
	for (var i = 0;i <8 ;i ++ )
	{
		momBodyBlue[i] = new Image();
		momBodyBlue[i].src = "src/bigSwimBlue" +i + ".png";
	}

	//display text
	ctx1.font = "30px Verdana";
	ctx1.textAllign = "center";

	// add dust image 
	for (var i = 0;i <7 ;i++ )
		{
			dustPic[i] = new Image();
			dustPic[i].src = "src/dust" +i + ".png";
		}

	dust = new dustObj();
	dust.init();



}

function gameloop()
{
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime >30) deltaTime = 30;

	drawBackground();
	seaweed.draw();
	foodMonitor();
	food.draw();
	

	ctx1.clearRect(0,0,canWidth,canHeight);//ctx1 is covered on the ctx2.
	mom.draw();
	baby.draw();
	momFood();
	momBaby();

	data.draw();

	dust.draw();


}
// mouse 
function onMouseMove(e)
{
	if (!data.gameOver)
	{
		if(e.offsetX || e.layerX)
		{
			mx = e.offsetX == undefined ? e.layerX : e.offsetX;
			my = e.offsetY == undefined ? e.layerY : e.offsetY;
			
		}
	}
}