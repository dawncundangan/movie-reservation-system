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
			htmlString += "<div class='card col-md-3 col-3 px-1 my-1 seat-cards' id='" + rowHeadings[index].concat(columns) + "'>";
			htmlString += "<img src='imgs/seat.png' class='card-img h-80'>";
			htmlString += "<div class='card-img-overlay p-2 text-center seat-number'>";
			htmlString += "<p class='card-text'>" + rowHeadings[index].concat(columns) + "</p></div></div>";	
		}
		htmlString += "</div>";
		htmlString += "<div class='container row col-sm-6 px-md-5 d-flex justify-content-center mx-0'>";
		for(var columns = 5; columns <= 8; columns++) {
			htmlString += "<div class='card col-md-3 col-3 px-1 my-1 seat-cards' id='" + rowHeadings[index].concat(columns) + "'>";
			htmlString += "<img src='imgs/seat.png' class='card-img h-80'>";
			htmlString += "<div class='card-img-overlay p-2 text-center seat-number'>";
			htmlString += "<p class='card-text'>" + rowHeadings[index].concat(columns) + "</p></div></div>";	
		}
		htmlString += "</div>";
	}
	$("#cinemaSeats").html(htmlString);

	// add seat-taken class to occupied seats

	$(".seat-cards").on("click", function() {
		if($(this).hasClass("take-seat")) {
			totalSeats--;
			totalAmount -= price;

			$("#popcorn" + $(this).attr('id')).remove();
			$(this).addClass("seat-cards");
			$(this).removeClass("take-seat");
			occupiedSeats.splice( $.inArray($(this).attr("id"), occupiedSeats), 1 );
			$("#totalSeatCount").val(totalSeats);
			$("#totalAmount").text(totalAmount.toFixed(2));
			checkSelectedSeats();
		} else {
			totalSeats++;
			totalAmount += price;

			htmlString = "<div class='card-img-overlay p-2 text-center' id='popcorn" + $(this).attr("id") + "'>";
			htmlString += "<img src='imgs/popcorn.png' class='card-img popcorn'></div>"
			
			$(this).append(htmlString);
			$(this).addClass("take-seat");
			$(this).removeClass("seat-cards");
			occupiedSeats.push($(this).attr("id"));
			$("#totalSeatCount").val(totalSeats);
			$("#totalAmount").text(totalAmount.toFixed(2));
			checkSelectedSeats();
		}
	});

	function checkSelectedSeats() {
		if(occupiedSeats.length > 0) {
			$("#checkOut").prop("disabled", false);
		} else {
			$("#checkOut").prop("disabled", true);
		}
	}

	var reservationDetails = decodeURIComponent(window.location.search);
	    reservationDetails = reservationDetails.substring(1);
    if(reservationDetails != "") {
        var reservation = reservationDetails.split("&");
	    var title, cinema, date, time;
	    for (var i = 0; i < reservation.length; i++) {
	      	title = reservation[0];
	      	cinema = reservation[1];
	      	date = reservation[2];
	      	time = reservation[3];
      	}
      	$("#movieImage").attr("src", JSON.parse(localStorage.getItem("movies"))[title].image);
      	$("#cinemaNumber").val("Cinema " + cinema.slice(7));
      	$("#datetime").val(date + " | " + time);
    }
      
    $("#checkOut").on("click", function() {
    	console.log("haha");
        const  details = {
	        title: JSON.parse(localStorage.getItem("movies"))[title].name,
	        cinema: cinema,
	        date: date,
	        time: time,
	        seat: occupiedSeats,
	        amountDue: $("#totalAmount").html()
    	}

	    var thisReservation = [];
	    thisReservation = JSON.parse(localStorage.getItem('reservations'));
	    thisReservation.push(details);
	    localStorage.setItem('reservations', JSON.stringify(thisReservation));
	    window.open("reservations.html");
		window.location = "reservations.html"
    });
});

