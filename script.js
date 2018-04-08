var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var butt = document.getElementById("btn");

body.style.background = setGradient();

btn.addEventListener("click", function(){
	var right = [
	{r: Math.floor((Math.random() * 256))},
	{g: Math.floor((Math.random() * 256))},
	{b: Math.floor((Math.random() * 256))}
	];
	var left = [
	{r: Math.floor((Math.random() * 256))},
	{g: Math.floor((Math.random() * 256))},
	{b: Math.floor((Math.random() * 256))}
	];
	var rightColor = body.style.backgroundColor = "rgb(" + right[0].r + "," + right[1].g + "," + right[2].b + ")"; 
	var leftColor = body.style.backgroundColor = "rgb(" + left[0].r + "," + left[1].g + "," + left[2].b + ")"; 
	
	document.body.style.background = "linear-gradient(to right, " 
	+ rightColor 
	+ ", " 
	+ leftColor 
	+ ")";
	
	css.textContent = body.style.background + ";";
});

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);