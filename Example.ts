function Required(target: any, propertyKey: string) {
    Validator.registerRequired(target, propertyKey);
}

class Validator {
    private static requiredValidatorMap: Map<any, string[]> = new Map();
    //todo add more validator maps

    static registerRequired(target: any, property: any): void {
        let keys: string[] = this.requiredValidatorMap.get(target) as string[];
        if (!keys) {
            keys = [];
            this.requiredValidatorMap.set(target, keys);
        }
        keys.push(property);
    }

    static validate(target: any): boolean {
        let requiredProps: string[] = this.requiredValidatorMap.get(Object.getPrototypeOf(target)) as string[];
        if (!requiredProps) {
            return true;
        }
        let hasErrors: boolean = false;
        for (const property of requiredProps) {
            let value = target[property];
            if (!value || value.trim().length === 0) {
                console.error(property + " is Required!!");
                hasErrors = true;
            }
        }
        return hasErrors;
    }
}

class Person {
    @Required
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

console.log("-- creating instance --");
let person: Person = new Person("");
console.log(person);
let b = Validator.validate(person);
console.log("validation passed: " + !b);
console.log("-- creating another instance --");
let person2: Person = new Person("George");
console.log(person2);
b = Validator.validate(person2);
console.log("validation passed: " + !b);

