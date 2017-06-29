function final() {
  rootElement.innerHTML = templates['final']();

  nameEl =      rootElement.querySelector('.card-name');
  emailEl =     rootElement.querySelector('.card-email');
  locationEl =  rootElement.querySelector('.card-location');
  fbEl =        rootElement.querySelector('.card-fb');
  vkEl =        rootElement.querySelector('.card-vk');
  twEl =        rootElement.querySelector('.card-tw');
  okEl =        rootElement.querySelector('.card-ok');
  catEl =       rootElement.querySelector('.card-img');


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
}
