import Age from './../src/age.js';

describe('Age', () => {

    test('should correctly create an age object with age and lifestyle', () => {
      let input = new Age(30, "average")
      expect(input.age).toEqual(30);
      expect(input.lifestyle).toEqual("average")
    })

    test("should return the user's age in respect to different planet's years", () => {
      let input = new Age(30, "average")
      expect(input.getAge()).toEqual([125.00, 48.39, 15.96, 2.53])
    })

    test("should return the amount of years left for their life expectancy", () => {
      let input = new Age(30, "average")
      expect(input.lifeExpected()).toEqual([50, 208.33, 80.65, 26.6, 4.22])
    })

    test("should return the amount of years over the life expectancy if older that in", () => {
      let input = new Age(90, "average")
      expect(input.lifeExpected()).toEqual([10, 41.67, 16.13, 5.32, 0.84])
    })

    test("should return the life expectancy for all other planets", () => {
      let input = new Age(30, "average")
      expect(input.lifeExpected()).toEqual([50, 208.33, 80.65, 26.6, 4.22])
    })
});