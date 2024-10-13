export default class EmployeeHandle {
  constructor() {
    this.employees = [];
  }

  addEmployee(newEmployee) {
    this.employees.push(newEmployee);
  }

  getEmployees(tknv) {
    return this.employees.filter((employee) => employee.tknv === tknv);
  }

  deleteEmployee(tknv) {
    this.employees.splice(
      this.employees.findIndex((employee) => employee.tknv === tknv),
      1
    );
  }

  updateEmployee(newEmployee) {
    const index = this.employees.findIndex(
      (employee) => employee.tknv === newEmployee.tknv
    );
    this.employees[index] = newEmployee;
  }

  searchEmployee(typeEmployee) {
    return this.employees.filter(
      (employee) => employee.xeploai === typeEmployee
    );
  }
}
