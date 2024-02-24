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

//Función de saludo
function Saludo(){
    let Nombre = prompt("Hola, por favor ingrese su nombre")
    alert("Bienvenido " + Nombre)
}

//Inicio
Saludo()
let Opcion = Number(prompt("Por favor elija una opción:\n1.- Mostrar alumnos/as.\n2.- Ver calificaciones.\n3.- Ver asistencia.\n4.- Ver promedio.\n5.- Agregar alumno/a.\n6.- Salir.")) 

//Acciones
do {
    if (Opcion === 1){
        listar(datos)
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
        }
    } 
} while (Opcion == 0);

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
