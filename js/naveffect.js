//Hacker-effekten på nav-länkarna
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const navLinks = document.querySelectorAll(".navLink");

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
    }
      iterations += 1;
  }, 30);
  }
}