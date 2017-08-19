$(document).ready(function(){ 

	var n = $("#lang-menu div").text();

	if (n == "EN") {
		$(".container").text("It will appear");
	} else if (n == "RU") {
		$(".container").text("Появится это");
	}

});