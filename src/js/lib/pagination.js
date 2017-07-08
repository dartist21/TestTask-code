  function pagination(curStep) {
    let pagItems = document.querySelectorAll('.pagination-pg__item');
    let prev = document.querySelector('.pagination-btn__prev');
    let next = document.querySelector('.pagination-btn__next');
    let finish = document.querySelector('.pagination-btn__finish');

    let validationError = rootElement.querySelector('#validation-error');

    for (let i = 0; i < pagItems.length; i++) {
      pagItems[i].addEventListener('click', changePage);
    }

    if (prev) {
      prev.addEventListener('click', goPrev);
    }
    if (next) {
      next.addEventListener('click', goNext);
    }
    if (finish) {
      finish.addEventListener('click', goFinish);
    }


    switch (curStep) {
      case 1:
        prev.classList.add('button--not-active');
        for (let i = curStep; i < pagItems.length; i++) {
          pagItems[i].classList.add('button--not-active');
        }
        break;
      case 2:
        for (let i = curStep - 2; i >= 0; --i) {
          pagItems[i].classList.add('button--is-active');
        }
        for (let i = curStep; i < pagItems.length; i++) {
          pagItems[i].classList.add('button--not-active');
        }
        break;
      case 3:
        for (let i = curStep - 2; i >= 0; --i) {
          pagItems[i].classList.add('button--is-active');
        }
        for (let i = curStep; i < pagItems.length; i++) {
          pagItems[i].classList.add('button--not-active');
        }
        break;
      case 4:
        for (let i = curStep - 2; i >= 0; --i) {
          pagItems[i].classList.add('button--is-active');
        }
        for (let i = curStep; i < pagItems.length; i++) {
          pagItems[i].classList.add('button--not-active');
        }
        next.classList.add('button--display-none');
        finish.classList.remove('button--display-none');
        break;
      default:
        console.log('check pagination');
    }

    function changePage(e) {
      let pagItem = e.target;
      let pagItemNum = pagItem.dataset.value;
      page.redirect('/step' + pagItemNum);
    }

    function goPrev() {
      prevStep = --curStep;
      page.redirect('/step' + prevStep);
    }

    function goNext() {
      if (validate()) {
        nextStep = ++curStep;
        page.redirect('/step' + nextStep);
      } else {
        validationError.classList.remove('form__error--display-none');
      }
    }

    function goFinish() {
      if (questionnaire.catUrl) {
        page.redirect('/final');
      } else {
        validationError.classList.remove('form__error--display-none');
      }
    }

    function validate() {
      switch (curStep) {
        case 1:
          if (questionnaire.username && questionnaire.email) {
            return true;
          }
          break;
        case 2:
          if (questionnaire.country && questionnaire.city) {
            return true;
          }
          break;
        case 3:
          if (questionnaire.fb || questionnaire.vk || questionnaire.tw || questionnaire.ok) {
            return true;
          }
          break;
        default:
          console.log('check pagination');
      }
    }
  }
