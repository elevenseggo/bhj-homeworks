let rotators = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

rotators[currentIndex].classList.add('rotator__case_active');

const interval = setInterval(() => {
  rotators[currentIndex].classList.remove('rotator__case_active');
  
  currentIndex = (currentIndex + 1) % rotators.length;
  
  rotators[currentIndex].classList.add('rotator__case_active');
}, 1000);