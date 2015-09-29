
var score = 0;

document 
	.getElementById("increase-5")
	.addEventListener ("click", function () {
		score= score + 5;

	 	document
			.getElementById("score")
			.innerHTML = score + "Points";

	});

document 
	.getElementById("decrease-5")
	.addEventListener ("click", function () {
		if (score >= 5) {
			score= score - 5;
		}
		else {
			score = 0;
		}

	 	document
			.getElementById("score")
			.innerHTML = score + "Points";
	});

document
	.querySelector("#submit-custom-score")
	.addEventListener("click", function (){
		var customScore =
		document
			.querySelector("#custom-score")
			.value;

		var numScore = parseInt(customScore);
		score = numScore;

		document
			.getElementById("score")
			.innerHTML = score + "Points";


	});