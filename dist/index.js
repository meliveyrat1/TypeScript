"use strict";
let mensaje = "Melina";
mensaje = "ale";
mensaje = "chau mundo";
console.log(mensaje);
let extincionDinosaurios = 76000000;
let disoFav = "T-Rex";
let extintos = true;
let miVariableSinNada;
function nueva(config) {
    return config;
}
let animales = ["perro", "delfín", "orca"];
let nums = [1, 2, 3];
let cheks = [];
let nums2 = [];
let tupla = [1, "melina  developer"];
let tupla2 = [1, ["melina  developer", "meli pastelera"]];
let tupla3;
tupla3 = [
    [1, "meli"],
    [2, "ale"],
    [3, "anna"]
];
const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
const estado = 2;
const objeto = { id: 1 };
const objeto1 = { id: 2, nombree: "" };
objeto1.nombree = "hola meli";
const objeto2 = { id: 1, nombre: "" };
objeto2.id = 42;
const objeto3 = { id: 1, nombre: "" };
const objeto4 = { id: 1, nombre: "Hola Meli", talla: Talla.Mediana };
const objeto5 = {
    id: 1,
    nombre: "Hola Meli",
    talla: Talla.Mediana
};
const objeto6 = {
    id: 1,
    nombre: "Hola Meli",
    talla: Talla.Mediana,
    direccion: {
        numero: 5,
        calle: "la french",
        pais: "el campeón del mundo"
    }
};
const arr = [];
let myVariable;
myVariable = "hola";
let channel = "meli";
let channelstr = channel;
let channelStr = channel;
function greet(name) {
    console.log(`hello ${name.toUpperCase()} !!`);
}
greet("Melina");
function getNumber() {
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());
function printPosition(position) {
    console.log(`Latitude & Longitude are : Lat ${position.lat} Long ${position.long}`);
}
printPosition({ lat: 3, long: "55" });
const book = {
    id: 1,
    title: "libro",
    author: "meli",
};
const books = [];
function getBook() {
    return { id: 1, title: "my title", author: "ale" };
}
const myBook = getBook();
myBook.author;
function createBook(book) {
    return book;
}
const newBook = {
    id: 1,
    title: "libro",
    author: "meli",
    coAuthor: "ALE",
};
createBook(newBook);
class Zoo {
    constructor() {
        this.name = "peio";
    }
    getCats() {
    }
    getDogs() {
    }
}
class Employee {
    constructor(id, name, dept) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    showInfo() {
        console.log(`${this.name}`);
    }
}
const emp = new Employee(2, "meli", "compras");
emp.showInfo;
class Employee2 {
    constructor(id, name, dept) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    showInfo() {
        console.log(`${this.name}`);
    }
}
const emp2 = new Employee2(2, "ale", "compras");
class Person2 {
    constructor() {
        this.zone = "litoral";
        this.city = "resistencia";
        this.country = "argentina";
    }
    greet() {
        console.log("hello!!");
    }
}
class Employee3 extends Person2 {
    constructor(id, name, dept) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    showInfo() {
        this.zone;
        this.city;
        console.log(`${this.name} ${this.city}`);
    }
}
const emp3 = new Employee3(2, "anna", "ventas");
//# sourceMappingURL=index.js.map