export default function Upper() {
    return function(target:Object , key: string) {
        let value = target[key];

        const setter = (data:string) => {
            value  = data.toUpperCase();
        }

        const getter = () => value;

        Object.defineProperty(target, key, {
            get:getter,
            set:setter
        })
    }
}