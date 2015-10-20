$('.dropdown-toggle').dropdown()
$(document).on("submit", "form", function(event) {
	event.preventDefault ();

	var formInfo = {
		firstname: $("input[name='firstname']").val(),
		lastname: $("input[name='lastname']").val(),
		email: $("input[name='email']").val(),
		address: $("input[name='address']").val(),
		address2: $("input[name='address2']").val(),
		city: $("input[name='city']").val(),
		state: $("select[name='state']").val(),
		country: $("select[name='country']").val(),

	};
	console.log(formInfo);

	for (key in formInfo) {
		if (formInfo [key]=== "" && key !=="address2") {
			alert("Please fill-in all fields!");
			return false;
		}
	}
	alert ("Thanks for submitting the form!");
	
});
