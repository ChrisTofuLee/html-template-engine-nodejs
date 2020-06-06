// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getRole() {
        return "Intern"
    }

    getSchool() {}
}


module.exports = Intern


// test("Can set school via constructor", () => {
//     const testValue = "UCLA";
//     const e = new Intern("Foo", 1, "test@test.com", testValue);
//     expect(e.school).toBe(testValue);
//   });
  
//   test("getRole() should return \"Intern\"", () => {
//     const testValue = "Intern";
//     const e = new Intern("Foo", 1, "test@test.com", "UCLA");
//     expect(e.getRole()).toBe(testValue);
//   });
  
//   test("Can get school via getSchool()", () => {
//     const testValue = "UCLA";
//     const e = new Intern("Foo", 1, "test@test.com", testValue);
//     expect(e.getSchool()).toBe(testValue);
//   });
  