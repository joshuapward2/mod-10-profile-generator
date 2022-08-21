const Employee = require("../lib/Employee");

test("testing get email function", ()=> {
    const johnDoe = new Employee("johnDoe", 11, "johnDoe@hotmail.com")
    expect(johnDoe.getEmail()).toEqual("johnDoe@hotmail.com")
})