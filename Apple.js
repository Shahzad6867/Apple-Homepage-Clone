const headerEL=document.querySelector('.header');
window.addEventListener('scroll',function () {
    if(window.scrollY>50){
        headerEL.classList.add('scrolled');
    }else{
        headerEL.classList.remove('scrolled');
    }
})

const container = document.querySelector('.apple-tv');
  function scrollLeft() {
    container.scrollBy({ left: -1000, behavior: 'smooth' });
  }

  function scrollRight() {
    container.scrollBy({ left: 1000, behavior: 'smooth' });
  }
