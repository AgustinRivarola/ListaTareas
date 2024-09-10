const prompt = require('prompt-sync')();
function main(){
let tareas = [];
let opcion, titulo = [], descripcion = [], estado = [], creacion = [], edicion = [], vencimiento = [], dificultad = [];
do{
    menu();
    opcion = prompt('');
    switch(opcion){
        case "1":
            break;
        case "2":
            break;
        case "3":
           [titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad] = agregarTarea(titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad);

            break;
        case "4":
            break;
        default: 
         console.log(" Ingrese una opcion valida");
            break;
    }
}while(opcion =! 4)
}
function menu(){
    console.log(" Bienvenid@ !!")
    console.log('');
    console.log('Seleccione la opcion que desea realizar ');
    console.log('[1] Ver mis Tareas');
    console.log('[2] Buscar una Tarea ');
    console.log('[3] Agregar una Tarea ');
    console.log('[4] Salir');
}
function agregarTarea(titulo, descripcion, estado, creacion, edicion, vencimiento, dificultad){
    let auxiliar;
    const fechaCreacion = new Date();

    console.log("Estas Creando una nueva tarea...");
    auxiliar = prompt("1. Ingrese el Titulo : ");
    while (auxiliar.length > 100 || auxiliar.length == 0){
        console.clear();
        console.log("El Titulo ingresado es correcto, Ingrese nuevamente ");
        auxiliar = prompt(" Ingrese el Titulo : ");

    }
    titulo.push(auxiliar);
    auxiliar = prompt("2. Ingrese la descripcion : ");
    while (auxiliar.length > 500 ){
        console.clear();
        console.log(" Supera la Cantidad maxima permitida de caracteres ");
        auxiliar = prompt("Ingrese nuevamente la Descripcion : ");
    }
    descripcion.push(auxiliar);
    auxiliar = prompt("3. Estado ([P]endiente / [E]n curso) / [T]erminada / [C]ancelada: ");
    auxiliar = auxiliar.toUpperCase();
    while(!(auxiliar === 'P') || (auxiliar === 'E') || (auxiliar === 'T') || (auxiliar === 'C') || (auxiliar.length === 0)){
        console.clear();
        auxiliar = prompt("Ingrese una opcion correcta Estado ([P]endiente / [E]n curso) / [T]erminada / [C]ancelada: ");
        auxiliar = auxiliar.toUpperCase;
    }
    if (auxiliar.length === 0 ){
        estado.push(auxiliar);
    }
    else{
        estado.push(auxiliar);
    }
    auxiliar = prompt("4. Vencimiento (DD/MM/AAAA): ");
    while(auxiliar !== null){
        if(auxiliar === ''){
            vencimiento.push("SIN DATOS");
            break;
        }
        else{
            if (isValidDate(auxiliar)){
                var parsedDate = new Date(variable.split("/").reverse().join("-"));
                vencimiento.push(parsedDate);
                break;
            }
            else{
                console.log("¡¡ Ingrese una fecha valida !! ");
                auxiliar = prompt("Vencimiento (DD/MM/AAAA) ");
            }
        }
    }
    auxiliar = prompt("5. Dificultad ([F]ácil / [M]edio / [D]ificil):")
    auxiliar = auxiliar.toUpperCase();
    while(!(auxiliar === 'F') || (auxiliar === 'M') || (auxiliar === 'D') || (auxiliar.length === 0)){
        console.clear();
        auxiliar = prompt(" Ingrese una opcion correcta de Dificultad ([F]ácil / [M]edio / [D]ificil)");
        auxiliar = auxiliar.toUpperCase;
    }
    if(auxiliar.length === 0){
        dificultad.push(auxiliar);
    }
     else{
            dificultad.push(auxiliar);
     }
     fechaCreacion.setDate(fechaCreacion.getDate() - 1);
     creacion.push(fechaCreacion);
     console.log();
     console.log("¡Datos guardados!");
     console.log();





 








}
main();
