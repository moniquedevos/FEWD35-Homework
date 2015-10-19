$('.dropdown-toggle').dropdown()
$(document).on("submit", "form", function(event) {
	event.preventDefault ();

	var formInfo = {
		firstname: $("input[name='first-name']").val(),
		lastname: $("input[name='last-name']").val(),
		email: $("input[name='email']").val(),
		address: $("input[name='address']").val(),
		city: $("input[name='city']").val(),
		state: $("select[name='state']").val(),
		country: $("select[name='country']").val(),

	};
	for (key in formInfo) {
		if (formInfo [key]=== "") {
			alert("Please fill out all fields!");
			return false;
		}
	}
	alert ("Thanks for submitting the form!");
	
});
