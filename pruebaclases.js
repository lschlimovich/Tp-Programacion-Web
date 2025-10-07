// Mini sitio integrador
//  Escribí el código HTML+CSS+JS de una página con header/nav/main/footer. 
// En main, creá un formulario con campo nombre (obligatorio). 
// Al enviar:
// -) Si está vacío, mostrà un alert y evitá el envío.
// -) Si está completo, guardá el nombre en un array y mostralo en una
//  lista en pantalla.
//  Estilizá con flexbox o grid.

document.querySelector("#datos").addEventListener("submit", function validar(e) {
    e.preventDefault()

    let nombre = document.getElementById("nombre")
    let listaNombres = document.getElementById("listaNombres")
    let saludo = document.getElementById("saludo")

    if (nombre.value === "") {
        alert("Campo obligatorio. Porfavor ingrese su nombre!")
    } else {   
        let item = createElement("li")
        item.textContent = nombre.value
        listaNombres.appendChild(item)
        saludo.textContent = `Hola ${nombre.value}`
    }
})
