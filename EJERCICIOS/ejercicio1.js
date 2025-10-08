// Ejercicio 1: CRUD Básico de Libros
// Contexto y Consigna
// Eres el desarrollador de una aplicación para gestionar una 
// biblioteca personal. Debes implementar un sistema CRUD (Crear,
// Leer, Actualizar, Eliminar) para libros. Cada libro tendrá: 
// título, autor, año de publicación y género.
// La aplicación debe permitir:
// -) Agregar nuevos libros
// -) Mostrar todos los libros en una lista
// -) Marcar libros como leídos/no leídos
// -) Eliminar libros existentes
// -) Filtrar libros por género

// Funciones JavaScript a implementar:
// function agregarLibro(titulo, autor, año, genero, leido = false) {}
// function eliminarLibro(id) {}
// function marcarComoLeido(id) {}
// function obtenerLibros() {}
// function filtrarPorGenero(genero) {}

let libros=[]
let idjs=0

let botonGuardarjs=document.getElementById("btnGuardar")
botonGuardarjs.addEventListener("click",agregarLibro)

let botonEliminarjs=document.getElementById("btnEliminar")
botonEliminarjs.addEventListener("click",eliminarLibro)

let botonMarcarLeidojs=document.getElementById("btnMarcarLeido")
botonMarcarLeidojs.addEventListener("click",marcarComoLeido)

let botonFiltrarGenerojs=document.getElementById("btnFiltrarGenero")
botonFiltrarGenerojs.addEventListener("click",filtrarPorGenero)

let botonFiltrarTitulojs=document.getElementById("btnFiltrarTitulo")
botonFiltrarTitulojs.addEventListener("click",buscarLibros)

let botonRangoAniojs=document.getElementById("btnRangoAnios")
botonRangoAniojs.addEventListener("click",rangosAnios)

let botonMostrarTodojs=document.getElementById("btnMostrarTodo")
botonMostrarTodojs.addEventListener("click", function (){
  mostrarTabla(libros)
})

function mostrarTabla(librosAMostrar){
    let infoTabla=document.querySelector("#tablaLibros tbody")
    infoTabla.innerHTML = "" 
    librosAMostrar.forEach( libro => {
        let fila = document.createElement("tr")
        fila.innerHTML = `
        <td>${libro.id}</td>
        <td>${libro.titulo}</td>
        <td>${libro.autor}</td>
        <td>${libro.anio}</td>
        <td>${libro.genero}</td>
        <td>${libro.leido}</td>`

        infoTabla.appendChild(fila)
    })
}

function agregarLibro(){
    let titulojs=document.getElementById("titulohtml").value
    let autorjs=document.getElementById("autorhtml").value
    let aniojs=parseInt(document.getElementById("aniohtml").value)
    let generojs=document.getElementById("generohtml").value
    let leidojs=document.getElementById("leidohtml").checked

    let infoLibro = {
        id:idjs,
        titulo:titulojs,
        autor:autorjs,
        genero:generojs,
        anio:aniojs,
        leido:leidojs ? "SI":"NO"
    }
    libros.push(infoLibro)
    idjs+=1 
    console.log(libros)
    mostrarTabla(libros)
}

function marcarComoLeido(){
    let idMarcarLeidojs=parseInt(document.getElementById("marcarLeidohtml").value)
    
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === idMarcarLeidojs) {
        libros[i].leido = "SI"
        console.log(libros)
    }
   }
  mostrarTabla(libros)
}

function eliminarLibro(){
    let idEliminadojs=parseInt(document.getElementById("idEliminadohtml").value)
    
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === idEliminadojs) {
        libros.splice(i,1)
        console.log(libros)
        }
    }
    mostrarTabla(libros)
}

function filtrarPorGenero() {
    let generoAFiltrar=document.getElementById("filtrarGenerohtml").value
    let librosFiltrados=libros.filter(libro => libro.genero === generoAFiltrar)
    mostrarTabla(librosFiltrados)    
}

function buscarLibros() {
    let tituloAFiltrar=document.getElementById("filtrarTitulohtml").value
    let titulosFiltrados=libros.filter(libro => libro.titulo === tituloAFiltrar)
    mostrarTabla(titulosFiltrados)    
}

function rangosAnios(){
  let anioIniciojs=parseInt(document.getElementById("anioIniciohtml").value)
  let anioFinjs=parseInt(document.getElementById("anioFinhtml").value)
  
  let librosFiltrados=libros.filter(libro => (anioIniciojs <= libro.anio && libro.anio <= anioFinjs)) 
    mostrarTabla(librosFiltrados) 
}


// Ejercicio 2: Búsqueda y Filtros Avanzados
// Contexto y Consigna
// Amplía la aplicación anterior con funcionalidades de búsqueda y 
// filtrado avanzado. Los usuarios deben poder:
// -) Buscar libros por título o autor
// -) Filtrar por rango de años
// -) Ordenar libros por título, año o autor
// -) Agrupar libros por género

// Funciones JavaScript adicionales:
// function buscarLibros(termino) {}
// function filtrarPorRangoDeAños(añoInicio, añoFin) {}
// function ordenarLibros(criterio, ascendente = true) {}
// function agruparPorGenero() {}

function mostrarTabla(lstAMostrar) {
    let tabla=document.getElementById("#tablaDatos tbody")
    tabla.innerHTML=""
    lstAMostrar.forEach( mascota => 
        let fila=document.createElement("tr")
        fila.innerHTML = `
        <td>${}</td>
        `
        tabla.appendChild(fila)
    )
    
}