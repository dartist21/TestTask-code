function final() {
  rootElement.innerHTML = templates['final']();

  let resetBtn = rootElement.querySelector('.pagination-btn__reset');
  resetBtn.addEventListener('click', resetForm);

  nameEl =      rootElement.querySelector('.profile-card__name');
  emailEl =     rootElement.querySelector('.profile-card__email');
  locationEl =  rootElement.querySelector('.profile-card__location');
  fbEl =        rootElement.querySelector('.profile-card__fb');
  vkEl =        rootElement.querySelector('.profile-card__vk');
  twEl =        rootElement.querySelector('.profile-card__tw');
  okEl =        rootElement.querySelector('.profile-card__ok');
  catEl =       rootElement.querySelector('.profile-card__image');

  nameEl.innerHTML = questionnaire.username;
  emailEl.innerHTML = questionnaire.email;
  locationEl.innerHTML = questionnaire.country + ' , ' + questionnaire.city;

  if (fbEl) {
    fbEl.innerHTML = questionnaire.fb;
  }
  if (vkEl) {
    vkEl.innerHTML = questionnaire.vk;
  }
  if (twEl) {
    twEl.innerHTML = questionnaire.tw;
  }
  if (okEl) {
    okEl.innerHTML = questionnaire.ok;
  }

  catEl.src = questionnaire.catUrl;

  function resetForm() {
    questionnaire.resetAll();
    page.redirect('/step1');
  }

}
