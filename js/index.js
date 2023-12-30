$(document).ready(function() {
    var scrollDiv = $('.abt-content');

    if ($(window).scrollTop() > 100) {
        scrollDiv.show();
    } else {
        scrollDiv.hide();
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            scrollDiv.stop(true, true).fadeIn(2000); 
        } else {
            scrollDiv.stop(true, true).fadeOut(2000); 
        }
    });

    scrollDiv.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500); 
        return false;
    });
});


