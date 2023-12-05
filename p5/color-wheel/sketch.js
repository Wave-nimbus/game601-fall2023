let ringDotX = [100];
let ringDotY = [100];
let ringDotXVel = [100];
let ringDotYVel = [100];
let ringDotSize = [100];
let ringDotColor = [100];

let ringSpeed = 3;
let ringRadius = 0;
let ringX = 0;
let ringY = 0;

function setup()
{
	createCanvas(windowWidth, windowHeight);
	background(0);
	colorMode(HSB);
	angleMode(DEGREES);
	ringX = width/2;
	ringY = height/2;
	ringRadius = height/3;
	for(let i = 0; i < 100; i++)
	{
		//Position the dots in a circle.
		ringDotX[i] = ringX + cos(3.6*i) * ringRadius;
		ringDotY[i] = ringY + sin(3.6*i) * ringRadius;
		//Make their velocities go towards the inside.
		ringDotXVel[i] = -cos(3.6*i) * ringSpeed;
		ringDotYVel[i] = -sin(3.6*i) * ringSpeed;
		//Randomize the sizes of the dots.
		ringDotSize[i] = random(5, 20);
		//Make the color go around the HSB wheel.
		ringDotColor[i] = 3.6*i;
	}
}

function draw() 
{
	background(0, 0, 75);
	for(let i = 0; i < 100; i++)
	{
		dot(i);
	}
}

function dot(idx)
{
	stroke(ringDotColor[idx], 100, 100);
	fill(ringDotColor[idx], 100, 100);
	circle(ringDotX[idx], ringDotY[idx], ringDotSize[idx]); //Draw the dot.
	ringDotX[idx] += ringDotXVel[idx];
	ringDotY[idx] += ringDotYVel[idx]; //Move the dot
	
	if(dist(ringDotX[idx], ringDotY[idx], ringX, ringY) >= ringRadius) //Outside of ring, reverse direction.
	{
		ringDotXVel[idx] = -ringDotXVel[idx];
		ringDotYVel[idx] = -ringDotYVel[idx];
	}
}