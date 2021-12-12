// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         infinite: true,
//         speed: 500,
//         adaptiveHeight: true,
//         // autoplay: true,
//         // autoplaySpeed: 4000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow_left_ico.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow_left_ico.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
//   });

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
      function valideForms(form){
        $(form).validate({
          rules: {
            name: "required",
            phone:"required",
            email: {
              required: true,
              email: true
            }
          },
          messages: {
              name: "Please specify your name",
              phone: "Please enter your phone",
              email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
              }
          }
        });
      }

      validateForms('#consultation form');
      validateForms('#order form');
      validateForms('#consultation-form');
    });
    })(jQuery);

