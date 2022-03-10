"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDAO_Actualizar_1 = __importDefault(require("../../daos/materias/MateriasDAO_Actualizar"));
const materias_actualizar_sql_1 = require("../../repositorios/materias/materias_actualizar_sql");
class MateriasControlador_Actualizar extends MateriasDAO_Actualizar_1.default {
    actualizarMateria(req, res) {
        const codigo = req.body.codMateria;
        const nombre = req.body.nombreMateria;
        const referencia = req.body.referenciaMateria;
        const parametro = [codigo, nombre, referencia];
        MateriasControlador_Actualizar.actualizarMateria(materias_actualizar_sql_1.SQL_MATERIAS_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const materiasControlador_Actualizar = new MateriasControlador_Actualizar();
exports.default = materiasControlador_Actualizar;
