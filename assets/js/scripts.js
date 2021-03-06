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
/*
    origin can not be from the right, it extends the width of the navbar
*/
window.sr = ScrollReveal();
sr.reveal('#inventory', {
    origin: 'left',
    distance: '20%'
});
sr.reveal('#about', {
    origin: 'left',
    distance: '20%'
});
sr.reveal('#reviews', {
    origin: 'bottom',
    distance: '20%'
});

// Bootstrap Modal Focus Fix
$('#reserveModal').on('shown.bs.modal', function () {
  $('#reserveModal').focus()
})

// Bootstrap Navigation Collapse Fix
$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
});

// Copyright Year
var dt = new Date();
var copy = document.getElementById('copy');
copy.innerHTML = dt.getFullYear();