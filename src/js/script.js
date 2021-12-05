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
            touch:true,
          },
  
          310: {
              nav: true,
              touch:true,
            },
        
    }
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });