$(document).ready(function () {
   $('.reviews__slider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll:1,
      speed: 1000,
      easing: 'ease-in',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: true,
      swipe: true,
      touchThreshold: 5,
      responsive: [
       {
         breakpoint: 1364,
         settings: {
            slidesToShow: 2,  
         }
       },
      {
         breakpoint: 916,
         settings: {
            slidesToShow: 1,  
         }
       },
      {
         breakpoint: 564,
         settings: {
            slidesToShow: 1.04,
            arrows:false,
         }
       },
       {
         breakpoint: 444,
         settings: {
            slidesToShow: 1,
            arrows:false,
         }
       }                     
     ]        
   });
});

$(document).ready(function () {
   $('.slides-active').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll:1,
      speed: 1000,
      easing: 'ease-in',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: true,
      swipe: true,
      touchThreshold: 5,
   });
      $('.webinar__slides').slick({
         arrows: false,
         dots: true,
         adaptiveHeight: true,
         speed: 1000,
         easing: 'ease-in',
         infinite: true,
         autoplay: false,
         autoplaySpeed: 2000,
         draggable: true,
         swipe: true,
         touchThreshold: 5,
         responsive: [
          {
            breakpoint: 5024,
            settings: "unslick"
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '15px',
            }
          }
        ]        
      });   
      $('.course__slides').slick({

         responsive: [
          {
            breakpoint: 5024,
            settings: "unslick"
          },
          {
            breakpoint: 1008,
            settings: {
               arrows: false,
               dots: true,
               adaptiveHeight: true,
               speed: 1000,
               easing: 'ease-in',
               infinite: true,
               autoplay: false,
               autoplaySpeed: 2000,
               draggable: true,
               swipe: true,
               touchThreshold: 10,               
            }
          }
        ]        
      });        
});

$(document).ready(function () {
      $('.main__image-more').mouseenter(function (event) {
         $('.main__image-list').slideDown();
          $('.main__image-info').addClass('active');
      });
      $('.main__image-info').mouseleave(function (event) {
         $('.main__image-list').slideUp();
          $('.main__image-info').removeClass('active');
      });
      $('.button').click(function (event) {
         $('.popup').addClass('open');
         $('body').addClass('lock');
      });
      $('.popup span').click(function (event) {
         $('.popup').removeClass('open');
         $('body').removeClass('lock');
      });      
});

  


function send(event, php){
console.log("Отправка запроса");
event.preventDefault ? event.preventDefault() : event.returnValue = false;
var req = new XMLHttpRequest();
req.open('POST', php, true);
req.onload = function() {
  if (req.status >= 200 && req.status < 400) {
    json = JSON.parse(this.response); // Ебанный internet explorer 11
      console.log(json);
        
      // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
      if (json.result == "success") {
        // Если сообщение отправлено
        $('.popup').removeClass('open');
      } else {
        // Если произошла ошибка
        alert("Ошибка. Сообщение не отправлено");
      }
    // Если не удалось связаться с php файлом
    } else {alert("Ошибка сервера. Номер: "+req.status);}}; 

// Если не удалось отправить запрос. Стоит блок на хостинге
req.onerror = function() {alert("Ошибка отправки запроса"); 
  
};
req.send(new FormData(event.target));
}


$(document).scroll(function () {
    s_top = $(window).scrollTop() + $(window).height() + 50;
    yes = $(".author__list").offset().top;
    if(s_top > yes){
      $(".author__link:first-child").addClass('arrow1');
      $(".author__link:nth-child(2)").addClass('arrow2');
      $(".author__link:nth-child(3)").addClass('arrow3');
      $(".author__link:nth-child(4)").addClass('arrow4');
      $(".author__link:nth-child(5)").addClass('arrow5');
    }
});