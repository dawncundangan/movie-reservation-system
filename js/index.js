$(document).ready(function() {
	var htmlString = "";
	var cinamaWithMovie = [];
	var cinamaWithoutMovie = [];
	nowShowing();
	$("#moviesShowing").html(htmlString);

	function nowShowing() {
		for(var movie = 0; movie < movies.length; movie++) {
	        for(var cinema = 0; cinema < movies[movie].cinema_1.length; cinema++) {
	        	if(movies[movie].cinema_1[cinema] == moment(new Date()).format("MMM D")) {
	        		showMovie(movie);
	        	}
	        }
	        for(var cinema = 0; cinema < movies[movie].cinema_2.length; cinema++) {
	        	if(movies[movie].cinema_2[cinema] == moment(new Date()).format("MMM D")) {
	        		showMovie(movie);
	        	}
	        }
	        for(var cinema = 0; cinema < movies[movie].cinema_3.length; cinema++) {
	        	if(movies[movie].cinema_3[cinema] == moment(new Date()).format("MMM D")) {
	        		showMovie(movie);
	        	}
	        }
	        for(var cinema = 0; cinema < movies[movie].cinema_4.length; cinema++) {
	        	if(movies[movie].cinema_4[cinema] == moment(new Date()).format("MMM D")) {
	        		showMovie(movie);
	        	}
	        }
	    } 
	}

	/*var htmlString = "";
	var cinemaNumbers = ["cinema_1", "cinema_2", "cinema_3", "cinema_4"];
	var cinamaWithMovie = [];

	for(var number = 0; number < cinemaNumbers.length; number++) {
		var thisCinema = parseHTcinemaNumbers[number];
		for(var movie = 0; movie < movies.length; movie++) {
			console.log( movies[movie].cinema_1);
	        for(var cinema = 0; cinema < movies[movie].thisCinema.length; cinema++) {
	        	if(movies[movie].thisCinema[cinema] == moment(new Date()).format("MMM D")) {
	        		showMovie(movie);
	        	}
	        }
	    } 
	}*/

    function showMovie(movie) {
    	if(cinamaWithMovie.includes(movie) == false) {
			console.log(cinamaWithMovie);

	    	htmlString += "<div class='card col-md-2 col-sm-6 px-1 my-1 homepage-movie-cards'>";
	        htmlString += "<img src='" + movies[movie].image + "' class='card-img'>";
	        htmlString += "<div class='card-img-overlay text-center movies-now-showing'>";
	        htmlString += "<div class='pt-sm-2 pt-m-1'><h4>" + movies[movie].name + "</h4><p class='showing-datetime mb-0'>Now Showing</p>"; 
	        htmlString += "<p class='showing-datetime my-0'>" + movies[movie].time + "</p>";
	        htmlString += "<span class='badge badge-warning mb-sm-2 mb-md-1'>" + movies[movie].badge + "</span></div><div class='pt-sm-5 pt-md-3'>";
	        htmlString += "<button class='btn btn-sm button button5' data-toggle='modal' data-target='#reserve1' ";
	        htmlString += "onclick='showDetails(" + movie + ")'>Buy Ticket</button></div></div></div>";

	        cinamaWithMovie.push(movie);
	    } else {
	    	cinamaWithoutMovie.push(movie);
	    }
    }

    function showingSoon() {
		for(var movie = 0; movie < movies.length; movie++) {
	        for(var cinema = 0; cinema < movies[movie].cinema_1.length; cinema++) {
	        	if(movies[movie].cinema_1[cinema] == moment(new Date()).format("MMM D")) {
	        		showMovie(movie);
	        	}
	        }
	        for(var cinema = 0; cinema < movies[movie].cinema_2.length; cinema++) {
	        	if(movies[movie].cinema_2[cinema] == moment(new Date()).format("MMM D")) {
	        		showMovie(movie);
	        	}
	        }
	        for(var cinema = 0; cinema < movies[movie].cinema_3.length; cinema++) {
	        	if(movies[movie].cinema_3[cinema] == moment(new Date()).format("MMM D")) {
	        		showMovie(movie);
	        	}
	        }
	        for(var cinema = 0; cinema < movies[movie].cinema_4.length; cinema++) {
	        	if(movies[movie].cinema_4[cinema] == moment(new Date()).format("MMM D")) {
	        		showMovie(movie);
	        	}
	        }
	    } 
	}

	$(".cinema-showing").on("click", function() {
		$(".cinema-soon").removeClass("btn-outline-light");	
		$(".cinema-soon").addClass("btn-outline-dark");
		$(this).removeClass("btn-outline-dark");
		$(this).addClass("btn-outline-light");
		nowShowing();
	});

	$(".cinema-soon").on("click", function() {
		$(".cinema-showing").removeClass("btn-outline-light");
		$(".cinema-showing").addClass("btn-outline-dark");
		$(this).removeClass("btn-outline-dark");
		$(this).addClass("btn-outline-light");
		showingSoon();
	});
});