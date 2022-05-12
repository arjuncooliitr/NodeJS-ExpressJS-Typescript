import Upper from './Upper';
export default class User {
    @Upper()
    firstName:string;
    @Upper()
    lastName:string;
    constructor(fn:string, ln:string) {
        this.firstName = fn;
        this.lastName =ln;
    }
}