(function($){
  "use strict";

  // Slide Carousel
  $(document).ready(function() {
    $(".owl-carousel").each(function(index, el) {
      var config = $(this).data();
      config.navText = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
      config.smartSpeed="800";
      
      if($(this).hasClass('owl-style2')){
        config.animateOut="fadeOut";
        config.animateIn="fadeIn";    
      }
      if($(this).hasClass('dotsData')){
        config.dotsData="true";
      }
      $(this).owlCarousel(config);
    });
  });

  // ===== Scroll to Top ==== 
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      $('#return-to-top').addClass('td-scroll-up-visible');
    } else {
      $('#return-to-top').removeClass('td-scroll-up-visible');
    }
  });
  $('#return-to-top').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 'slow');
  });

  /*  [ Sticky Menu ] */
  // $('.fixed-header').sticky({ topSpacing: 0 });

  /*  Header */
  if ($('.header-search').length) {
    $('.search-icon').on('click', function(e) {
      $(this).parent().find('search-form').fadeToggle();
      if ($(this).find('i').hasClass('fa-search')) {
        $(this).find('i').removeClass('fa-search').addClass('fa-close');
      }else{
        $(this).find('i').removeClass('fa-close').addClass('fa-search');
      }
      return false;
    });
    $('body').on('click', function(e){
      var $searchform = $('.search-form');
      if (! ($searchform.has(e.target).length || $(e.target).is('.search-form input'))) {       
        $('.search-icon').find('i').removeClass('fa-close').addClass('fa-search');
        $searchform.fadeOut('fast','swing');
      }
    });
  }

})(jQuery); // End of use strict