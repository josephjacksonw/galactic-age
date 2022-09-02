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
});