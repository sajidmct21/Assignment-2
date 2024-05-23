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
      // loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 400,
        modifier: 0.8,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    //  Initialize Swiper 2

      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 0,
        // loop:true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: true,
        // },
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
    
