 //Datos
const DatosDeAlumnos = [
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
let Opcion 
let Mensaje = ("Por favor elija una opción:\n1.- Mostrar alumnos/as.\n2.- Ver calificaciones.\n3.- Ver asistencia.\n4.- Ver promedio.\n5.- Agregar alumno/a.\n6.- Salir.")

//Acciones
do {
    let Opcion = prompt(Mensaje)
    if (Opcion === 1)
        listarAlumnos (DatosDeAlumnos.Nombre)
} while (condition);
