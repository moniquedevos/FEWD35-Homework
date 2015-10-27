$(document).on("submit", "form", function(event) {
	event.preventDefault();

	var userData = {
		name: $("input[name='name']").val(),
		year: $("input[name='year']").val(),
		grapes: $("input[name='grapes']").val(),
		country: $("input[name='country']").val(),
		region: $("input[name='region']").val(),
		price: $("input[name='price']").val(),
		description: $("input[name='description']").val()

	};

		console.log(userData);


		$.ajax({ 
		type: "POST",
		url: "http://daretodiscover.herokuapp.com/wines",
		data: userData,
		success: function() {
			$("#user-form")[0].reset();
			alert ("Wine added successfully!");

		},

		error: function() {
			alert("Error!");
			}	
		});
	});

	$(document).on("click", "#submit-button", function() {
		$.ajax ({
			type: "GET",
			url: "http://daretodiscover.herokuapp.com/wines",
			success: function(wines) {
				for (var i=0; i < wines.length; i++) {
					console.log (wines [i].name);
					console.log (wines [i].year);
					console.log (wines [i].price);
					console.log (wines [i].grapes);
					console.log (wines [i].country);
					console.log (wines [i].region);
					console.log (wines [i].description);
					console.log (wines [i].picture);


				}
			}
	});
});

