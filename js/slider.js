
//JavaScript för en slider. Inkluderar auto-scroll och knappar för att scrolla tillbaka och framåt.

const slider = document.getElementsByClassName('slider')[0];
  const prevButton = document.getElementsByClassName('prev-button')[0];
  const nextButton = document.getElementsByClassName('next-button')[0];

  let scrollAmount = 0;
  let timerId;
  const scrollMax = slider.scrollWidth - slider.clientWidth;

  const imageWidth = slider.firstElementChild.clientWidth -1;

  function scrollSlider(direction) {
      if (direction === 'prev') {
          scrollAmount -= imageWidth;
          if (scrollAmount < 0) {
              scrollAmount = scrollMax;
          }
      } else if (direction === 'next') {
          scrollAmount += imageWidth;
          if (scrollAmount > scrollMax) {
              scrollAmount = 0; // Reset to 0 if at the end
          }
      }
  
      slider.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: 'smooth'
      });
  }

  function startSlider() {
    timerId = setInterval(() => {
      scrollSlider('next');
    }, 6000);
  }
  
  function stopSlider() {
    clearInterval(timerId);
  }
  
  prevButton.addEventListener('click', () => {
    stopSlider();
    scrollSlider('prev');
  });
  
  nextButton.addEventListener('click', () => {
    stopSlider();
    scrollSlider('next');
  });
  
  slider.addEventListener('mouseover', stopSlider);
  slider.addEventListener('mouseout', startSlider);
  
  startSlider();