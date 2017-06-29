class Form {
  constructor(data) {
    this.data = Object.assign({}, Form.defaultData, data);

    this.username = this.data.username;
    this.email = this.data.email;
    this.city = this.data.city;
    this.country = this.data.country;
    this.fb = this.data.fb;
    this.vk = this.data.vk;
    this.tw = this.data.tw;
    this.ok = this.data.ok;
    this.catUrl = this.data.catUrl;
  }

  setInformation (name, arg) {
      this[name] = arg;
  }
}

Form.defaultData = {
  username: null,
  email: null,
  city: 'Kyiv',
  country: 'Ukraine',
  fb: null,
  vk: null,
  tw: null,
  ok: null,
  catUrl: null
};

let questionnaire = new Form();
