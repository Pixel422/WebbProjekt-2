
//Knappen för att scrolla ner
const scrollContainer = document.querySelector('.scrollContainer');
  const scroller = document.querySelector('.scroller');
  
  scroller.addEventListener('click', () => {
    scrollContainer.scrollTo({
      top: scrollContainer.scrollHeight,
      behavior: 'smooth'});

  });
  