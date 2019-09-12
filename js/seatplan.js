$(document).ready(function() {
	var htmlString = "";
	var rowHeadings = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
	var occupiedSeats = [];
	var totalSeats = 0;
	var totalAmount = 0;
	var price = 250;

	for(var rows = 1; rows <= 9; rows++) {
		index = rows - 1;
		htmlString += "<div class='container row col-sm-6 px-md-5 d-flex justify-content-center mx-0'>";
		for(var columns = 1; columns <= 4; columns++) {
			htmlString += "<div class='card col-md-3 col-sm-3 px-1 my-1 seat-cards' id='" + rowHeadings[index].concat(columns) + "'>";
			htmlString += "<img src='imgs/seat.png' class='card-img h-80'>";
			htmlString += "<div class='card-img-overlay p-2 text-center seat-number'>";
			htmlString += "<p class='card-text'>" + rowHeadings[index].concat(columns) + "</p></div></div>";	
		}
		htmlString += "</div>";
		htmlString += "<div class='container row col-sm-6 px-md-5 d-flex justify-content-center mx-0'>";
		for(var columns = 5; columns <= 8; columns++) {
			htmlString += "<div class='card col-md-3 col-sm-3 px-1 my-1 seat-cards' id='" + rowHeadings[index].concat(columns) + "'>";
			htmlString += "<img src='imgs/seat.png' class='card-img h-80'>";
			htmlString += "<div class='card-img-overlay p-2 text-center seat-number'>";
			htmlString += "<p class='card-text'>" + rowHeadings[index].concat(columns) + "</p></div></div>";	
		}
		htmlString += "</div>";
	}
	$("#cinemaSeats").html(htmlString);
	// add seat-taken class to occupied seats

	$(".seat-cards").on("click", function() {

		if($(this).hasClass("seat-taken")) {
			totalSeats--;
			totalAmount -= price;

			$("#popcorn" + $(this).attr('id')).remove();
			$(this).addClass("seat-cards");
			$(this).removeClass("seat-taken");
			occupiedSeats.splice( $.inArray($(this).attr("id"), occupiedSeats), 1 );
			$("#totalSeatCount").val(totalSeats);
			$("#totalAmount").text(totalAmount.toFixed(2));
		} else {
			totalSeats++;
			totalAmount += price;

			htmlString = "<div class='card-img-overlay p-2 text-center' id='popcorn" + $(this).attr("id") + "'>";
			htmlString += "<img src='imgs/popcorn.png' class='card-img popcorn'></div>"
			
			$(this).append(htmlString);
			$(this).addClass("seat-taken");
			$(this).removeClass("seat-cards");
			occupiedSeats.push($(this).attr("id"));
			$("#totalSeatCount").val(totalSeats);
			$("#totalAmount").text(totalAmount.toFixed(2));
		}
	});
});