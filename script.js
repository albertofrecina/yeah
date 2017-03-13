$(window).scroll() {
    if($(document).scrollTop() > 50){
        // dynamic CSS class 'nav'
        $('nav').addClass('shrink');
        }else{
            // class CSS remove from 'nav'
            $('nav').removeClass('shrink');
        }
}

function animationhover(element, animation) {
    element = $(element);
    element.hover(
        function() {
            elemet.addClass('animated '+animation)
        },
        function(){
            window.setTimeout('animated '+animation);
            }, 1000);
        }
    );
}

$(document).ready(function(){
    $('.cta').each(function()){
        animationHover(this, 'pulse');
    $('.nav-anim').each(function() {
        animationHover(this, 'fadeIn');
    })
    $('.skill').each(function() {
        animationHover(this, 'tada');
    })
})