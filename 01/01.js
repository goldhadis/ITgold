$(function(){
	var arr = ["gray","green","yellow","white","black","red"];
	var interval;
	$(".btn1").click(function() {
		interval = setInterval(function(){
					var arr0=Math.floor(Math.random()*9);
		for(var i=0;i<10000;i++){
			var arr1=Math.floor(Math.random()*9);
			if(arr0!=arr1){
				break;
			}
		}
		var brr0=Math.floor(Math.random()*6);
		for(var i=0;i<10000;i++){
			var brr1=Math.floor(Math.random()*6);
			if(brr0!=brr1){
				break;
			}
		}
		$(".one").css('background-color', 'orange');
		$(".one").eq(arr0).css('background-color', arr[brr0]);
		$(".one").eq(arr1).css('background-color', arr[brr1]);

	},1000);

	});
	$(".btn2").click(function(){
		clearInterval(interval);
		$(".one").css('background-color', 'orange');
	});


});