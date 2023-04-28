let mensaje: string = "Melina"; //luego del los dos puntos coloco el tipo de dato, en este caso string. //mensaje=42 // aqui si coloco un numero en la variqble mensaje me tira error.tsc

mensaje= "ale"

mensaje = "chau mundo"
console.log(mensaje);
/*
Tipos de JS nativos
*number
*string
*bolean
*null
*undefined
*objet (arays son objetos)
*function 
 */

/* 
Tipos que agrega TS
*any (no usar)
*unknown
*never
*arrays
*tuplas
*enums
*
*tipos inferidos
*/

let extincionDinosaurios: number = 76_000_000
let disoFav: string = "T-Rex"
let extintos: boolean= true

//ahora si saco el boolean de esa variable y coloco en extintos y pongo un numero me va asalir error xq ya la varible me india que es buleano ,eso se llama tipos inferidos
let miVariableSinNada;
//pero si yo creo una variable y no le asigo ningun tipo me va a salir que es any, y no queremos eso
//le puedo asignar el tipo(tipado) le puedo asignar el valor (42,"",true,etc) o la combinación de ambas, pero nunca sin ninguna(any)

function nueva(config: any){  //a cada funcion le agrego any si es que tengo un proyecto grande ya realiado con js,  le agrego a cada funcon su tipado
    return config
}
 //arrays

 let animales: string[] = ["perro", "delfín", "orca"]
 let nums: number[] =[1,2,3]
 let cheks: boolean[] = [] //i pongo un arreglo vacío me va a salir que es any[], como no quiero eso le agrego el tipado o le agrego un valor al array, en este caso voy a poner boolean
 let nums2: Array<number> =[] //esta esotra forma de definir arreglos,dentro de <> va a indicar que el array vacio va a ser de numeros

 //nums.map(x => x.) //aqui hago un mapeo para acer algo con cada variable, si pongo nums cuando haga x. al costado me van a salir todas las opciones que yo puedo hacer con los numeros, si es string con los string, etc
 //es un autocompletado que sirve para hacer más rápido el código 

 //tuplas

 //es una variable que contiene un set de datos que se encuentran ordenados
 let tupla:[number, string] = [1, "melina  developer"] // si pongo un 3 al último me va a tirar error xq no está definido en la tupla
 let tupla2:[number, string[]] = [1, ["melina  developer", "meli pastelera"]] //también puedohacer en la tupla un arreglo de string o de cualquiero tipo
 let tupla3:[number, string][]
 tupla3 = [
    [1, "meli"],
    [2, "ale"],
    [3, "anna"]
 ]
 //enums (tipo enumerado) una lista de constantes que podemos referenciar
// definimos tallas=

 const chica = "s"
 const mediana = "m"
 const grande = "l"
 const extragrande = "xl"

 //pero podemos utilizar enums para poder resolver ese problema y nohacer tantas variables

//la primer letra con mayuscula
 enum Talla { Chica = "s", Mediana = "m", Grande = "l", ExtraGrande = "xl"} //si no le asigno nada a cada enum, como "s" se le va  a asignar un numero que comienza desde el cero
 //si no quiero que comience del cero le asigno desde donde qiero que comience x ejemplo =2 y el que sigue va a ser 3 etc
//ahra podemos definir una constante con uno de los valores de ese enum
 const variable1 = Talla.Grande 
 console.log(variable1) //aqui vamos a poder ver el valor que saldría "l"
//siempre hay que poner const antes de enum para que me compile solamente el valor que quiero, un codigo mas optimizado, reducido
 const enum LoadingState {Idle, Loading, Success, Error} //esto es para representar cuando un estado se está cargando
//recien cuando asigno una const estado me va a compilar el valor. que va  a ser 2 (success) xq es en la posición en la que se encuentra
 const estado = LoadingState.Success

 //objetos

 const objeto = { id: 1}
 //objeto.nombres = "Hola meli" // me va a salir error porque eso solamente lo puede hacer js y no ts
 //para eso debo asignar en el objeto un tipado qe diga que va  aser un string, lo puedo dejar vacio o ponerle hola meli
 const objeto1 ={ id: 2, nombree: ""}
 objeto1.nombree = "hola meli"
 //o también podemos agregarle implicitamente el tipado a cada valor del objeto
 const objeto2:{
    id: number,
    nombre: string,
 } = { id: 1, nombre:""} //ahora si borro nombre:"" me va a salir error xq me está indicando que falta un string luego de id: number
 //si quiero que nombre: string sea opcional debo agregarle un ? nombre?: string, entonces ahi ya no va a ser nesario que coloque un nombre:""
 // si quiero cambiar el valor de id o de cualquier tipo, debo poner el = y si no quiero solamente debo poner readonly id: number
 objeto2.id=42
 //o si no quierocambiarlo
 const objeto3:{
     readonly id: number,
    nombre: string,
 } = { id: 1, nombre:""}
 //objeto3.id =50 // sale error al poner readonly, esto sirve cuando la info viene desde una base de datos y no queremos que sea reescribible

 //tambien podemos usar  enum para poder agregarle propiedades a los tipos,

 const objeto4:{
    readonly id: number,
   nombre: string,
   talla: Talla,
} = { id: 1, nombre:"Hola Meli", talla: Talla.Mediana} //aqui debemos usar la info del enum que ya habiamos declarado antes, no pondemos poner por ej talla: 12 xq no existe, para eso usamos el enum Talla(chica, grande, mediana etc)

//para poder definir los tipos dentro de un obeto la mejor manera que se vea mas ordenado es:
type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
} 
const objeto5: Persona = { 
    id: 1,
    nombre:"Hola Meli", 
    talla: Talla.Mediana}

//otro ej agregando otro objeto al type Persona
type Direccion = {
    numero: number,
    calle: string,
    pais: string,
}
type Personas = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
} 
const objeto6: Personas = { 
    id: 1,
    nombre:"Hola Meli", 
    talla: Talla.Mediana,
    direccion: {
        numero: 5,
        calle: "la french",
        pais: "el campeón del mundo"
    }
}

//tambien puedo dfinir arays con estos objetos

const arr: Persona[] = []

//solamente van a poder existir elementos de personas, va a ser un arreglo que va a tener objetos qe nosotros definamos o que queremos que tenga

//---------------------------> Curso TS 2 <------------------------------

//Unions (composicion de tipos) combinacion de diferentes tipos
//podemos declarar que una variable podria ser de dos o mas tipos, ej cuando vienen daos de una api y no sabemos como trae los datos

let myVariable: string | number | null
myVariable = "hola" // no habira quejas xq esta en la variabe que declarasmos, pero si ponesmos un boolean si va a salir error

//type assetion
//es para manipular la data mas adecuadamente que nos puede llegar de una api
//por ej si queremos convertirlo a un string, aqui estamos haciendo la asersion de tipos

let channel: any ="meli"
let channelstr = <string>channel;
let channelStr = channel as string; //las dos son los mismo

//tambien lo usamos cuando trabajamos con elementos de html
//const myCanvas = document.getElementById("main") as HTMLCanvasElement// si nosotros estamos seguros de que dato es el que recibimos utilizamos el "as", 
//const myCanvas2 = <HTMLCanvasElement> document.getElementById("main")

//Funciones

function greet(name: string):void { //si quiero puedo poner el void cuando la funcion no retorna nada
    console.log(`hello ${name.toUpperCase()} !!`)
}

greet("Melina") // si pongo otro tipo me va a dar error, siempre tengo que poner el tipo que pusee el argumento

function getNumber() { //si no pongo ningun tipo, va a usar los inferidos, me va a dar numero xq use numeros en mi funcion, tambien si quiero puedo indicar el tipo number
    return Math.floor(Math.random() * 100);
}
console.log(getNumber())

function printPosition(position:{lat: number, long:number | string}) { //puedo poner un tipo opcional(unions)
    console.log(`Latitude & Longitude are : Lat ${position.lat} Long ${position.long}`)
}
printPosition({lat: 3, long: "55"}) //o puede ir en vez del string un numero

//Interfaces
//es un contrato de codigo, definden la forma de la data con la cual vamos a trabajar, una especie de molde

interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?: string; //este puede ser opcional
    isLoan: (id: number) => void //es un metodo, espera un argmento de tipo numero
}
//si quiero crear un libro debo hacer una variable qu contenga la interface Book en este caso
//y utilizar si o si el cuerpo de esa interface con cada uno de sus tipos, esto es lo que se llama contrato de codigo,tenemos que tener en claro que va air en el cuerpo de la interface
interface Book2 {
    id: number;
    title: string;
    author: string;
    coAuthor?: string //mis funciones no se van aquejar xq tiene el ? que quiere decir que va a ser opcional q quizas no todos los libros no tienen coauthor
}
const book: Book2 = {
    id: 1,
    title: "libro",
    author: "meli",
};
//un array de libros
const books: Book2[] = [];

//una funcion para obtener un libro
function getBook(): Book2 {
    return {id: 1, title: "my title", author: "ale"};
}

const myBook = getBook();
myBook.author; // si yo quiero trabajar con esa variable me van a salir las tres propiedades, id, title y author

//una funcion para cerar un libro

function createBook(book: Book2): Book2 {
    return book;
}

const newBook: Book2 = {
    id: 1,
    title: "libro",
    author: "meli",
    coAuthor:"ALE",
}

createBook(newBook);

//Interface extends 
//reutilizar de una manera facil una interface , usamos el extend
//por ej en las sigiente sinterfaces estamos utilizando las mismas propiedades para person, employee y costumer, porque odos son una persona y tienen un id y un nombre

interface Person {
    id: number;
    name: string;
}

interface Employee {
    id: number;
    name: string;
    dept: string;
}

interface Customer {
    id: number;
    name: string;
    country: string;
}

//vamos a eliminar id y name de employee y customer y vamos a exender desde Person1
interface Person1 {
    id: number;
    name: string;
}

interface Employee1 extends Person1{
    dept: string;
}

interface Customer1 extends Person1 {
    country: string;
}

//comprobamos

/* const emp: Employee1 = {}
emp.id */

//implements, creamos una clase implementando una interface

interface Animal {
    name: string;
    getDogs: () => void;
    getCats?: () => void;
}

class Zoo implements Animal {
    name = "peio";
    getCats(): void {
        ///LOGICA NECESARIA
    }
    getDogs(): void {
        ///
    }
}

//Clases

class Employee {
    //atributos
    //en el config ponemos esto "strictPropertyInitialization": false, si no queremos tener errr
    //o ponemos un signo de exlamacion al lado de cada atributo ej, id!:
    id: number;
    name: string;
    dept: string
    constructor(id: number,name: string, dept: string){ //para crear un nuevo empleado debo pasarle los parametros 
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }//es un metodo
    //metodos
    showInfo(): void {
        console.log(`${this.name}`) //en la consola se va a imprimir meli xq es el unico que pedi en este metodo
    }
}
const emp = new Employee(2, "meli", "compras")
//al comienzo me va a salir undefined xq en el constructor no le asignamos los atributos, los this.id, this.name, this.dept

emp.showInfo //si yo quiero acceder a la clase hago emp.y me salen las opciones
//pero si yo quiero acceder de forma controlada voy a utilizar los accesos de forma controlada
//public
//private
//protected
//public por defecto se le asignan a las clases si n estan tipadas con estas keywords

class Employee2 {
 /*    private id: number;
    private name: string;
    private dept: string */
    constructor(private id: number, private name: string, private dept: string){ 
      /*   this.id = id;
        this.name = name;
        this.dept = dept; */
        //comentamos xq podemos hacer una declaracion asignada poniendo el private en cada argumento del constructor
        this.showInfo();
    }
    private showInfo(): void {
        console.log(`${this.name}`) 
    }
}
const emp2 = new Employee2(2, "ale", "compras")
//emp2. no me va a salir ninguna opcion xq estan todas privadas
//con las clases tambien podemos extender como haciamos con las interfaces y aqu podemsusar la keyword protected

class Person2 {
    public zone = "litoral";
    protected city = "resistencia"; //se usa solamente cuando queremosextender esta clase padre a ora clase, pero no sirve para otrs clases, por eso protegida
    private country = "argentina";
    constructor(){}
        greet(): void {
            console.log("hello!!")
        }
}

class Employee3 extends Person2{
  
       constructor(private id: number, private name: string, private dept: string){ 
           super(); //Los constructores de las clases derivadas deben contener una llamada a "super"
           this.showInfo();
       }
       private showInfo(): void {
        this.zone 
        this.city
        //this.country no sale xq esta privada
           console.log(`${this.name} ${this.city}`) 
       }
   }
   const emp3 = new Employee3(3, "melina", "ventas")
   //emp3.greet