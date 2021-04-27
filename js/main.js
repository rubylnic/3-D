const picker = datepicker('#date', {
  minDate: new Date(),
  customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value
  }
})

'use strict';
(function() {
    let tel = document.querySelector('#tel');
    if (tel) {
        var phoneMask = IMask(
            document.getElementById('tel'), {
                mask: '+{7}(000)000-00-00'
            });
    }
})()

 'use strict';
 (function() {
   var swiper = new Swiper('.swiper-container', {
     slidesPerView: 'auto',
     centeredSlides: true,
     spaceBetween: 30,
     loop: true,
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
     navigation: {
       nextEl: '.main-slider__button-next',
       prevEl: 'main-slider__button-prev',
     },
   });

   var bigSlider = new Swiper('.big-slider', {
     loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
   });
 })();

var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function(e) {
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active");
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    };
  });
}
