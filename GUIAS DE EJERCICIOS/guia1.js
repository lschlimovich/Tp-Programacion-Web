// Declara tres variables: una para almacenar tu ciudad, otra para almacenar tu país, 
// y otra para almacenar tu edad de nacimiento. Imprime los valores en la consola y 
// después intenta cambiar los valores y observa los resultados con let y const

let ciudad = "buenos aires";
let pais = "argentina";
let edadNacimiento = 2006;

console.log("Ciudad", ciudad)
console.log("Pais", pais)
console.log("Edad de Nacimiento", edadNacimiento)

let numero = "1234"
Number(numero)
console.log(typeof(numero))

let nada = "";
let otro = null;
console.log(typeof(nada))
console.log(typeof(otro))

console.log(1+1)

let multiplicar = (num1,num2) => num1*num2
console.log(multiplicar(2,3))

if (a<b){
    console.log("a es menor que b")
}else if (a === b){
    console.log('a es igual a b')
}else{
    console.log(`${a} es mayor que ${b}`)
}

let resta = (a>b) ? "es menor":"no es menor" // if algo, true else false 

