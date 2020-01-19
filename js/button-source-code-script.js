$(document).ready(function(){

// When a panel is clicked, all siblings fade to 10% opacity
     $("div").click(function() {
		$("div").siblings().fadeTo("slow", 0.1);
	});	
// When reset is clicked, all panels revert to full opacity
     $(".superButton").click(function() {
		$("div").siblings().fadeTo("fast", 1);
	});	
// When the mouse hovers over a panel, that panel turns black
     $("div").mouseenter(function() {
		$(this).toggleClass("black");// or addClass instead
	});	
// When the mouse moves away, the panel reverts back to its previous colour
     $("div").mouseleave(function() {
		$(this).removeClass("black");
	});		
});

// When a colored panel is clicked, all panels vanish
//   $("div").click(function() {
//		$(".theButton").filter(".makeBlue").hide(2000); or .$("#panel .container").siblings().hide();
//	});

// When a colored panel is clicked, just that panel disappears
//     $(".theButton").click(function() {
//		$(this).filter(".makeBlue").hide(2000); or $(this).hide();
//	});	

// When a panel is clicked, all siblings fade to 10% opacity
//     $("div").click(function() {
//		$("div").siblings().fadeTo("slow", 0.1);
//	});	