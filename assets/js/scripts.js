// Navigation Scrolling
$(".clickynav").click(function(){
    var jump = "#" + $(this).attr("name");
    console.log(jump);
    if(jump == '#home'){
        $('html, body').animate({
            scrollTop: $(jump).offset().top - 200
        }, 600);
    } else{
        $('html, body').animate({
            scrollTop: $(jump).offset().top - 80
        }, 600);
    }
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

// Bootstrap Modal Focus Fix
$('#reserveModal').on('shown.bs.modal', function () {
  $('#reserveModal').focus()
})

// Copyright Year
var dt = new Date();
var copy = document.getElementById('copy');
copy.innerHTML = dt.getFullYear();