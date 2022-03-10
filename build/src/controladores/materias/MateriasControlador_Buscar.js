"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDAO_buscar_1 = __importDefault(require("../../daos/materias/MateriasDAO_buscar"));
const materias_buscar_sql_1 = require("../../repositorios/materias/materias_buscar_sql");
class MateriasControlador_Buscar extends MateriasDAO_buscar_1.default {
    buscarMateria(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        MateriasControlador_Buscar.encontrarMateriaPorId(materias_buscar_sql_1.SQL_MATERIA_BUSCAR.CARGAR, parametro, res);
    }
}
const materiasControlador_Buscar = new MateriasControlador_Buscar();
exports.default = materiasControlador_Buscar;
