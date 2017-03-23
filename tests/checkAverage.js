// checkAverage

describe("average", function() {
  it("should return a number", function() {
    expect(typeof average(1, 12)).toBe("number");
    console.log("expect typeof average(1, 12) to be 'number'");
  });
  console.log("expect typeof average(1, 12) to be 'number' position 2");
  it("should return the average of two numbers", function() {
    expect(average(2, 4)).toBe(3);
    console.log("expect average(2,4) to be 3");
  });
  console.log("expect average(2,4) to be 3 position 2");
});

// checkAge
console.log('-------- checkAge tests --------')

describe("checkAge", function() {
  it("should return a string", function() {
    expect(typeof(checkAge("Dan", "24"))).toBe("string");
    console.log("input: typeof(checkAge('Dan', '24')), expected output: 'string'")
  });
  it("should welcome someone over 21", function() {
    expect(checkAge("Dan", "24")).toBe("Welcome, Dan!");
    console.log("checkAge('Dan', '24'), expected output: 'Welcome, Dan!'")
  });
  it("should welcome a 21 year old", function() {
    expect(checkAge("Toni", "21")).toBe("Welcome, Toni!");
    console.log(JSON.stringify(checkAge("Toni", "21")).toBe("Welcome, Toni!"));
  });
  it("should bounce someone under 21", function() {
    expect(checkAge("Rad", "4")).toBe("Go home, Rad!");
    console.log(JSON.stringify(expect(checkAge("Rad", "4")).toBe("Go home, Rad!");));
  });
});
