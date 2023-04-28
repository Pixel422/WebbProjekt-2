const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"];
const navLinks = document.querySelectorAll(".navLink");

// Hacker-effekten på nav-länkarna
for (let i = 0; i < navLinks.length; i++) 
{
  navLinks[i].onmouseover = event => {

    let iterations = 0;
    
    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {

      if (index < iterations)
      {
        return event.target.dataset.value[index];
      }

      return letters[Math.floor(Math.random() * 26)]
    }).join("");
    

    if (iterations >= event.target.dataset.value.length) {
      clearInterval(interval);
      navLinks[i].style.color = "#FFF9E5";
    }
      iterations += 1;
  }, 30);
  }
}


//Konami-koden [UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A]
//Kopierat från https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html
//Med en tvist
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };
  
  // the 'official' Konami Code sequence
  var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  
  // a variable to remember the 'position' the user has reached so far.
  var konamiCodePosition = 0;
  
  // add keydown event listener
  document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];
  
    // compare the key with the required key
    if (key == requiredKey) {
  
      // move to the next key in the konami code sequence
      konamiCodePosition++;
  
      // if the last key is reached, activate cheats
      if (konamiCodePosition == konamiCode.length) {
        activateCheats();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });
  
  function activateCheats() {
    for (let i = 0; i < navLinks.length; i++) 
{
  navLinks[i].onmouseover = event => {

    let iterations = 0;
    
    const interval = setInterval(() => {

      navLinks[i].style.color = colors[Math.floor(Math.random() * colors.length)];

    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {

      if (index < iterations)
      {
        return event.target.dataset.value[index];
      }

      return letters[Math.floor(Math.random() * 26)]
    }).join("");
    

    if (iterations >= event.target.dataset.value.length) {
      clearInterval(interval);
      navLinks[i].style.color = "#FFF9E5";
    }
      iterations += 1;
  }, 30);
  }
}
  }


