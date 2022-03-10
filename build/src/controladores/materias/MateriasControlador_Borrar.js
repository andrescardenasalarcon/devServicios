"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDAO_Borrar_1 = __importDefault(require("../../daos/materias/MateriasDAO_Borrar"));
const materias_borrar_sql_1 = require("../../repositorios/materias/materias_borrar_sql");
class MateriasControlador_Borrar extends MateriasDAO_Borrar_1.default {
    borrarMateria(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        MateriasControlador_Borrar.eliminarPorId(materias_borrar_sql_1.SQL_MATERIA_BORRAR.BORRAR, parametro, res);
    }
}
const materiasControlador_Borrar = new MateriasControlador_Borrar();
exports.default = materiasControlador_Borrar;
