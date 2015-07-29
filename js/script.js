$(function(){
	$('#diapos').flickity({
		cellSelector: '.diapo',
		setGallerySize: false,
		imagesLoaded:true,
		pageDots: false
	});
	$('.diapo-bottom-text').mCustomScrollbar({
		theme: "dark-thin",
		scrollbarPosition: "outside",
		autoHideScrollbar: true
	});
});