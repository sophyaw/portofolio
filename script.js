const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 200;

    if(top >= offset){
      section.classList.add('show');
    }
  })
})