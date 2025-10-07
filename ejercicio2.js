let perfumes=[]
let  idjs=0

let btnGuardarDatosjs=document.getElementById("btnGuardarDatoshtml")
btnGuardarDatosjs.addEventListener("click",agregarPerfume)

let btnEliminarjs=document.getElementById("btnEliminarhtml")
btnEliminarjs.addEventListener("click",eliminarPerfume)

function mostrarTabla(perfumesAMostrar){
  let tabla = document.querySelector("#infoPerfumes tbody")
  tabla.innerHTML=""
  perfumesAMostrar.forEach(perfumes => {
    let fila = document.createElement("tr")
    fila.innerHTML=`
    <td>${perfumes.id}</td>
    <td>${perfumes.nombre}</td>
    <td>${perfumes.marca}</td>
    <td>${perfumes.familia}</td>
    <td>${perfumes.mililitros}</td>
    <td>${perfumes.precio}</td>
    <td>${perfumes.unidades}</td>
    `
    tabla.appendChild(fila)
  })
}

function agregarPerfume(){
  let nombrejs=document.getElementById("nombrehtml").value
  let marcajs=document.getElementById("marcahtml").value
  let familiajs=document.getElementById("familiahtml").value
  let mililitrosjs=parseInt(document.getElementById("mlhtml").value)
  let preciojs=parseInt(document.getElementById("preciohtml").value)
  let unidadesjs=parseInt(document.getElementById("unidadeshtml").value)
  
  let infoPerfume = {
    id:idjs,
    nombre:nombrejs,
    marca:marcajs,
    familia:familiajs,
    mililitros:mililitrosjs,
    precio:preciojs,
    unidades:unidadesjs}
  perfumes.push(infoPerfume)
  idjs+=1
  console.log(perfumes)
  mostrarTabla(perfumes)
}
 
function eliminarPerfume(){
  let idAEliminarjs=parseInt(document.getElementById("idAEliminarhtml").value)
  
  for(let i=0;i<perfumes.length;i++) {
    if(perfumes[i].id === idAEliminarjs){
      perfumes.splice(i,1)
    }
  }
  mostrarTabla(perfumes)
}



