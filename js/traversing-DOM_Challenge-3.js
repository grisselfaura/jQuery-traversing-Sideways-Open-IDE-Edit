$(document).ready(function() {
// Change the text in the reset button to display the colour (RGB) of the selected panel.
   $(".theButton").click(function() {
        var resetText = $(this).css("background-color"); 
            console.log(resetText);
        $(".superButton").css("color",resetText);
   });
       
});	

		
/will display rgb value of selected panel in the reset panel
 $(".theButton").click(function(){
    var col = $(this).css('background-color');
  $('.superButton').text( col);

   });
});
		

    



