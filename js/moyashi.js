$(".moyappi_img").on("click", function() {
    $(".popup")
        .addClass("show")
        .fadeIn();
    // return false;
    });

    $("#close").on("click", function() {
    $(".popup").fadeOut();
    // return false;
    });

    jQuery(function ($) {
        var fadeIn = $('.fade-in');
        $(window).scroll(function () {
          $(fadeIn).each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop(); 
            var windowHeight = $(window).height();
            if (scroll > offset - windowHeight + 150) {
              $(this).addClass("scroll-in");
            }
          });
        });
      });