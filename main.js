var arr = [];
var sum = 0;
var input = document.createElement('div');
var plusPushed = false;
var plusCount = 0;
var minusPushed = false;
var minusCount = 0;
var multiplyPushed = false;
var multiplyCount = 0;
var dividePushed = false;
var divideCount = 0;

$(document).ready(function(){
	function addNumbers () {
				var numbered = arr.join("").split("+").map(function(item){
					return parseInt(item,10);
				});
				numbered.reduce(function(a,b){
					sum = a + b;
				})
				if (isNaN(sum)){
					input.textContent = ("ERROR!");
					document.getElementById('numberContainer').appendChild(input);
					console.log("ERROR!");
					arr = [];
				} else {
					input.textContent = sum;
					document.getElementById('numberContainer').appendChild(input);
					console.log(sum);
					arr = [sum.toString()];
				}
			}
	function subtractNumbers () {
				var numbered = arr.join("").split("-").map(function(item){
					return parseInt(item,10);
				});
				numbered.reduce(function(a,b){
					sum = a - b;
				})
				if (isNaN(sum)){
					input.textContent = ("ERROR!");
					document.getElementById('numberContainer').appendChild(input);
					console.log("ERROR!");
					arr = [];
				} else {
					input.textContent = sum;
					document.getElementById('numberContainer').appendChild(input);
					console.log(sum);
					arr = [sum.toString()];
				}
			}
	function multiplyNumbers () {
				var numbered = arr.join("").split("x").map(function(item){
					return parseInt(item,10);
				});
				numbered.reduce(function(a,b){
					sum = a * b;
				})
				if (isNaN(sum)){
					input.textContent = ("ERROR!");
					document.getElementById('numberContainer').appendChild(input);
					console.log("ERROR!");
					arr = [];
				} else {
					input.textContent = sum;
					document.getElementById('numberContainer').appendChild(input);
					console.log(sum);
					arr = [sum.toString()];
				}
			}
	function divideNumbers () {
				var numbered = arr.join("").split("/").map(function(item){
					return parseInt(item,10);
				});
				numbered.reduce(function(a,b){
					sum = a / b;
				})
				if (isNaN(sum)){
					input.textContent = ("ERROR!");
					document.getElementById('numberContainer').appendChild(input);
					console.log("ERROR!");
					arr = [];
				} else {
					input.textContent = sum;
					document.getElementById('numberContainer').appendChild(input);
					console.log(sum);
					arr = [sum.toString()];
				}
			}

		$('.numberButton').click(function(){
			arr = arr.concat((this.id));
			input.textContent = arr.join('');
			document.getElementById('numberContainer').appendChild(input);
			plusPushed = false;
			minusPushed = false;
			multiplyPushed = false;
			dividePushed = false;
		})
		$('#clear').click(function(){
			document.getElementById('numberContainer').innerHTML = "<br>";
			arr = [];
			sum = 0;
		})
		$('#add').click(function(){
			if (plusPushed === false){
				if (plusCount === 1) {
					addNumbers();
					plusCount = 0;
				}
				arr.push("+")
				input.textContent = arr.join('');;
				document.getElementById('numberContainer').appendChild(input);
				plusPushed = true
				plusCount++;
			}
		})
		$('#minus').click(function(){
			if (minusPushed === false){
				if (minusCount === 1) {
					subtractNumbers();
					minusCount = 0;
				}
				arr.push("-")
				input.textContent = arr.join('');;
				document.getElementById('numberContainer').appendChild(input);
				minusPushed = true
				minusCount++;
			}

		})
		$('#multiply').click(function(){
			if (multiplyPushed === false){
				if (multiplyCount === 1) {
					multiplyNumbers();
					multiplyCount = 0;
				}
				arr.push("x")
				input.textContent = arr.join('');;
				document.getElementById('numberContainer').appendChild(input);
				multiplyPushed = true
				multiplyCount++;
			}

		})
		$('#divide').click(function(){
			if (dividePushed === false){
				if (divideCount === 1) {
					divideNumbers();
					divideCount = 0;
				}
				arr.push("/")
				input.textContent = arr.join('');;
				document.getElementById('numberContainer').appendChild(input);
				dividePushed = true
				divideCount++;
			}

		})
		$('#apositive').click(function(){
			neg = arr * -1;
			input.textContent = neg;
			document.getElementById('numberContainer').appendChild(input);
			console.log(neg);
		})

		$('#equals').click(function(){

			for(var i = 0; i < arr.length; i++)
	{
	    if(arr[i].indexOf('+') != -1)
	    {
	        var symbol = "+";
	    }
	    if(arr[i].indexOf('-') != -1)
	    {
	        var symbol = "-";
	    }
	    if(arr[i].indexOf('x') != -1)
	    {
	        var symbol = "x";
	    }
	    if(arr[i].indexOf('/') != -1)
	    {
	        var symbol = "/";
	    }
	}
			switch(symbol){
				case "+":
						addNumbers();
						break;
				case "-":
						subtractNumbers();
						break;
				case "x":
						multiplyNumbers();
						break;
				case "/":
						divideNumbers();
						break;
			}
		})
	})
