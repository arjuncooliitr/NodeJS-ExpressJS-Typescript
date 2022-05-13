import express from 'express';

import UserController from '../controllers/UserController';
 
export class UserRoutes {
    constructor(private app: express.Application){}

    configureRoutes(): express.Application {
        this.app.route("/register")
            .post(UserController.register);
        this.app.route("/login")
            .post(UserController.login);
        return this.app;
    }
 }
