'use strict';


/**
 * Elimina un profesor existente
 *
 * id BigDecimal ID del profesor a eliminar
 * returns ExitoProfesorModificar
 **/
exports.borrarprofesorIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "apellido" : "apellido",
  "id_carrera" : 0,
  "nombre" : "nombre",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Agrega un Profesor a la base de datos.
 * Peticion de tipo POST al EndPoint, para agregar un profesor a la base de Datos.
 *
 * body BodyProfesorPost Agregar Profesor.
 * returns ExitoProfesorPost
 **/
exports.guardarProfesor. = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "apellido" : "apellido",
  "id_carrera" : 6,
  "id_profesor" : 0,
  "nombre" : "nombre",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Consulta a la base de datos todos los proefesores existentes en ella.
 * Peticion del cliente a la api para obtener todos los clientes en la base de datos.
 *
 * returns ExitoProfesorPost
 **/
exports.listasProfesores. = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "apellido" : "apellido",
  "id_carrera" : 6,
  "id_profesor" : 0,
  "nombre" : "nombre",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modificar un profesor existente
 *
 * body BodyProfesorPost Agregar Profesor.
 * id BigDecimal ID del profesor a modificar
 * returns ExitoProfesorModificar
 **/
exports.modificarprofesorIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "apellido" : "apellido",
  "id_carrera" : 0,
  "nombre" : "nombre",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

