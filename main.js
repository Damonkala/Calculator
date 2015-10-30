var arr = [];
var sum = 0;
var input = document.createElement('div');

$(document).ready(function(){

		$('.numberButton').click(function(){
			// arr.push((this.id));
			arr = arr.concat((this.id));
			// arr
			input.textContent = arr.join('');
			document.getElementById('numberContainer').appendChild(input);
			//console.log(arr);
		})
		$('#clear').click(function(){
			document.getElementById('numberContainer').innerHTML = "<br>";
			arr = [];
		})
		$('#add').click(function(){
			arr.push("+")
			input.textContent = arr.join('');;
			document.getElementById('numberContainer').appendChild(input);
			//console.log(arr);
		})
		$('#equals').click(function(){

			for(var i = 0; i < arr.length; i++)
	{
	    if(arr[i].indexOf('+') != -1)
	    {
	        symbol = "+";
	    }
	}
			switch(symbol){
				case "+":
				var sentenced = arr.join("");
				console.log(sentenced);

				var splitUp = sentenced.split("+").map(function(item) {
					return parseInt(item, 10);
				})
				console.log(splitUp);
				splitUp.reduce(function(a,b){
					sum = a + b;
				})
				input.textContent = sum;
			document.getElementById('numberContainer').appendChild(input);
				console.log(sum);
				arr = [sum.toString()];
				break;
			}
		})


})
