import express, {Request, Response, NextFunction} from 'express';

import EmployeeController from '../controllers/EmployeeController';

export class EmployeeRoutes {
    constructor(private app:express.Application) {}
    configureRoutes(): express.Application {
        this.app.route("/employees")
        .get(EmployeeController.getEmployees);
        return this.app;
    }
}