const expectedLife = {
  healthy: 90,
  average: 80,
  unhealthy: 70
};

export default class Age {
  constructor(age, lifestyle) {
    this.age = age;
    this.lifestyle = lifestyle;
  }

  getAge() {
    let mercury = this.age/.24;
    mercury = Number(mercury.toFixed(2));
    let venus = this.age/.62;
    venus = Number(venus.toFixed(2));
    let mars = this.age/1.88;
    mars = Number(mars.toFixed(2));
    let jupiter = this.age/11.86;
    jupiter = Number(jupiter.toFixed(2));
    return [mercury, venus, mars, jupiter];
  }

  lifeExpected() {
    let expected = expectedLife[this.lifestyle];
    let outcome = Math.abs(expected - this.age);
    let mercury = outcome/.24;
    let agediff = expected - this.age;
    mercury = Number(mercury.toFixed(2));
    let venus = outcome/.62;
    venus = Number(venus.toFixed(2));
    let mars = outcome/1.88;
    mars = Number(mars.toFixed(2));
    let jupiter = outcome/11.86;
    jupiter = Number(jupiter.toFixed(2));
    let outArray = [outcome, mercury, venus, mars, jupiter, agediff];
    return outArray;
  }
}