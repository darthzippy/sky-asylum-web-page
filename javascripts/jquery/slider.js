window.onload = function () {
	
    var container = $('div.thumbnails');
    var ul = $('ul', container);
    
    var itemsWidth = ul.innerWidth() - container.outerWidth();
    
    $('.slider', container).slider({
        minValue: 0,
        maxValue: itemsWidth,
        handle: '.handle',
        stop: function (event, ui) {
            ul.animate({'left' : ui.value * -1}, 500);
        },
        slide: function (event, ui) {
            ul.css('left', ui.value * -1);
        }
    });
};
