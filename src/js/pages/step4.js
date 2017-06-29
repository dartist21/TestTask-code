function step4() {
  rootElement.innerHTML = templates['step4']();

  let curStep = 4;
  pagination(curStep);

  let animalImages = rootElement.querySelectorAll('.animal');
  let animalError = rootElement.querySelector('#animal-error');

  for (let i = 0; i < animalImages.length; i++) {
    animalImages[i].addEventListener('click', checkAnimal);
  }

  function checkAnimal(el) {
    animalError.classList.add('display-none');

    for (let i = 0; i < animalImages.length; i++) {
      animalImages[i].style.outline = '';
    }

    el.target.style.outline = '3px solid #ff9800';

    if (el.target.dataset.animal === 'dog') {
      animalError.classList.remove('display-none');
    } else {
      questionnaire.setInformation('catUrl', el.target.currentSrc);
    }
  }


}
