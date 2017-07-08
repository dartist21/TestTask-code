function step1() {
  rootElement.innerHTML = templates['step1']();

  let curStep = 1;
  pagination(curStep);

  let nameInput = rootElement.querySelector('.form__name');
  let emailInput = rootElement.querySelector('.form__email');

  let nameError = rootElement.querySelector('#name-error');
  let emailError = rootElement.querySelector('#email-error');

  if (questionnaire.username) {
    nameInput.value = questionnaire.username;
  }

  if (questionnaire.email) {
    emailInput.value = questionnaire.email;
  }

  nameInput.addEventListener('focusin', resetStateName);
  emailInput.addEventListener('focusin', resetStateEmail);

  nameInput.addEventListener('focusout', validateName);
  emailInput.addEventListener('focusout', validateEmail);

  function validateName(el) {
    let nameInputValue = el.target.value;

    if (nameInputValue.length >= 2) {
      resetStateName(el);
      questionnaire.setInformation('username', nameInputValue);
    } else {
      el.target.classList.add('form__input--not-valid');
      nameError.classList.remove('form__error--hidden');
    }
  }

  function validateEmail(el) {
    const EMAIL_RE = /.+@.+\..+/i;
    let emailInputValue = el.target.value;

    if (emailInputValue.length >=2 && EMAIL_RE.test(emailInputValue)) {
      resetStateEmail(el);
      questionnaire.setInformation('email', emailInputValue);

    } else if (emailError.classList.contains('form__error--hidden')) {
      el.target.classList.add('form__input--not-valid');
      emailError.classList.remove('form__error--hidden');
    }
  }

  function resetStateEmail(el) {
    emailError.classList.add('form__error--hidden');
    el.target.classList.remove('form__input--not-valid');
  }

  function resetStateName(el) {
    nameError.classList.add('form__error--hidden');
    el.target.classList.remove('form__input--not-valid');
  }

}
