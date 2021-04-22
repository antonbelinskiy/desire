function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

    var swiper = new Swiper('.slider', {
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: '.slider__pages',
        clickable: true,
      },
    });
    var swiper = new Swiper('.gallery', {
      effect: 'fade',
      speed: 2000,
      pagination: {
        el: '.gallery__pages',
        clickable: true,
      },
    });