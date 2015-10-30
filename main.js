var arr = [];
var sum = 0;
$(document).ready(function(){
		$('.numberButton').click(function(){
			arr.push(parseInt(this.id));
			console.log(arr);
		})
		$('#add').click(function(){
			arr.reduce(function(a,b){
				sum += a + b;
			})
			console.log(sum);
		})

})
