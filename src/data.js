export class Person {
    constructor(_id, name, age) {
        this._id = _id;
        this.name = name;
        this.age = age;
    }
}

export const people = [
    new Person('ab123', 'Teo', 10),
    new Person('ab125', 'Ti', 15),
    new Person('ab127', 'Tun', 17)
];
