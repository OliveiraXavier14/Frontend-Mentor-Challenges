const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    const body = accordion.nextElementSibling;
    body.classList.toggle('active');
    
    const icon = accordion.querySelector('.icon')

    if (body.classList.contains('active')){
      icon.src = 'assets/images/icon-minus.svg'
    }else {
      icon.src = 'assets/images/icon-plus.svg'
    }
  });
});
