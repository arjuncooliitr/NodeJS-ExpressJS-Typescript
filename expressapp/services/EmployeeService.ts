import Employee from '../models/IEmployee';

class EmployeeService {
    getEmployees() {
        return Employee.find();
    }
}

export default new EmployeeService();