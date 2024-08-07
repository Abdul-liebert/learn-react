// import { inc } from "./export.js";
// variable
let user = "abdul";
const pass = 12345;

// arrow function
const person = (i) => {
    return `My name is ${i}`;
};

console.log(person("Abdul"));

//literals

const literals = `Halo saya ${user}`;
console.log(literals);

//destrucuturing

// object
const obj = { lang: "english", bahasa: "indonesia" };
const { lang, bahasa } = obj;
console.log(obj);

// const arr
const arr = ["red", "green", " blue"];
const [mer, hij, bir] = arr;
console.log(arr);

//spread
const object = { name: "moxx", brand: "cloth" };
const spread = [object, "cool", "cheap"];
console.log(spread);

// import 
// console.log(inc(1, 2))
//promises
const get = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data successfully added')
        }, 1000)
    })
}

get().then((response) => console.log(response))

const fetch = async() => {
    try {
        const response = await get()
        console.log(response);
    } catch (error) {
        console.error(error)
    }
}

fetch();

// classes
class animal {
    constructor(name, type) {
        this.name = name
        this.type = type
    }

    about() {
        return `This is a ${this.name} he was ${this.type}`
    }
}

class aboutani extends animal {
    constructor(name, type, size) {
        super(name, type);
        this.size = size
    }

    aboutsize() {
        return `The size of this animal is ${this.size}`
    }
}

const tiger = new aboutani('Tiger', 'Carnivora', '2 meter')
console.log(tiger.about())
console.log(tiger.aboutsize())