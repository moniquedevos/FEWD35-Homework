$(document).ready(function(){

$(document).on("mouseenter", ".logoanim", function (){
	$(this).addClass("animation");
});

$("figure").mouseleave(
    function() {
      $(this).removeClass("hover");
    });

$(document).on("submit", "form", function(event) {
	event.preventDefault ();

	var formInfo = {
		name: $("input[name='name']").val(),
		subject: $("input[name='subject']").val(),
		email: $("input[name='email']").val(),
		message: $("input[name='message']").val(),
		
	};
	console.log(formInfo);

	for (key in formInfo) {
		if (formInfo [key]=== "" && key !=="address2") {
			alert("Please fill-in all fields");
			return false;
		}
	}
	alert ("Thanks, I will be in touch shortly!");
	
});

});