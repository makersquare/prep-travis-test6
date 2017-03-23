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