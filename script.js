 //AYUDA NO SÉ CÓMO HACER QUE FUNCIONEN LOS OTROS BOTONES.
 //Datos
const datos = [
    { NoDeLista: 1, Nombre: "Joely", Asistencia: 80, Calif1: 8, Calif2: 7, Calif3: 10 },
    { NoDeLista: 2, Nombre: "Liam", Asistencia: 95, Calif1: 9, Calif2: 7, Calif3: 10 },
    { NoDeLista: 3, Nombre: "Iker", Asistencia: 100, Calif1: 10, Calif2: 9, Calif3: 9 },
    { NoDeLista: 4, Nombre: "Sofía", Asistencia: 100, Calif1: 10, Calif2: 10, Calif3: 10 },
    { NoDeLista: 5, Nombre: "Dalari", Asistencia: 85, Calif1: 8, Calif2: 7, Calif3: 8 },
    { NoDeLista: 6, Nombre: "Lorsen", Asistencia: 80, Calif1: 9, Calif2: 7, Calif3: 10 },
    { NoDeLista: 7, Nombre: "Mateo", Asistencia: 80, Calif1: 8, Calif2: 7, Calif3: 7 },
    { NoDeLista: 8, Nombre: "Marleny", Asistencia: 95, Calif1: 7, Calif2: 8, Calif3: 6 },
]

//Menú de Opciones
const Opcion = [
    {NoDeOpción: 1, Opción: "Mostrar alumnos/as.", Imagen: "Aprender.png"},
    {NoDeOpción: 2, Opción: "Ver calificaciones.", Imagen: "Directora.png"},
    {NoDeOpción: 3, Opción: "Ver asistencia.", Imagen: "Escribir.png"},
    {NoDeOpción: 4, Opción: "Ver promedio.", Imagen: "Explicar.png"},
    {NoDeOpción: 5, Opción: "Agregar alumno/a.", Imagen: "Entrevista.png" },
    {NoDeOpción: 6, Opción: "Salir.", Imagen: "Emoción2.png"},
]

let contenedor = document.getElementById("Opcion")
contenedor.innerHTML=""
Opcion.forEach(Opcion => {
    let MenuOpciones = document.createElement("div")
    MenuOpciones.className = "menu"
    
    MenuOpciones.innerHTML = `
        <img src="./Imágenes/${Opcion.Imagen}" />
        <p>${Opcion.NoDeOpción + ".- " + Opcion.Opción}</p>
        <button id=${Opcion.NoDeOpción}>Seleccionar</button>
    `    
    contenedor.append(MenuOpciones)
    let botSeleccionar = document.getElementById(Opcion.NoDeOpción)
    botSeleccionar.addEventListener("click", verLista)
})

function verLista(e){
    let botOp = Number(e.target.NoDeOpción)
    let opSel = Opcion.find(Opcion => Opcion.NoDeOpción === botOp)
    let alumno = datos.find(datos => datos.NoDeLista === botOp)
    if(alumno === opSel){
        let alumnos = "Nombre de Alumnos:\n"
    datos.forEach(dato => {
        alumnos = alumnos + dato.NoDeLista + ".- " + dato.Nombre + " \n "
    })
    console.log(alumnos)
    }else
        alert("No hay alumnos")
}

function verCalif(e){
    let botOp = Number(e.target.NoDeOpción)
    let opSel2 = Opcion.find(Opcion => Opcion.NoDeOpción === botOp)
    let Calif = datos.find(datos => datos.NoDeLista === botOp)
    if(Calif === opSel2){
        let numero = Number(prompt("¿De quién desea ver calificaciones?:\n" + listar2(datos)))
        let datoCalif = datos.find(datos => datos.NoDeLista === numero)
        if(datoCalif){
            alert ("Las calificaciones de " + datoCalif.Nombre + " son:\n" + datoCalif.Calif1 + "\n" + datoCalif.Calif2 + "\n" + datoCalif.Calif3)
        } else {
            alert ("No existe ese alumno/a")
        } 
}}

// //Contenedor
// let contenedor = document.getElementById("datos")
// datos.forEach(datos => {
//     contenedor.innerHTML = contenedor.innerHTML + "<p>" + datos.NoDeLista + ".- " + datos.Nombre + "<p>"
// })

/*Acciones
do {
    if (Opcion === 1){
        let botOpc1 = document.getElementsByClassName(Opcion.NoDeOpción)
        botOpc1.addEventListener("click", listar)
    }else if (Opcion === 2){
        let numero = Number(prompt("¿De quién desea ver calificaciones?:\n" + listar2(datos)))
        let datoCalif = datos.find(datos => datos.NoDeLista === numero)
        if(datoCalif){
            alert ("Las calificaciones de " + datoCalif.Nombre + " son:\n" + datoCalif.Calif1 + "\n" + datoCalif.Calif2 + "\n" + datoCalif.Calif3)
        } else {
            alert ("No existe ese alumno/a")
        } 
    }else if (Opcion === 3){
        let numero = Number(prompt("¿De quién desea ver calificaciones?:\n" + listar2(datos)))
        let Asis = datos.find(datos => datos.NoDeLista === numero)
        if(Asis){
            alert ("La asistencia de " + Asis.Nombre + " es de " + Asis.Asistencia + "%")
        }else {
            alert ("No existe ese alumno/a")
        }
    }else if (Opcion === 4){
        let numero = Number(prompt("¿De quién desea ver el promedio?:\n" + listar2(datos)))
        let promedio = datos.find(datos => datos.NoDeLista === numero)
        if(promedio){
            alert ("El promedio de " + promedio.Nombre + " es "+ Math.round((promedio.Calif1 + promedio.Calif2 + promedio.Calif3)/3))
        }else{
            alert("No existe ese alumno/a)")
        }
    }else if (Opcion === 5){
        const nuevoAlumno = {NoDeLista: Number(prompt("Por favor ingrese número de lista.")), 
        Nombre: prompt("Por favor ingrese el nombre del alumno/a."), 
        Asistencia: Number(prompt("Por favor ingrese la asistencia.")), 
        Calif1: Number(prompt("Por favor ingrese la 1ra calificación.")),
        Calif2: Number(prompt("Por favor ingrese la 2da calificación.")),
        Calif3: Number(prompt("Por favor ingrese la 3ra calificación."))
        }
        datos.push (nuevoAlumno)
        console.log (datos)
    }
}while (Opcion == 0);

//Función de Alumnos
function listar(datos){
    let alumnos = "Nombre de Alumnos:\n"
    datos.forEach(dato => {
        alumnos = alumnos + dato.NoDeLista + ".- " + dato.Nombre + " \n "
    })
    alert (alumnos)
}

//Función de Alumnos
function listar2(datos){
    let alumnos = "Nombre de Alumnos:\n"
    datos.forEach(dato => {
        alumnos = alumnos + dato.NoDeLista + ".- " + dato.Nombre + " \n "
    })
    return alumnos
}

//Función de saludo
//function Saludo(){
    //let Nombre = prompt("Hola, por favor ingrese su nombre")
    //alert("Bienvenido " + Nombre)
//}*/