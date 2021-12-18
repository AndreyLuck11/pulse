const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        
        1024: {
            nav: false,
            gutter: 30,
          },

          600: {
            nav: true,
           // touch:true,
          },
  
          310: {
              nav: true,
             // touch:true,
            },
        
    }
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });


  $(function(){new WOW().init();});
  (function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
          // .find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
      function togglesSlide(item){
        $(item).each(function(i){
          $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        })
      }
      
      togglesSlide('.catalog-item__back');
      togglesSlide('.catalog-item__link');

      //modal
      $('[data-modal=consultation]').on('click', function(){
          $('.overlay, #consultation').fadeIn('slow');
      });

      $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
      });

      $('.button_mini').each(function(i){
        $(this).on('click', function(){
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        })
      });
      
      //validation
      function validateForms(form){
        $(form).validate({
          rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
            }
        }
          
        });
      }

      validateForms('#consultation-form');
      validateForms('#consultation form');
      validateForms('#order form');

      $('input[name="phone"]').mask("+7 (999) 999-99-99");

      $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
    });

    $(window).scroll(function(){
      if ($(this).scrollTop() > 1600){
          $('.pageup').fadeIn();
      } else {
          $('.pageup').fadeOut();
      }
      });
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
 
    });

    })(jQuery);



