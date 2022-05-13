import express, {Request, Response, NextFunction} from 'express';
import {IncomingHttpHeaders} from 'http';
import UserService from '../services/UserService';

function getTokenFromHeader(headers: IncomingHttpHeaders) {
    const header = headers.authorization;
    if(header) {
        return header.split(' ') [1];
    }
}
export default function tokenGuard(req:Request, response: Response, next: NextFunction) {
    const token = getTokenFromHeader(req.headers) as string;
    const hasAccess = UserService.verifyToken(token);
    hasAccess.then( res => {
        if(!res) {
            return response.status(401).send({message: 'No Access'});
        }
        next();
    })
}