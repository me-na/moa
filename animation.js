var $isAnimatedSecond = $('.s1 .is-img'),
 
/* this code is part of the onLeave callback */   
if( index == 1 && nextIndex == 2 ) {
    $isAnimatedSecond.addClass('animated fadeInUpBig'); 
    $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
    $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
    $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
}