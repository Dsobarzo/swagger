'use strict';

var utils = require('../utils/writer.js');
var Profesores = require('../service/ProfesoresService');

module.exports.borrarprofesorIdDELETE = function borrarprofesorIdDELETE (req, res, next, id) {
  Profesores.borrarprofesorIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guardarProfesor. = function guardarProfesor. (req, res, next, body) {
  Profesores.guardarProfesor.(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listasProfesores. = function listasProfesores. (req, res, next) {
  Profesores.listasProfesores.()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modificarprofesorIdPUT = function modificarprofesorIdPUT (req, res, next, body, id) {
  Profesores.modificarprofesorIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
