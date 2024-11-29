//Rivarola Agustin

const prompt = require('prompt-sync')();

function main() {
    let opcion, titulo = [], descripcion = [], estado = [], creacion = [], edicion = [], vencimiento = [], dificultad = [];
    do {
        menu();
        opcion = prompt('');
        switch (opcion) {
            case "1":
                menutareas(titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad);
                break;
            case "2":
                buscarTareas(titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad);
                break;
            case "3":
                titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad = agregarTarea(titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad);
                break;
            case "4":
                break;
            default:
                console.log(" Ingrese una opcion valida");
                break;
        }
    } while (opcion != 4)
}
function menu() {
    console.clear();
    console.log(" Bienvenid@ !!")
    console.log('');
    console.log('Seleccione la opcion que desea realizar ');
    console.log('[1] Ver mis Tareas');
    console.log('[2] Buscar una Tarea ');
    console.log('[3] Agregar una Tarea ');
    console.log('[4] Salir');
}
function menutareas(titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad) {
    console.log("¿ Que tareas Deseas ver?");
    console.log('[1] Todas ');
    console.log('[2] Pendientes ');
    console.log('[3] En Curso ');
    console.log('[4] Terminadas ');
    console.log('[0] Volver ');
    opcion = prompt('');
    switch (opcion) {
        case "1":
            console.log(" Esta es tu Lista de tareas ");
            verTareaTodas(titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad);
            console.log(" Presione una tecla para continuar..");
            opcion = prompt('');
            break;
        case "2":
            console.log(" Esta es tu Lista de tareas Pendientes ");
            verTareas(titulo, descripcion, "P", estado, creacion, edicion, vencimiento, dificultad);
            console.log(" Presione una tecla para continuar..");
            opcion = prompt('');
            break;
        case "3":
            console.log(" Esta es tu Lista de tareas En Curso ");
            verTareas(titulo, descripcion, "E", estado, creacion, edicion, vencimiento, dificultad);
            console.log(" Presione una tecla para continuar..");
            opcion = prompt('');
            break;
        case "4":
            console.log(" Esta es tu Lista de tareas Terminadas ");
            verTareas(titulo, descripcion, "T", estado, creacion, edicion, vencimiento, dificultad);
            console.log(" Presione una tecla para continuar..");
            opcion = prompt('');
            break;
        default:
            console.log(" Ingrese una Opcion Correcta nuevamente");
            console.log(" Presione una tecla para continuar..");
            opcion = prompt('');
            break;
    }
}
function verTareaTodas(titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad) {
    for (i = 0; i < titulo.length; i++) {
        console.log(`[${i+1}] ${titulo[i]}`);
        //console.log(`${}`)
    }
    preguntarDetalles(titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad);
}
function verTareas(titulo, descripcion, estadito, estado, creacion, edicion, vencimiento, dificultad) {

    for (i = 0; i < titulo.length; i++) {
        if (estado[i] === estadito) {
            console.log(`[${i+1}] ${titulo[i]}`);
        }
    }
    preguntarDetalles(titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad);
}
function agregarTarea(titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad) {
    let auxiliar = "";
    const fechaCreacion = new Date();

    console.log("Estas Creando una nueva tarea...");
    auxiliar = prompt("1. Ingrese el Titulo : ");
    while (auxiliar.length > 100 || auxiliar.length == 0) {
        console.clear();
        console.log("El Titulo ingresado es incorrecto, Ingrese nuevamente ");
        auxiliar = prompt(" Ingrese el Titulo : ");

    }
    titulo.push(auxiliar);
    auxiliar = prompt("2. Ingrese la descripcion : ");
    while (auxiliar.length > 500) {
        console.clear();
        console.log(" Supera la Cantidad maxima permitida de caracteres ");
        auxiliar = prompt("Ingrese nuevamente la Descripcion : ");
    }
    descripcion.push(auxiliar);
    auxiliar = prompt("3. Estado ([P]endiente / [E]n curso) / [T]erminada / [C]ancelada: ");
    auxiliar = auxiliar.toUpperCase();
    while (!((auxiliar === 'P') || (auxiliar === 'E') || (auxiliar === 'T') || (auxiliar === 'C') || (auxiliar.length === 0))) {
        console.clear();
        auxiliar = prompt("Ingrese una opcion correcta Estado ([P]endiente / [E]n curso) / [T]erminada / [C]ancelada: ");
        auxiliar = auxiliar.toUpperCase();
    }
    if (auxiliar.length === 0) {
        auxiliar = 'P';
        estado.push(auxiliar);
    }
    else {
        estado.push(auxiliar);
    }

    auxiliar = prompt("4. Vencimiento (DD/MM/AAAA): ");
    while (auxiliar !== null) {
        if (auxiliar === '') {
            vencimiento.push("SIN DATOS");
            break;
        }
        else {
            if (isValidDate(auxiliar)) {
                var parsedDate = new Date(auxiliar.split("/").reverse().join("-"));
                vencimiento.push(parsedDate);
                break;
            }
            else {
                console.log("¡¡ Ingrese una fecha valida !! ");
                auxiliar = prompt("Vencimiento (DD/MM/AAAA) ");
            }
        }
    }
    auxiliar = prompt("5. Dificultad ([F]ácil / [M]edio / [D]ificil):")
    auxiliar = auxiliar.toUpperCase();
    while (!((auxiliar === 'F') || (auxiliar === 'M') || (auxiliar === 'D') || (auxiliar.length === 0))) {
        console.clear();
        auxiliar = prompt(" Ingrese una opcion correcta de Dificultad ([F]ácil / [M]edio / [D]ificil):");
        auxiliar = auxiliar.toUpperCase();
    }
    if (auxiliar.length === 0) {
        auxiliar ='F';
        dificultad.push(auxiliar);
    }
    else {
        dificultad.push(auxiliar);
    }
    fechaCreacion.setDate(fechaCreacion.getDate() - 1);
    creacion.push(fechaCreacion);
    edicion.push(fechaCreacion);
    console.log("");
    console.log("¡Datos guardados!");
    console.log(" Presione una tecla para continuar..");
    opcion = prompt('');
    return (titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad);
}

function isValidDate(dateString) {
    var dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dateRegex.test(dateString)) {
        return false;
    }

    var dateParts = dateString.split("/");
    var day = parseInt(dateParts[0], 10);
    var month = parseInt(dateParts[1], 10) - 1;
    var year = parseInt(dateParts[2], 10);
    var testDate = new Date(year, month, day);

    return testDate.getDate() === day && testDate.getMonth() === month && testDate.getFullYear() === year;
}
function preguntarDetalles(titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad) {
    let otp;
    console.log(" ¿Quieres ver los detalles de alguna tarea? ");
    console.log("Introduce el numero para verla o 0 para volver");
    otp = prompt('');
    if(otp==="0"){
        menu();
    }
    else{
        while(otp>titulo.length || otp<"0"){
            console.log(" No Existe esa Tarea, Ingresela Nuevamente ");
            otp = prompt('');
        }
        parseInt(otp);
        otp=otp-1;
        Detalles(otp,titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad);
    }
}

function Detalles(otp, titulos, descripciones, estados, creaciones, ediciones, vencimientos, dificultades) {
    console.log("Esta es la tarea que elegiste:");
    console.log(`Título: [${titulos[otp]}]`);
    console.log(`Descripción: [${descripciones[otp]}]`);
    console.log(`Estado: [${estados[otp]}]`);
    console.log(`Dificultad: [${dificultades[otp]}]`);
    console.log(`Vencimiento: [${vencimientos[otp]}]`);
    console.log(`Creación: [${creaciones[otp]}]`);
    console.log(`Última Edición: [${ediciones[otp]}]`);

    console.log("Si deseas editarla, presiona 'E'. O presiona '0' para volver.");
    let opcion = prompt('').toUpperCase();

    while (opcion !== 'E' && opcion !== '0') {
        console.log("Opción inválida. Por favor, ingresa 'E' para editar o '0' para volver.");
        opcion = prompt('').toUpperCase();
    }

    if (opcion === '0') {
        menu(); // Supongo que tienes una función `menu` en tu código.
    } else if (opcion === 'E') {
        Edicion(
            otp, 
            titulos, descripciones, estados, 
            creaciones, ediciones, vencimientos, dificultades
        );
    }
}

function Edicion(otp,titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad){
    let auxiliar;
    console.log(` Estas editando la tarea : [${titulo[otp]}]`);
    console.log("  - Si deseas mantener los valores de un atributo, simplemente dejalo en blanco. ");
    console.log("  - Si deseas dejar en blanco un atributo, escribe un espacio");
    auxiliar = prompt("1- Ingrese la descripcion : ");
    if(auxiliar!=""){
        descripcion[otp]=auxiliar;
    }
    auxiliar = prompt("2- Estado ([P]endiente / [E]n curso) / [T]erminada / [C]ancelada: ");
    auxiliar = auxiliar.toUpperCase();
    if(auxiliar!=""){
        estado[otp]=auxiliar;
    }
    auxiliar = prompt("3- Dificultad ([F]ácil / [M]edio / [D]ificil):")
    auxiliar = auxiliar.toUpperCase();
    if(auxiliar!=""){
        dificultad[otp]=auxiliar;
    }
    auxiliar = prompt("4. Vencimiento (DD/MM/AAAA): ");
    if(auxiliar!=""){
        vencimiento[otp]=auxiliar;
    }

}
function buscarTareas(titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad) {
    const buscar = prompt("Ingresa una parte del título de la tarea a buscar: ");
    const resultados = [];

    for (let i = 0; i < titulo.length; i++) {
        if (titulo[i].toLowerCase().includes(buscar.toLowerCase())) {
            resultados.push({
                index: i,
                title: titulo[i],
                description: descripcion[i],
                status: estado[i],
                creationDate: creacion[i],
                editDate: edicion[i],
                dueDate: vencimiento[i],
                difficulty: dificultad[i]
            });
        }
    }

    if (resultados.length > 0) {
        console.log("Tareas encontradas:");
        resultados.forEach(tarea => {
            console.log(`[${tarea.index + 1}] ${tarea.title}`);
        });
    } else {
        console.log(" No hay tareas relacionadas con esa busqueda");
    }
    preguntarDetalles(titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad);

}
main();
