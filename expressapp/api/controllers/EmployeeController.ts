import {Request, Response} from 'express';

import EmployeeService from '../../services/EmployeeService';

class EmployeeController {
    async getEmployees(req:Request, res:Response) {
        const employees  = await EmployeeService.getEmployees();
        res.status(200).send(employees);
    }
}

export default new EmployeeController();