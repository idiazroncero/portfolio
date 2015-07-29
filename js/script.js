$(function(){
	var diapos = $('#diapos').flickity({
		cellSelector: '.diapo',
		setGallerySize: false,
		imagesLoaded:true,
		pageDots: false
	});
	if (!Modernizr.touch) {
		$('.diapo-bottom-text').mCustomScrollbar({
			theme: "dark-thin",
			scrollbarPosition: "outside",
			autoHideScrollbar: true
		});
	}
	$('#timeline ul').on( 'click', 'li', function() {
	  var index = $(this).index();
	  diapos.flickity( 'select', index );
	});
});