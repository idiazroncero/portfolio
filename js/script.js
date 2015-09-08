$(function(){
	// Consige dinamicamente la altura de la diapo-top
	var h, diapos, timeline, timelineHtml;
	function getDiapos() {
		diapos = $('#diapos').flickity({
			cellSelector: '.diapo',
			// setGallerySize: false,
			imagesLoaded:true,
			pageDots: false,
			prevNextButtons: false,

		});
	}
	function getTimeline() {
		timeline = $('#timeline .gallery').flickity({
			// cellSelector: 'li',
			// setGallerySize: false,
			pageDots: false,
			prevNextButtons: true,
			asNavFor: '#diapos',
  			contain: true,
		});
	}
	timelineHtml = $('#timeline').html();

	$(window).on('load resize', function(){
		h = $(window).height() - 80;
		$('.diapo-top').height(h);
		$('#timeline').css('top', h);
	});

	setTimeout(function(){
		getDiapos();
		getTimeline();
		$('#loading').fadeOut();
	},1000)

	$('#select select').on('change', function(){
		$('#timeline .gallery').replaceWith(timelineHtml);
		getTimeline();
		switch ($(this).val()) {
			case "drupal":
				var cells = $('.timeline-item:not(.drupal)').each(function(){
					timeline.flickity('remove', $(this));
				})
				break;
			case "wordpress":
				var cells = $('.timeline-item:not(.wordpress)').each(function(){
					timeline.flickity('remove', $(this));
				})
				break;
			case "shopify":
				var cells = $('.timeline-item:not(.shopify)').each(function(){
					timeline.flickity('remove', $(this));
				})
				break;
		}
	})
});