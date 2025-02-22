const { capitalizeTextFirstChar, createArray, random } = require("../lab1");

// suite

//problem 1

describe("capitalizeTextFirstChar function tests", () => {
  it("should return a string when given a string input", () => {
    const result = capitalizeTextFirstChar("mohamed ahmed");
    expect(typeof result).toBe("string");
  });
  it("should capitalize the first letter of each word", () => {
    const result = capitalizeTextFirstChar("mohamed ahmed");
    expect(result).toBe("Mohamed Ahmed");
  });
  it("should throw a TypeError when given a number", () => {
    expect(() => capitalizeTextFirstChar(122)).toThrowError(TypeError);
  });
});

//problem 2:

describe("createArray function tests", () => {
  it("should return an array", () => {
    const result = createArray(3);
    expect(Array.isArray(result)).toBe(true);
  });
  it("should return an array of length 2 and include 1 when passing 2", () => {
    const result = createArray(2);
    expect(result.length).toBe(2);
    expect(result.includes(1)).toBe(true);
  });
  it("should return an array of length 3 and not include 3 when passing 3", () => {
    const result = createArray(3);
    expect(result.length).toBe(3);
    expect(result.includes(3)).toBe(false);
  });
});

//problem 3:

describe('random function tests', ()=>{
  it('should return a number', ()=>{
    const result = random(2, 6);
    expect(typeof result).toBe("number");
  });
  it('should return a number between 5 and 7', ()=>{
    let num = random(5, 7);
    expect(num).toBeGreaterThanOrEqual(5);
    expect(num).toBeLessThanOrEqual(7)
  });
  it('should return NaN if only one parameter is passed', ()=>{
    const result = random(5);
    expect(result).toBeNaN();
  })
})

