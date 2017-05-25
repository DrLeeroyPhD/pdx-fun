// Navigation Scrolling
$(".clickynav").click(function(){
    var jump = "#" + $(this).attr("name");
    $('html, body').animate({
        scrollTop: $(jump).offset().top - 80
    }, 600);
});

// Scroll Reveal Animations
window.sr = ScrollReveal();
sr.reveal('#inventory', {
    origin: 'left',
    distance: '20%'
});
sr.reveal('#about', {
    origin: 'right',
    distance: '20%'
});
sr.reveal('#contact', {
    origin: 'bottom',
    distance: '20%'
});

