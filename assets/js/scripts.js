// Navigation Scrolling
$(".clickynav").click(function(){
    var jump = "#" + $(this).attr("name");
    $('html, body').animate({
        scrollTop: $(jump).offset().top - 80
    }, 600);
});