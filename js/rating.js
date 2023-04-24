  
  //JavaScript för att lämna en recension
  const stars = document.getElementsByClassName('star');
  const starList = Array.from(stars);
  

for (let i = 0; i < starList.length; i++) {
  starList[i].addEventListener('click', () => {
    for (let h = 0; h < starList.length; h++) {
      starList[h].classList.remove('rated');
    }
    for (let j = 0; j <= i; j++) {
      starList[j].classList.add('rated');
    }
  });
}

    for (let i = 0; i < starList.length; i++) {
      starList[i].addEventListener('mouseover', () => {
        for (let j = 0; j <= i; j++) {
          starList[j].classList.add('filter');
          starList[j].style.opacity = 1;
        }
      });
    
      starList[i].addEventListener('mouseout', () => {
        for (let j = 0; j <= i; j++) {
          starList[j].classList.remove('filter');
          starList[j].style.opacity = 0.5;
        }
      });
    }  
  