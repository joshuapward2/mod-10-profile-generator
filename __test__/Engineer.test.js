const Engineer = require('../lib/Engineer');

test("testing github entry", ()=> {
    const githubEntry = new Engineer("johnDoe", 11, "joshua.p.ward2@gmail.com", "https://github.com/joshuapward2")
    expect(githubEntry.getGithub()).toEqual("https://github.com/joshuapward2")
});