describe("Testing L field", function() {
  it("checking PYPL", function() {
    expect(isLfieldPresent("http://finance.google.com/finance/info?client=ig&q=NSE:PYPL")).toBeTruthy();
  });
  it("checking EBAY", function() {
    expect(isLfieldPresent("http://finance.google.com/finance/info?client=ig&q=NSE:EBAY")).toBeTruthy();
  });
  it("checking PP", function() {
    expect(isLfieldPresent("http://finance.google.com/finance/info?client=ig&q=NSE:PP")).toBeTruthy();
  });
});