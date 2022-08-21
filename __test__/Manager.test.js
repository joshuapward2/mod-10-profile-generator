const Manager = require('../lib/Manager');

test("testing officenumber input", () => {
    const numInput = new Manager("johnDoe", 14, "johnDoe@aol.com", 8675309)
    expect(numInput.getOfficeNumber()).toEqual(8675309)
});