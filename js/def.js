$(function() {
    $('#snowmaiden').click(function () {
	var sm = $('#snowmaiden');
	var gf = $('#grandfatherfrost');
	if (sm.hasClass('snowmaiden-hover')) {
	    sm.removeClass('snowmaiden-hover');
	} else {
	    sm.addClass('snowmaiden-hover');
	}
	if (gf.hasClass('grandfatherfrost-hover')) {
	    gf.removeClass('grandfatherfrost-hover');
	} 
    });

    $('#grandfatherfrost').click(function () {
	var sm = $('#snowmaiden');
	var gf = $('#grandfatherfrost');
	if (sm.hasClass('snowmaiden-hover')) {
	    sm.removeClass('snowmaiden-hover');
	}
	if (gf.hasClass('grandfatherfrost-hover')) {
	    gf.removeClass('grandfatherfrost-hover');
	} else {
	    gf.addClass('grandfatherfrost-hover');
	} 
    });
});
