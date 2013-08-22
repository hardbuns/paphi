$(document).ready(function() {
	$(".scrollto").click(function(event){
		console.log(this);
		$.scrollTo(
			$(this).attr("href"),
			{
				duration:200,
			});
	});
});