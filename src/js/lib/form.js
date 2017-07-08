class Form {
  constructor(data) {
    this.data = Object.assign({}, Form.defaultData, data);

    this.username = this.data.username;
    this.email = this.data.email;
    this.city = this.data.city;
    this.cityValue = this.data.cityValue;
    this.country = this.data.country;
    this.countryValue = this.data.countryValue;
    this.fb = this.data.fb;
    this.vk = this.data.vk;
    this.tw = this.data.tw;
    this.ok = this.data.ok;
    this.catUrl = this.data.catUrl;
  }

  setInformation(name, arg) {
    this[name] = arg;
  }

  resetAll() {
    this.username = null;
    this.email = null;
    this.city = null;
    this.cityValue = null;
    this.country = null;
    this.countryValue = null;
    this.fb = null;
    this.vk = null;
    this.tw = null;
    this.ok = null;
    this.catUrl = null;
  }
}

Form.defaultData = {
  username: null,
  email: null,
  city: null,
  cityValue: null,
  country: null,
  countryValue: null,
  fb: null,
  vk: null,
  tw: null,
  ok: null,
  catUrl: null
};

var questionnaire = new Form();
