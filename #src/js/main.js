
//swiper

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

//animations

const animItems = document.querySelectorAll('.anim_item');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 100;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_no_hide')){
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }


  setTimeout(() => {
    animOnScroll();
  }, 0);
}