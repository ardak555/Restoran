
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    centerPadding: '20px'
  });

  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });

  function yonlendir(){
    window.location.href ="./post.html"
  }
  
  function ynldr(){
    window.location.href="#menu"
  }