// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee")

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {

    // const gitHubUser = this.GitHubUser
    // const githubURL
    // const gitHubUrl = `https://github.com/${this.username}`
    // return gitHubUrl

    // axios.get(url).then(function(this.username) {
    //     const queryUrl = `https://api.github.com/users/${username}`;  

    //     axios.get(queryUrl).then(getRepoList).then(saveDataToFile)

    // })
    return this.github
}
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;

// const Engineer = require("../lib/Engineer");

// test("Can set GitHUb account via constructor", () => {
//   const testValue = "GitHubUser";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   expect(e.github).toBe(testValue);
// });

// test("getRole() should return \"Engineer\"", () => {
//   const testValue = "Engineer";
//   const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
//   expect(e.getRole()).toBe(testValue);
// });

// test("Can get GitHub username via getGithub()", () => {
//   const testValue = "GitHubUser";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   expect(e.getGithub()).toBe(testValue);
// });
