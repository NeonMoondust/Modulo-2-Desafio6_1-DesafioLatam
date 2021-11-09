class Propietario{
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    datosPropietario(){
        return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion}, y el numero telefonico de contacto: ${this._telefono}`
    }
}
class Animal extends Propietario{
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo(){return `El tipo de animal es un: ${this._tipo}`;}
}
class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombre_mascota, enfermedad){
        super(nombre, direccion, telefono, tipo);
        this._nombre_mascota = nombre_mascota;
        this._enfermedad = enfermedad;
    }
    get nombre_mascota(){return `, mientras que el nombre de la mascota es: ${this._nombre_mascota}`;}
    set nombre_mascota(nombre_mascota){this._nombre_mascota = nombre_mascota;}

    get enfermedad(){return ` y la enfermedad es: ${this._enfermedad}`;}
    set enfermedad(enfermedad){this._enfermedad = enfermedad;}
}

function getDataForm() {
    let nombre_propietario = document.getElementById('propietario').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    return new Mascota(nombre_propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
}

function deployData(data_obj) {
    const ul = document.querySelector('ul');
    while(ul.firstChild){ul.removeChild(ul.firstChild);}

    ul.appendChild(document.createElement('li')).innerHTML = data_obj.datosPropietario();
    ul.appendChild(document.createElement('li')).innerHTML = data_obj.tipo + data_obj.nombre_mascota + data_obj.enfermedad;
}

document.querySelector('form').onsubmit = (e) =>{
    e.preventDefault();
    deployData(getDataForm());
}