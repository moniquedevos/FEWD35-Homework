$(document).ready (function() {

	var source = $("#users-template").html();
	var template = Handlebars.compile(source);


$.ajax({
	type: "GET",
	url:"http://daretodiscover.herokuapp.com/users",
	success: function(userData) {
		for (var i=0; i < userData.length; i++) {
		$("tbody").append(template(userData[i]));
	}
	},

	error: function() {
		alert("Error");
	}
});
});