// HOF
export function forEach<T>(elems:T[], action:(elem: T) => void): void {
    let i:number;
    for(i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}