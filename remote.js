document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#a5d65f';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#c5e06f';
    });
  });
  
  
  
  
  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,  // Show 3 images per slide
    spaceBetween: 20, 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
  
  
  