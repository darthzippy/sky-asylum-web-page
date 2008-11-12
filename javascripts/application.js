$(document).ready(function() {
	
	$('#main').corner("30px")
	
	$('img.reflect').reflect( {height: 0.3} );
	
	$('.headshot').dropShadow();
	
	$('.caption').hide();
	
	var getWidth = $('#container1').width();

	$('a.shiftleft').click(function(){
	  $("#circles").removeClass("left")
	  $("#circles").addClass("right")
	  $('#slider').animate({left: -getWidth}, 500);
	  $('a.shiftleft').hide();
	  $('a.shiftright').show();
	  return false;
	});
	// Slide the whole works back into its original position
	// when you click the "shiftright" link.
	$('a.shiftright').click(function(){
	  $("#circles").removeClass("right")
	  $("#circles").addClass("left")
	  $('#slider').animate({left: 0}, 500);
	  $('a.shiftright').hide();
	  $('a.shiftleft').show();
	  return false;
	});
	
	$('a.change-trailer').click(function() {
	  $('#movie').html('<object width="425" height="355"><param name="movie" value="http://www.youtube.com/v/ycFqzNxiTwY&hl=en"></param><param name="wmode" value="transparent"></param><embed src="http://www.youtube.com/v/ycFqzNxiTwY&hl=en" type="application/x-shockwave-flash" wmode="transparent" width="425" height="355"></embed></object>');
	  $('#movie_description').html('<h3>Throne Away</h3><br /><p>This is the description of Throne Away</p>')  
	  return false;	
	});
	
	$('a.change-trailer-back').click(function() {
	  $('#movie').html('<object width="425" height="355"><param name="movie" value="http://www.youtube.com/v/9FlJjtG-80U"></param><param name="wmode" value="transparent"></param><embed src="http://www.youtube.com/v/9FlJjtG-80U" type="application/x-shockwave-flash" wmode="transparent" width="425" height="355"></embed></object>');
	  $('#movie_description').html('<h3>Our Demo Reel</h3><br /><p>This is the description of the demo reel</p>')
	  return false;	
	});
	
	$('a.change-trailer-back').hover(function() {
	  $('.caption').addClass('show-me');
	}, function () {
	  $('.caption').removeClass('show-me');
	});
	
	$('a.change-trailer').hover(function() {
	  $('.caption').addClass('show-me');
	}, function () {
	  $('.caption').removeClass('show-me');
	});
	
	$('div.info').hide();
	$('a.less').hide();

	$('a.more').click(function() {
	  var inmateDiv = $(this).parent().parent().attr('id');
	  var inmateMore = 'a#' + inmateDiv + '-more';
	  var inmateLess = 'a#' + inmateDiv + '-less';
      var inmateInfo = '#' + inmateDiv + '-info';
	  $(inmateLess).show();
	  $(inmateMore).hide();	
	  $(inmateInfo).slideDown(1000);
	  return false;
	});
	
	$('a.less').click(function() {
	  var inmateDiv = $(this).parent().parent().attr('id');
	  var inmateMore = 'a#' + inmateDiv + '-more';
	  var inmateLess = 'a#' + inmateDiv + '-less';
	  var inmateInfo = '#' + inmateDiv + '-info';
	  $(this).hide();
	  $(inmateMore).show();
	  $(inmateInfo).slideUp(1000);
	  return false;	
	});
});