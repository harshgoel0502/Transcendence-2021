
var $slider = $('.slideshow .slider'),
  maxItems = $('.item', $slider).length,
  infinite = false,
  dragging = true,
    verticalSwiping = true,
  tracking,
  rightTracking;

$sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

rightItems = $('.item', $sliderRight).toArray();
reverseItems = rightItems.reverse();
$('.slider', $sliderRight).html('');
for (i = 0; i < maxItems; i++) {
  $(reverseItems[i]).appendTo($('.slider', $sliderRight));
}

$slider.addClass('slideshow-left');
$('.slideshow-left').slick({
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  infinite: false,
    dragging: true,
  dots: true,
  speed: 1000,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {

   
  if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo',  -1);
    $('.slideshow-text').slick('slickGoTo', maxItems);
    $('.slideshow-text-two').slick('slickGoTo', maxItems);
    $('.slideshow-logo').slick('slickGoTo', maxItems);
    $('.slideshow-butt').slick('slickGoTo', maxItems);
  } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems);
    $('.slideshow-text').slick('slickGoTo', -1);
    $('.slideshow-text-two').slick('slickGoTo', -1);
    $('.slideshow-logo').slick('slickGoTo', -1);
    $('.slideshow-butt').slick('slickGoTo', -1);
  } else {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
    $('.slideshow-text').slick('slickGoTo', nextSlide);
    $('.slideshow-text-two').slick('slickGoTo', nextSlide);
    $('.slideshow-logo').slick('slickGoTo', nextSlide);
    $('.slideshow-butt').slick('slickGoTo', nextSlide);
  }
    console.log(nextSlide)
    
  if(nextSlide === 0)
      {
          infinite = false
      }
    else{
        infinite = true
    }
    
   if(nextSlide === (maxItems - 1))
       {
           verticalSwiping = false
       }
    else{
        verticalSwiping = true
    }
   
}).on("mousewheel", function(event) {
  event.preventDefault();
  if (event.deltaX > 0 || event.deltaY < 0) {
      if(verticalSwiping){
    $(this).slick('slickNext');
      }
  } else if (event.deltaX < 0 || event.deltaY > 0) {
      if(infinite){
    $(this).slick('slickPrev');}
  };
}).on('mousedown touchstart', function(){
  dragging = true;
  tracking = $('.slick-track', $slider).css('transform');
  tracking = parseInt(tracking.split(',')[3000]);
  rightTracking = $('.slideshow-right .slick-track').css('transform');
  rightTracking = parseInt(rightTracking.split(',')[3000]);
}).on('mousemove touchmove', function(){
  if (dragging) {
    newTracking = $('.slideshow-left .slick-track').css('transform');
    newTracking = parseInt(newTracking.split(',')[5]);
    diffTracking = newTracking - tracking;
    $('.slideshow-right .slick-track').css({'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')'});
  }
}).on('mouseleave touchend mouseup', function(){
  dragging = false;
});

$('.slideshow-right .slider').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: false,
  speed: 950,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  initialSlide: maxItems - 1
});
$('.slideshow-text').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: false,
  speed: 900,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});
$('.slideshow-text-two').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: false,
  speed: 900,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});
$('.slideshow-logo').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: false,
  speed: 900,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});
$('.slideshow-butt').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: false,
  speed: 900,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});