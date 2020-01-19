$(document).ready(function() {
// Open the paragraph once the image is clicked
   $("img").click(function() {
		$(this).next().children("p").slideDown();
		//next to img = div which have 3 children 
	});
});

