// let variable
let nama = "abdul";
console.log(nama);
nama = "abdullll";
console.log(nama);

//const variable
const pi = 3.14;
console.log(pi);

// arrow function

// function
function greet(name) {
    console.log(`Halo ${name}`);
}

// arrow function
const greetArr = (i) => `Hall0, ${i}`;
console.log(greetArr("Abdul"));

// Literals
const a = "abdul";
const b = `Anyyeong, ${a}-ya, Bowayo`;
console.log(b);

//Destrucuturing

//Destructuring Array
const buah = ["apple", "orange", "grape"];
const [p, d, c] = buah;
console.log(p, d, c);

// DestrucuturingObject
const user = { name: "Aang", umur: 100 };
const { name, umur } = user;
console.log(name, umur);

// spread
const baju = ["dobu", "rough"];
const baju2 = [baju, "eri", "moxx"];
console.log(baju2);

//Rest
function count(...angka) {
    return angka.reduce((acc, curr) => acc + curr, 0);
}

console.log(count(1, 2, 3, 4));

//Promises
const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Berhasil Diambil");
        }, 2000);
    });
};

getData().then((response) => console.log(response));

//async/await
const fetchData = async() => {
    try {
        const response = await getData();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};

fetchData();

//classes
class person {
    constructor(nama, umur) {
        this.nama = nama
        this.umur = umur
    }

    perkenalan() {
        return `Halo, nama saya ${this.nama}. Umur saya sekarang ${this.umur}`
    }
}



// inheritance
class guru extends person {
    constructor(nama, umur, matapelajaran) {
        super(nama, umur);
        this.matapelajaran = matapelajaran
    }

    mengajar() {
        return `Saya mengajar ${this.matapelajaran}.`
    }
}

const abdul = new guru('Abdul', 40, 'Matematika')
console.log(abdul.perkenalan())
console.log(abdul.mengajar())