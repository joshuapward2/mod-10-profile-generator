const Intern = require('../lib/Intern');

test("testing school function", () => {
   const schoolInput = new Intern("johnDoe", 12, "johndoe@yahoo.com", "Duke-University")
    expect(schoolInput.getSchool()).toEqual("Duke-University")
});