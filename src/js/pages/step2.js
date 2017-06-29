function step2() {
  rootElement.innerHTML = templates['step2']();

  let curStep = 2;
  pagination(curStep);

  const cityData  = fetch('/js/json/cities.json');
  cityData
  .then(response => {
    return response.json();
   })
  .then(data => {
    // console.log(data);

  })
  .catch(error => {
    console.log(error.message);
  });

  const countryData  = fetch('/js/json/countries.json');
  countryData
  .then(response => {
    return response.json();
   })
  .then(data => {
    // console.log(data);

  })
  .catch(error => {
    console.log(error.message);
  });






}
