function gradsToRadians(inputGrads){
	inputGrads = Number(inputGrads);
	
	inputGrads = inputGrads % 400;
	if (inputGrads < 0) {
		inputGrads += 400;
	} 

	let result = inputGrads * 0.9;  //index = 360 / 400;
	console.log(result);
}
gradsToRadians(0);
gradsToRadians(-400);
gradsToRadians(400);
gradsToRadians(-550);

function solve(grinds){
	grinds = Number(grinds);

	grinds = grinds % 400;
	if (grinds < 0) {
		grinds += 400;
	}

	let degrees = grinds * 0.9;
	console.log(degrees);
}


/*
	0°≤x<360°, 
	if you arrive at a value like -15°, 
	it needs to be converted to 345° and 420° becomes 60°.
	Input	Output
	[100]	90
	[400]	0
	[850]	45
	[-50]	315
 */