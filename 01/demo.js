$(function(){
			var array = [];
			while (array.length < 3) {
				var rand = parseInt(Math.random() * 9);
				for (var i = 0; i < array.length; i++) {
					if (array[i] == rand) {
						return false;
					}

				}
				array.push(rand);
			}console.log(array);
});