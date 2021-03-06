// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber
    }
  
    getOfficeNumber() {
        return this.officeNumber
  }
    getRole() {
      return "Manager";
    }
  }
  
  module.exports = Manager;

//   test("Can set office number via constructor argument", () => {
//     const testValue = 100;
//     const e = new Manager("Foo", 1, "test@test.com", testValue);
//     expect(e.officeNumber).toBe(testValue);
//   });
  
//   test('getRole() should return "Manager"', () => {
//     const testValue = "Manager";
//     const e = new Manager("Foo", 1, "test@test.com", 100);
//     expect(e.getRole()).toBe(testValue);
//   });
  
//   test("Can get office number via getOffice()", () => {
//     const testValue = 100;
//     const e = new Manager("Foo", 1, "test@test.com", testValue);
//     expect(e.getOfficeNumber()).toBe(testValue);
//   });
  
