$(function (){

	$(".navbar-toggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 767) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});