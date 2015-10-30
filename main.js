var arr = [];
var sum = 0;
var input = document.createElement('div');
var modPushed = false;
var modCount = 0;

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
			modPushed = false;
		})
		$('#clear').click(function(){
			document.getElementById('numberContainer').innerHTML = "<br>";
			arr = [];
		})
		$('#add').click(function(){
			if (modPushed === false){
				if (modCount === 1) {
					addNumbers();
					modCount = 0;
				}
				arr.push("+")
				input.textContent = arr.join('');;
				document.getElementById('numberContainer').appendChild(input);
				//console.log(arr);
				modPushed = true
				modCount++;
			}
		})
		$('#minus').click(function(){
			if (modPushed === false){
				if (modCount === 1) {
					subtractNumbers();
					modCount = 0;
				}
				arr.push("-")
				input.textContent = arr.join('');;
				document.getElementById('numberContainer').appendChild(input);
				//console.log(arr);
				modPushed = true
				modCount++;
			}

		})
		$('#multiply').click(function(){
			if (modPushed === false){
				if (modCount === 1) {
					multiplyNumbers();
					modCount = 0;
				}
				arr.push("x")
				input.textContent = arr.join('');;
				document.getElementById('numberContainer').appendChild(input);
				//console.log(arr);
				modPushed = true
				modCount++;
			}

		})
		$('#divide').click(function(){
			if (modPushed === false){
				if (modCount === 1) {
					divideNumbers();
					modCount = 0;
				}
				arr.push("/")
				input.textContent = arr.join('');;
				document.getElementById('numberContainer').appendChild(input);
				//console.log(arr);
				modPushed = true
				modCount++;
			}

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
