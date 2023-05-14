// const saludo = (string:any) => {
//     console.log(`Hola ${string}`);
// }

import { Interface } from "readline";

// saludo('mundo')

// type AUTENTICADO = {
// 	userId: string;
// 	jwt: string;
// 	role: string;
// 	level?: number;
// }

// const isAuth = (jwt: string, userId: string, role: string, level?: number): AUTENTICADO =>{
// 	return {
//         jwt,
// 		userId,
// 		role,
// 		level: level ?? 10
// 	}
// }

// const respuesta = isAuth('asdf','user','12345',0);
// console.log(respuesta)

// //Enviar parametros con valores por defecto

// type AUTENTICADO = {
// 	userId: string;
// 	jwt: string;
// 	role: string;
// 	level?: number;
// }

// const isAuth = (jwt: string, userId: string = 'admin', role: string = 'costumer', level?: number): AUTENTICADO =>{
// 	return {
//         jwt,
// 		userId,
// 		role,
// 		level: level ?? 10
// 	}
// }

// const respuesta = isAuth('asdf');
// console.log(respuesta)

// const respuesta2 = isAuth('asdf','user','12345');
// console.log(respuesta2)

// const respuesta3 = isAuth('asdf','user');
// console.log(respuesta3)

//split operator
//cuando existen muchos parametros es recomendable utilizar el split operator, el que recibe los parametros y los convirte en array

// //sin enviar objeto
// type ARGS = number | string | boolean;

// const argumentos = (...args: ARGS[]):ARGS[] =>{
//     return args;
// }

// const resultado = argumentos(1,2, 'Enzo', true);
// console.log(resultado);

// //enviando objetos con type usuario
// type usuario = {
//     name: string;
//     email: string;
//     edad: number
// }

// const usuario = {
//     name: 'Adrian',
//     email: 'a.aaa@gmail.com',
//     edad: 20
// }

// const argumentos2 = (...args: usuario[]):usuario[] =>{
//     return args;
// }

// const resultado2 = argumentos2(usuario);
// console.log(resultado2);


// //sobrecarga
// //sirve para conocer el typo de resultado que tendra la funcion

// type Args = number|string|boolean

// function transformarNumero(num:number): number;
// function transformarNumero(num: string): string;
// function transformarNumero(num: number): boolean;

// function transformarNumero(num:Args):Args{
//     return num;
// }

// const resultado = transformarNumero('uno')
// console.log(resultado.toUpperCase()); //entrega autocompletado de tipo string


// const resultado2 = transformarNumero(1)
// console.log(resultado2.toFixed(2)); //entrega autocompletado de tipo number


// //interface
// // las interfaces sirven para declarar objetos mas grandes 
// //en vez de usar un type se usa una interfaz ya que esta se puede heredar
// //tambien se puede declarar en una interfaz un type
// type Address = string|number

// interface Base {
//     id: number,
//     address?: Address
// }

// interface Usuario extends Base {
//     name: string;
//     email: string;
//     edad: number;
// }

// interface Persona extends Base {
//     phone: number;
// }

// const usuario: Usuario = {
//     id: 1,
//     name: 'Adrian',
//     email: 'a.aaa@gmail.com',
//     edad: 20,
//     address: 'almirante latorre 231'
// }

// const persona: Persona = {
//     id: 1,
//     phone: 43432423

// }
// console.log(usuario)
// console.log(persona)


// //clases

// class Users {

//     private name: string;
//     private email: string;
//     private age: number;

//     constructor(name:string, email:string, age:number){
//         this.name = name;
//         this.email = email;
//         this.age = age;
//     }

//     getName():string{
//         return this.name;
//     }

//     setName(newName:string):void{
//         this.name = newName;
//     }
// }

// const user = new Users('Enzo','enzot.13@gmail.com', 33);
// user.setName('juanito')
// console.log(user)


// //clases

// class ErrorResponse{
//     code: number = 404;
// }

// class Successresponse{
//     code: number = 200;
//     response:string = '';
// }

// type Trequest = ErrorResponse | Successresponse

// interface Res {
//     data: any;
//     code:number;
// }

// async function get(req: Trequest):Promise<Res>{
//     let res: Res = {
//         data: null,
//         code: 500
//     }

//     try {
//         const data = await fetch('https://....');
//         if(data){
//             if(req instanceof Successresponse){
//                 res = {
//                     data,
//                     code:req.code
//                 }
//             }
//         }
//     } catch (error) {
//         console.log(error)
//     } finally{
//         return res;
//     }
// }



// //interseccion

// type alfanumerico = number | string
// type numerico = number | undefined
// type KEY = alfanumerico & numerico;
// type KEY2 = alfanumerico | numerico;

// //con signo & solo muestra tipo que se repita en ambos
// //con signo | muestra todos los tipo en ambos


// //cast

// const canvas = <HTMLCanvasElement>document.getElementById('#canvas');
// //o
// const canvas2 = document.getElementById('#canvas') as HTMLCanvasElement;

// const context2D = canvas.getContext('2D');
// //o
// const canvas3 = document.getElementById('#canvas');
// const context2D2 = (canvas3 as HTMLCanvasElement).getContext('2D');






// // chaining
// //con el signo ! se indica que si o si existira ese boton
// const boton = document.getElementById('#btn')!

// //con el siugno de interrogacion puede ejecutar el evento. Sive para el caso de que no exista el elemento y n o de error
// boton?.addEventListener('click', ()=>{
//     alert('hola mundo')
// })


// //decoradores
// //descomentar "experimentalDecorators": true de tsconfig
// //permite extender las clases
// //solo se muestra en prototype del navegador

// function Decorator(target: any){
//     target.prototype.generateKey = () =>{
//         return '';
//     }
//     target.prototype.email = 'enzot.13@gmail.com'
// }

// interface User{
//     name:string;
//     age:number;
//     email:string;
// }

// @Decorator
// class User {

//     name:string;
//     age:number;

//     constructor(){
//         this.name = '';
//         this.age = 0;
//     }
// }

// const user = new User();
// console.log(user);

//funciones generica
// // T->tipado
// // U->variable

// interface Ping<T> {
//     host: T;
//     location: T
// }

// const network:Ping<number> = {
//     host: 1,
//     location: 2
// }







