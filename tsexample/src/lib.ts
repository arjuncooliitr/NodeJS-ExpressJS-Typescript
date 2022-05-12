// HOF
export function forEach<T>(elems:T[], action:(elem: T) => void): void {
    let i:number;
    for(i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}

export function filter<T>(elems:T[], predicate:(elem:T) => boolean): T[] {
    const result:T[] = [];
    forEach(elems, elem => {
        if(predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
}

export function fibanocci(no:number) : number {
    return (no === 0 || no === 1) ? no : fibanocci(no -1) + fibanocci(no -2);
}

type FunctionType<T, R> = (arg:T) => R;

export function memoize<T, R>(fn: FunctionType<T,R>) {
    const cache: {T?, R?} = {};
    return function(args) {
        if(!cache[args]) {
            cache[args] = fn(args);
        }
        return cache[args];
    }
}