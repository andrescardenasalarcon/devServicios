"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestresDAO_buscar_1 = __importDefault(require("../../daos/semestres/SemestresDAO_buscar"));
const semestres_buscar_sql_1 = require("../../repositorios/semestres/semestres_buscar_sql");
class SemestreControlador_Buscar extends SemestresDAO_buscar_1.default {
    buscarMateria(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        SemestreControlador_Buscar.encontrarSemestre(semestres_buscar_sql_1.SQL_SEMESTRE_BUSCAR.BUSCAR, parametro, res);
    }
}
const semestreControlador_Buscar = new SemestreControlador_Buscar();
exports.default = semestreControlador_Buscar;
