$(document).ready(function() {
    $('#navigation li').hover(function() {
        $('ul', this).stop().slideDown(100);
    }, function() {
        $('ul', this).stop().slideUp(100);
    });
});