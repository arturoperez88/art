var windowWidth = $(window).width();

if (windowWidth < 760 ) {
$(".bun").on('click',function(e){
	e.preventDefault();
  $('.menu').slideToggle(500);

  $(this).toggleClass('exit');
});

$(".project-name").click(function(){
	$(this).siblings().slideToggle(500);
	$(this).toggleClass("border-radius","move");
});
}else{}

$(window).resize(function() {
    $('#sub-header').height($(window).height());
});
$(window).trigger('resize');

// $(function(){
// 	setTimeout(function(){
// 		$('.fly-in-text').removeClass('hidden');
// 	}, 500);
		
// 		setTimeout(function(){
// 			$('.fly-in-text').fadeOut(1500);
// 		}, 4000);	
// });








