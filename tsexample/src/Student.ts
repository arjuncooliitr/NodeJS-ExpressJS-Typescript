import {Course} from './Course';
@Course({
    name:'NodeJS'
})
export default class Student {
    constructor(public firstName:string) {}
}
