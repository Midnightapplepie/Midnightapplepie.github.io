var canvas=document.querySelector("#myCanvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var ctx=canvas.getContext("2d");


function blog(){
	document.getElementById("footerSlider").style.right="-36%";
	document.getElementById("blog").style.top="0";
};

function home(){
	document.getElementById("footerSlider").style.right="36%";
	document.getElementById("blog").style.top="-100%";
};
//switch background color;
var background="white"
function switchColors(){
	if (background=="white"){
		background="black";
	}else{
		background="white";
	}
};

//clear canvase
function newCanvas(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	if (background==="white"){
		ctx.fillStyle="#FFFFFF";
	}else{
		ctx.fillStyle="#000000";
	};
	ctx.fillRect(0,0,canvas.width,canvas.height);
};

//Create empty circle array
var circles=[];


//create random color
function randomColor(){
return '#'+Math.floor(Math.random()*16777215).toString(16);
}


//setting radius/circle.base range
function getRange(min,max){
	arr=[]
	for (i=min;i<=max;i++){
		arr.push(i);
	}
	return arr
}

var radiusRange=getRange(1,5)


//random function
function rand(length){
	return Math.floor(Math.random()*length)
}


//start circle with random radius
function randomRadius(){
	return radiusRange[rand(radiusRange.length)]
}

//clone and Shuffle array
function shuffle(arr){
    var shuffled=[], 
        clone=arr.slice(0),
        randIndex;
    for (i=0; i<arr.length; i++){
        randIndex=Math.floor(Math.random()*clone.length);
        shuffled.push(clone[randIndex]);
        clone.splice(randIndex,1)
    }
    return shuffled
};

//Circle constructer
function CreateCircle(){
	this.base=randomRadius()
	this.radius=2;
	this.x=rand(canvas.width);
	this.y=rand(canvas.height);
	this.angle=rand(360);
	this.speed=[0.5,0.6,0.7,0.8,0.9,1][rand(6)]*0.5;
	this.xMove=Math.cos(this.angle)*this.speed
	this.yMove=Math.sin(this.angle)*this.speed
	this.growthRate=2;
	this.maxSize=12;
	this.paint=randomColor();
	this.glow=false;
};
//reset beginpath
CreateCircle.prototype.cordCheck=function(){
	var randomStart=[[0,rand(canvas.height)],
					 [canvas.width,rand(canvas.height)],
					 [rand(canvas.width),0],
					 [rand(canvas.width),canvas.height]];

	var randomSet=randomStart[rand(4)];

	if (this.x>canvas.width || this.y > canvas.height || this.x<0 || this.y<0){
		this.x=randomSet[0];
		this.y=randomSet[1];
	}
}

//update and draw circle
CreateCircle.prototype.update=function(){
		//move circles
		this.x+=this.xMove;
		this.y+=this.yMove;
		this.cordCheck();

		//glow function
		if (this.glow===true && this.radius<this.maxSize){
			this.radius+=this.growthRate;
		}else if (this.glow===true && this.radius>=this.maxSize){
			this.glow=false;
		}else if(this.glow===false && this.radius>1){
			this.radius-=this.growthRate*0.5;
		};
		//reset default radius
		if (this.radius<this.base){
				this.radius=this.base*1;
		};
		//draw circle
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
		ctx.closePath();
		ctx.fillStyle=this.paint;
		ctx.fill();
	};

//create x number of circles
function generateCircles(number){
	for (var i=0; i<=number;i++){
		var circle= new CreateCircle();
		circles.push(circle);
	};
};

generateCircles(100);

//set glow to true or false
function updateGlow(rate){
	circles=shuffle(circles);
	for (i=0;i<Math.floor(circles.length*rate);i++){
		if (circles[i].glow===false){
			circles[i].glow=true;
		}
	}
};

//initiate drawing on canvas
function draw(){
	newCanvas();
	for (var i=0; i<circles.length; i++){
		circles[i].update();
	};
	requestAnimationFrame(draw);
}
draw()

//create glow interval
for (i=0;i<15;i++){
	setInterval(function(){updateGlow(0.02)},400+i*150);
};


/*======growth rate======================
function randomRate(){
	var rate=[0.1,0.25,0.5,0.75];
	return rate[rand(rate.length)];
}
*/


/*======Max Size===========================
function randomSize(){
	var multiple=getRange(2,5)
	return multiple[rand(multiple.length)]
}
*/