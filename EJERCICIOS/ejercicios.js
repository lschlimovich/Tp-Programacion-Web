//  4. Cambiar texto
//  Escribí un código JS que seleccione un <h1> y un <p> y cambie su textContent.
let parrafo = document.getElementById("Lorem1")
parrafo.textContent = "Hola me llamo Lucia"

let parrafo2 = document.getElementById("Lorem2")
parrafo2.textContent = "Estoy cursando la materia de Programacion Web"

//  5. Cambiar color de fondo
//  Escribí un código JS que al hacer clic en un botón cambie document.body.style.backgroundColor.
function cambiarColor(){
    document.body.style.backgroundColor = 'lightblue'
}

// 6. Crear <li>
//  Escribí un código JS que cree un <li> con document.createElement y lo agregue a una <ul> con appendChild.
function agregarElementos() {
    let nuevoItem = document.createElement("li")
    nuevoItem.textContent = "Tercer item"
    let lista = document.getElementById("lista")
    lista.appendChild(nuevoItem)
}

//  7. Eliminar primer <li>
//  Escribí un código JS que elimine el primer <li> de una lista.

function eliminarPrimerItem() {
    let lista = document.getElementById("lista")
    let primerElem = lista.firstElementChild
    if (primerElem) {
        lista.removeChild(primerElem)
    }
}

//  8. Event listener
// Escribí un código JS que, al hacer clic en un botón, cambie el texto 
// de un <p> a "¡Hola, Mundo!".

function cambiarTexto(){
    let texto = document.getElementById("Lorem3")
    let boton = document.getElementById("btncambiartexto")
    boton.addEventListener("click",function (){
        texto.textContent = "Hola Mundo!"
    })
}

//  10. Validar formulario vacío
// Escribí un código JS que, al enviar el formulario, verifique si el 
// input de nombre está vacío y, si lo está, muestre alert("Completá el 
// nombre").
let formulario = document.getElementById("formulario")

formulario.addEventListener("submit",function verificarVacio(){
    let nombre = document.getElementById("nombre")
    if (nombre.value === "") {
        alert("Completá el nombre!")
    }
})
