"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDAO_Crear_1 = __importDefault(require("../../daos/materias/MateriasDAO_Crear"));
const materias_crear_sql_1 = require("../../repositorios/materias/materias_crear_sql");
class MateriasControlador_Crear extends MateriasDAO_Crear_1.default {
    grabarMateria(req, res) {
        const nombre = req.body.nombreMateria;
        const referencia = req.body.referenciaMateria;
        const parametro = [nombre, referencia];
        MateriasControlador_Crear.crearMaterias(materias_crear_sql_1.SQL_MATERIA_CREAR.CONFIRMAR, materias_crear_sql_1.SQL_MATERIA_CREAR.CREAR, parametro, res);
    }
}
const materiasControlador_Crear = new MateriasControlador_Crear();
exports.default = materiasControlador_Crear;
