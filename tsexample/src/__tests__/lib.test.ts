import {forEach, filter} from '../lib';

describe("tesing library module", () => {
    it("testing foreach", () => {
        let nos:number[] = [15, 6, 2, 11, 4];
        const action = jest.fn(); // mock function
        forEach(nos, action);
        expect(action.mock.calls.length).toBe(5);
        expect(action.mock.calls[0][0]).toBe(15); // first call to action, first arg is 15
        expect(action.mock.calls[1][0]).toBe(6);
    });

    test("testing filter", () => {
        let nos:number[] = [15, 6, 2, 11, 4];
        const predicate = jest.fn(x => x %2 === 0); // mock function
        let result:number[] = filter(nos, predicate);
        expect(result.length).toBe(3);
    });
});