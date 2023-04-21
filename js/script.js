//Knappen för att scrolla ner
const scrollContainer = document.querySelector('.scrollContainer');
  const scroller = document.querySelector('.scroller');
  
  scroller.addEventListener('click', () => {
    scrollContainer.scrollTo({
      top: scrollContainer.scrollHeight,
      behavior: 'smooth'});

  });

  //Betygsättning
  const stars = document.querySelectorAll('.star');

stars.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    for (let i = 0; i < index; i++) {
      stars[i].style.filter = 'invert(76%) sepia(23%) saturate(2144%) hue-rotate(0deg) brightness(105%) contrast(105%)';
    }
  });

  star.addEventListener('mouseout', () => {
    for (let i = 0; i < index; i++) {
      stars[i].style.filter = '';
    }
  });
});