

new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween:30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive break points
  breakpoints:{
    0: {
      slidesPreview: 1
    },
    768: {
      slidesPreview: 2
    },
    1024: {
      slidesPreview: 3
    }
  }

});



