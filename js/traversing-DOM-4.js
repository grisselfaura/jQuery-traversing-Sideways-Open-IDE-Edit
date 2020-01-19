$(document).ready(function() {
// Hide all panel once the select is clicked

    $(".card").click(function() {
		$(this).toggleClass("pink_bg");
    });
    $("#select_btn").click(function() {
		$(".card:not(.pink_bg)").hide(2000);
	});

// Show all panel once the all is clicked
   $("#all_btn").click(function() {
		$(".card").show(2000);
	});
});

