import {random} from 'lodash';

export const sum = (a:number, b: number) : number => {
    return a + b + random(1,100);
};