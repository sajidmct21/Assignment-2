const menuIcon = document.querySelector('.menu-icon');
 const div = document.querySelector('.sidebar')
menuIcon.addEventListener('click',()=>{
    div.classList.toggle('showData');
}
)

//    Initialize Swiper 

    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    //  Initialize Swiper 2

      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          575: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    
