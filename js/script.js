//Knappen för att scrolla ner
const scrollContainer = document.querySelector('.scrollContainer');
  const scroller = document.querySelector('.scroller');
  
  scroller.addEventListener('click', () => {
    scrollContainer.scrollTo({
      top: scrollContainer.scrollHeight,
      behavior: 'smooth'});

  });

  //Betygsättning
  const stars = document.getElementsByClassName('star');
  const starList = Array.from(stars);
  
  for (let i = 0; i < starList.length; i++) {
    starList[i].addEventListener('mouseover', () => {
      for (let j = 0; j <= i; j++) {
        starList[j].classList.add('red');
      }
    });
  
    starList[i].addEventListener('mouseout', () => {
      for (let j = 0; j <= i; j++) {
        starList[j].classList.remove('red');
      }
    });
  }
  