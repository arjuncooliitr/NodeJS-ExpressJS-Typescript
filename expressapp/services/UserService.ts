import IUser from '../models/IUser';
import * as jwt from 'jsonwebtoken';

class UserService {
    private readonly _jwtSecret= 'topscret123';
    users: IUser[] = [];
    register({email, password}: IUser) {
        this.users.push({id: this.users.length + 1, email, password});

        return {};
    }
    login(user:IUser) {
        let u = this.users.find(u => u.email === user.email);
        if(u) 
            return {
                token : jwt.sign({id: u.id, email:u.email, iss: "adobe"},this._jwtSecret)
            }
    }

    verifyToken(token:string) {
        return new Promise( (resolve, reject) => {
            jwt.verify(token, this._jwtSecret, (err, decoded: any) => {
                if(err) {
                    resolve(false);
                    return;
                }  
                resolve(true);
            })
        });
    }
}

export default new UserService();