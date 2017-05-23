// Navigation Scrolling
$(".clickynav").click(function(){
    var jump = "#" + $(this).attr("name");
    $('html, body').animate({
        scrollTop: $(jump).offset().top - 80
    }, 600);
});

// Scroll Reveal Animations
window.sr = ScrollReveal();
sr.reveal('.catLogo', {
    scale: '0.4',
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});
sr.reveal('#about', {
    origin: 'left',
    distance: '20%'
});
sr.reveal('#inventory', {
    origin: 'right',
    distance: '20%'
});
sr.reveal('#contact', {
    origin: 'bottom',
    distance: '20%'
});

