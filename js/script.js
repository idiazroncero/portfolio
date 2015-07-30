$(function(){
	// Consige dinamicamente la altura de la diapo-top
	var h;
	$(window).on('load resize', function(){
		h = $(window).height() - 80;
		$('.diapo-top').height(h);
		$('#timeline').css('top', h);
	});
	// if (!Modernizr.touch) {
	// 	$('.diapo-bottom-text').mCustomScrollbar({
	// 		theme: "dark-thin",
	// 		scrollbarPosition: "outside",
	// 		autoHideScrollbar: true
	// 	});
	// }
	setTimeout(function(){
		var diapos = $('#diapos').flickity({
			cellSelector: '.diapo',
			// setGallerySize: false,
			imagesLoaded:true,
			pageDots: false,
			prevNextButtons: false,

		});
		var timeline = $('#timeline .gallery').flickity({
			// cellSelector: 'li',
			// setGallerySize: false,
			pageDots: false,
			prevNextButtons: true,
			asNavFor: '#diapos',
  			contain: true,
		});
		// $('#timeline ul').on( 'click', 'li', function() {
		//   var index = $(this).index();
		//   diapos.flickity( 'select', index );
		// });
		$('#loading').fadeOut();
	},1000)
});