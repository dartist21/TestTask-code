function step2() {
  rootElement.innerHTML = templates['step2']();

  let curStep = 2;
  pagination(curStep);

  let countryInput = rootElement.querySelector('.form__country');
  let cityInput = rootElement.querySelector('.form__city');

  countryInput.addEventListener('focusout', validateCountry);
  cityInput.addEventListener('focusout', validateCity);

  countryInput.addEventListener('input', renderCityInput);

  let cityObj = '';

  const countryData  = fetch('/js/json/countries.json');
  countryData
    .then(response => {
      return response.json();
    })
    .then(data => {
      for(let key in data) {
        let countryOption = document.createElement('option');
        countryOption.innerHTML = data[key];
        countryOption.value = key;
        countryInput.appendChild(countryOption);
      }
    })
    .then(setSavedCountry => {
      if (questionnaire.countryValue) {
        countryInput.value = questionnaire.countryValue;
      }
    })
    .catch(error => {
      console.log(error.message);
    });

  const cityData  = fetch('/js/json/cities.json');
  cityData
    .then(response => {
      return response.json();
    })
    .then(data => {
      cityObj = data;
      if (questionnaire.cityValue) {
        cityInput.classList.remove('form__input--not-active');

        for(let key in data) {
          let cityOption = document.createElement('option');
          cityOption.innerHTML = data[key].name;
          cityOption.value = key;
          cityInput.appendChild(cityOption);
        }

        cityInput.value = questionnaire.cityValue;
      }
    })
    .catch(error => {
      console.log(error.message);
    });

  function renderCityInput(el) {
    let CountryOptionValue = el.target.value;

    while (cityInput.length > 1) {
      cityInput.removeChild(cityInput.lastChild);
    }
    cityInput.classList.remove('form__input--not-active');

    for (let key in cityObj) {
      if (+cityObj[key].country === +CountryOptionValue) {
        let cityOption = document.createElement('option');
        cityOption.innerHTML = cityObj[key].name;
        cityOption.value = key;
        cityInput.appendChild(cityOption);
      }
    }
  }

  function validateCountry(el) {
    let countryInputText = el.target.options[el.target.selectedIndex].text;
    let countryInputValue = el.target.value;
    questionnaire.setInformation('country', countryInputText);
    questionnaire.setInformation('countryValue', countryInputValue);
  }

  function validateCity(el) {
    let cityInputText = el.target.options[el.target.selectedIndex].text;
    let cityInputValue = el.target.value;
    questionnaire.setInformation('city', cityInputText);
    questionnaire.setInformation('cityValue', cityInputValue);
  }

}
