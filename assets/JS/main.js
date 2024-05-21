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

      var swiper = new Swiper(".mySwiper-2", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    
