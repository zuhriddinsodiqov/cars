const swiper = new Swiper('.swiper', {
  
    loop: true,
    autoplay:{
        delay:1000,
        disableOnInteraction:false,
    },
    pagination: {
        clickable:true,
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });
  const bars = document.querySelector('.fa-bars'),
        navigation = document.querySelector('.navigation');

        bars.addEventListener('click' , () =>{
          if(navigation.classList.contains('long')){
            navigation.classList.add('short');
            navigation.classList.remove('long');
          }
          else{
            navigation.classList.add('long')
            navigation.classList.remove('short')
          }
        })