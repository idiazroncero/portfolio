jQuery.fn.mousehold = function(timeout, f) {
	if (timeout && typeof timeout == 'function') {
		f = timeout;
		timeout = 100;
	}
	if (f && typeof f == 'function') {
		var timer = 0;
		var fireStep = 0;
		return this.each(function() {
			jQuery(this).mousedown(function() {
				fireStep = 1;
				var ctr = 0;
				var t = this;
				timer = setInterval(function() {
					ctr++;
					f.call(t, ctr);
					fireStep = 2;
				}, timeout);
			})

			clearMousehold = function() {
				clearInterval(timer);
				if (fireStep == 1) f.call(this, 1);
				fireStep = 0;
			}
			jQuery(this).mouseout(clearMousehold);
			jQuery(this).mouseup(clearMousehold);
		})
	}
}

$(function(){
	// Consige dinamicamente la altura de la diapo-top
	var h, diapos, timeline, timelineHtml;
	function getDiapos() {
		diapos = $('#diapos').flickity({
			cellSelector: '.diapo',
			//setGallerySize: false,
			dynamicGalleryHeight: true,
			imagesLoaded:true,
			pageDots: false,
			prevNextButtons: false,
		});
	}
	function getTimeline() {
		timeline = $('#timeline .gallery').flickity({
			pageDots: false,
			prevNextButtons: true,
			asNavFor: '#diapos',
  			contain: true,
		});
	}
	function setGalleryHeight(h) {
		$('#diapos').height(h);
	}

	timelineHtml = $('#timeline .gallery').html();

	$(window).on('load resize', function(){
		h1 = 80 + $('#options').height();
		h = $(window).height() - h1;
		$('.diapotop').height(h);
		$('#timeline').css('top', h);
	});

	setTimeout(function(){
		getDiapos();
		getTimeline();
		$('#loading').fadeOut();
	},1000)

	$('#select select').on('change', function(){
		$('#timeline').find('.gallery').remove()
		$('#timeline').prepend('<div class="gallery">' + timelineHtml + '</div>');
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

	// Controles de diapos
	$('.diapotop-controles .icon-down').mousehold(function(){
		var img = $(this).parent().siblings('img');
		var imgtop = parseInt(img.css('top'), 10);
		var diapo = $(this).parents('.diapotop');
		var height = diapo.height();
		var fullHeight = diapo[0].scrollHeight;
		if (height < fullHeight) {
			img.css({
				top : imgtop - 15
			})
		}
	});
	$('.diapotop-controles .icon-up').mousehold(function(){
		var img = $(this).parent().siblings('img');
		var imgtop = parseInt(img.css('top'), 10);
		img.css({
			top : imgtop + 15
		})
	})
	$('#options .handler').on('click', function(){
		var h = $(this).parent().outerHeight();
		$(this).parent().css({
			top: -h
		})
	})
});