$(document).ready(function(){
  $(".menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});


  /*сравнение высоты блока */
  function setEqualHeight(columns) { 
		var tallestcolumn = 0; 
		columns.each( function() { 
			currentHeight = $(this).height(); 
			if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } ); 
			columns.height(tallestcolumn); 
		} 
		
		$(document).ready(function() { setEqualHeight($(".dop-height")); });