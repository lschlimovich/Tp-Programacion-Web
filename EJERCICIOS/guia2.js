// 1) Escribe una función que tome tres números como argumentos y retorne el mayor de ellos. 
// Llama a la función con diferentes valores e imprime el resultado.

// function retornarMayor (num1,num2,num3) {
//     if (num2 < num1 && num1 > num3) {
//         console.log(num1);
//     } else if (num1 < num2 && num2 > num3) {
//         console.log(num2);
//     } else {
//         console.log(num3);
//     }
// }

// retornarMayor(5,9,19)

// 2) Crea una función expresada que reciba un array de strings y retorne 
// un string que concatena todos los elementos del array separados por espacios.

// let lst = ["hola me",'llamo','lucia','tengo 19','años']
// function concatenar (lst) {
//     let frase=''
//     for (let i in lst) {
//         frase+=(lst[i]+" ")
//     }
//     console.log(frase)
// }

// concatenar(lst)

// 3) Convierte la función del ejercicio anterior a una función de flecha. Además, agrega una 
// validación para que, si el array está vacío, retorna un mensaje de advertencia.

// let lst = ["hola me",'llamo','lucia','tengo 19','años']
// const concatenar = (lst) => {
//     let frase=''
//     for (let i in lst) {
//         frase+=(lst[i]+" ")
//     }
//     console.log(frase)
// }

// concatenar(lst)


// Escribe una función que tome una temperatura en grados Celsius como argumento y devuelva 
// un mensaje que indique si hace frío (menor a 15 grados), templado (entre 15 y 25 grados) 
// o calor (mayor a 25 grados).

// let temp = 19

// function clima (temperatura) {
//     if (temperatura < 15) {
//         console.log(`Hace frio. (Temperatura: ${temperatura})`)
//     } else if (15 >= temperatura && temperatura <= 25) {
//         console.log(`Templado. (Temperatura: ${temperatura})`)
//     } else {
//         console.log(`Hace calor. (Temperatura: ${temperatura})`)
//     }
// }

// clima(temp)

// Reescribe una función que tome una hora (formato 24 horas) y devuelva "Buenos días" si es 
// antes de las 12, "Buenas tardes" si es entre las 12 y 18, o "Buenas noches" si es después 
// de las 18, utilizando operadores ternarios

// let hora = 23

// let mensaje = hora < 12 ? 'Buenos dias'
//     : hora >= 12 && hora <= 18 ? 'Buenas tardes':'Buenas noches'

// console.log(mensaje)

// Escribe una función que tome un número como argumento y retorne su factorial. 
// Utiliza una estructura if para manejar el caso base.

// function factorial (n) {
//     let mult = n
//     for (let i=1;i<n;i++) {
//         mult *= i
//     }
//     console.log(mult)
// }
// factorial(5)


// Escribí un código esPasswordValida(p) que retorne true si p tiene ≥8 caracteres, al menos un número y una mayúscula 
// (usá lógicos).

// p="esValido0"
// function esPasswordValida(p){
//     return p.length >= 8 && /\d/.test(p) && /[A-Z]/.test(p)
// }

// console.log(esPasswordValida(p))

//  Escribí un código esPar(n) que use % y ? : para retornar true si es par, false si es impar.
// Escribí un código que, dado un array de números, imprima con forEach si cada uno es par o impar.

// function esPar(n){
//     return n%2===0 ? "es Par":"es impar"
// }

// let nums=[1,2,3,4,5,6,7,8,9,10]

// nums.forEach(function(num) {
//     console.log(`El número ${num} ${esPar(num)}`)
// })

//  16. find (>20)
//  Escribí un código que encuentre con find el primer número > 20.

// let numeros = [3,55,66,7,8,9,7,5,333,2,1,40]

// let resultado = numeros.find(function(num){ 
//     return num > 20
// })
// console.log(resultado)

//  17. some (≥18)
//  Escribí un código que verifique con some si hay al menos una edad ≥18.

// let edades = [3,55,66,7,8,9,7,5,333,2,1,40]

// let rtdo = edades.find(function(num){ 
//     return num >= 18
// })
// console.log(rtdo)


// //  Escribí un código que verifique con every si todos los elementos de un array son strings.

// let lst=["hola","esto","no","son",7,'str']
// let rtdo=lst.every(function(elemento){
//     return typeof elemento === "string"
// })
// console.log(rtdo)

// Escribí un código que, dado un array de personas {nombre, edad}, cree con map un array solo de nombres.

let info=[
    {nombre: 'Lucia', edad: 18},
    {nombre:'Sabrina',edad: 16},
    {nombre:'Romina',edad: 49}, 
    {nombre:'Guido',edad:50}]

let nombres=info.map(function(elem){
    return elem.nombre
})

console.log(nombres)
