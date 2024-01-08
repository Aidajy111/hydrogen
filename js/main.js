
$('.slider-project').slick({
    dots: false,
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

// Высота дисплея пользователя
let heigthDisplay = window.screen.height;
let headerScroll = document.querySelector('.header-scroll');
let gradientHeaderScroll = document.querySelector('.header-scroll-gradient');
let topButton = document.querySelector('.top-btn');

window.addEventListener('scroll', (event) => {
    if(window.scrollY > heigthDisplay) {
        headerScroll.classList.add('active');
        gradientHeaderScroll.classList.add('active');
        topButton.classList.add('active')
    }else {
        headerScroll.classList.remove('active');
        gradientHeaderScroll.classList.remove('active');
        topButton.classList.remove('active');
    }
})

topButton.addEventListener('click', (event)=> {
    window.scrollTo(0, 0)
})

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
    let options = {
    threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    
    for (let elm of elements) {
        observer.observe(elm);
    }
















