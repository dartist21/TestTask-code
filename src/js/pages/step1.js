function step1() {
  rootElement.innerHTML = templates['step1']();

  let curStep = 1;
  pagination(curStep);

  let nameInput = rootElement.querySelector('input[name="name"]');
  let emailInput = rootElement.querySelector('input[name="email"]');

  let nameError = rootElement.querySelector('#name-error')
  let emailError = rootElement.querySelector('#email-error')

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
      el.target.parentNode.classList.add('not-valid-input');
      nameError.classList.remove('display-none');
    }
  }

  function validateEmail(el) {
    const EMAIL_RE = /.+@.+\..+/i;
    let emailInputValue = el.target.value;

    if (emailInputValue.length >=2 && EMAIL_RE.test(emailInputValue)) {
      resetStateEmail(el);
      questionnaire.setInformation('email', emailInputValue);

    } else if (emailError.classList.contains('display-none')) {
      el.target.parentNode.classList.add('not-valid-input');
      emailError.classList.remove('display-none');
    }
  }

  function resetStateEmail(el) {
    emailError.classList.add('display-none');
    el.target.parentNode.classList.remove('not-valid-input');
  }

  function resetStateName(el) {
    nameError.classList.add('display-none');
    el.target.parentNode.classList.remove('not-valid-input');
  }
}
