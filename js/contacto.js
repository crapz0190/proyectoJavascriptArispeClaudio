function capturar(){
    function Persona(nombre,apellido,correo,telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
    }
    let nombreCapturar = document.getElementById("nombre").value;
    let apellidoCapturar = document.getElementById("apellido").value;
    let correoCapturar = document.getElementById("correo").value;
    let telefonoCapturar = document.getElementById("telefono").value;

    nuevoSujeto = new Persona(nombreCapturar, apellidoCapturar, correoCapturar, telefonoCapturar);
    
    console.log(nuevoSujeto);
    agregar();
}

let baseDatos = [];
function agregar(){
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
};