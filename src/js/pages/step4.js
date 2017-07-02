function step4() {
  rootElement.innerHTML = templates['step4']();

  let curStep = 4;
  pagination(curStep);

  let animalImages = rootElement.querySelectorAll('.animal-img__item');
  let animalError = rootElement.querySelector('#animal-error');

  for (let i = 0; i < animalImages.length; i++) {
    animalImages[i].addEventListener('click', checkAnimal);
  }

  function checkAnimal(el) {
    animalError.classList.add('form__error--hidden');

    for (let i = 0; i < animalImages.length; i++) {
      animalImages[i].classList.remove('animal-img__item--is-choosed');
    }

    el.target.classList.add('animal-img__item--is-choosed');

    if (el.target.dataset.animal === 'dog') {
      animalError.classList.remove('form__error--hidden');
    } else {
      questionnaire.setInformation('catUrl', el.target.currentSrc);
    }
  }


}
