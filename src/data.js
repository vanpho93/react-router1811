export class Person {
    constructor(_id, name, age) {
        this._id = _id;
        this.name = name;
        this.age = age;
    }

    static getPersonById(_id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const person = people.find(p => p._id === _id);
                if (!person) return reject(new Error('Cannot find person'));
                resolve(person);
            }, 500);
        });
    }
}

export const people = [
    new Person('ab123', 'Teo', 10),
    new Person('ab125', 'Ti', 15),
    new Person('ab127', 'Tun', 17)
];
