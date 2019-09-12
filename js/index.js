$(document).ready(function() {
	$(".cinema-showing").on("click", function() {
		$(".cinema-soon").removeClass("btn-outline-light");	
		$(".cinema-soon").addClass("btn-outline-dark");
		$(this).removeClass("btn-outline-dark");
		$(this).addClass("btn-outline-light");
		// show movies now showing
	});
	$(".cinema-soon").on("click", function() {
		$(".cinema-showing").removeClass("btn-outline-light");
		$(".cinema-showing").addClass("btn-outline-dark");
		$(this).removeClass("btn-outline-dark");
		$(this).addClass("btn-outline-light");
		// show movies showing soon
	});
});