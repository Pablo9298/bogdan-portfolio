$(function () {

  $(".header__link, .logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.header__burger').on('click', function () {
    $('.header__burger, .header__list, .header__social').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.header__link, .header__logo').on('click', function () {
    $('.header__burger, .header__list, .header__social').removeClass('active');
    $('body').removeClass('lock');
  });

  var headerTop = $('.header');
  var doc = $(document);

  function headerFixed() {
    var threshold = doc.scrollTop() > 150;

    if (threshold) {
      headerTop.addClass('scrolled');
    } else {
      headerTop.removeClass('scrolled');
    }
  }
  $(window).on('scroll', headerFixed);

  headerFixed();


});