"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestresDAO_borrar_1 = __importDefault(require("../../daos/semestres/SemestresDAO_borrar"));
const semestres_borrar_sql_1 = require("../../repositorios/semestres/semestres_borrar_sql");
class SemestreControlador_Borrar extends SemestresDAO_borrar_1.default {
    borrarSemestre(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        SemestreControlador_Borrar.eliminarSemestre(semestres_borrar_sql_1.SQL_SEMESTRE_BORRAR.BORRAR, parametro, res);
    }
}
const semestreControlador_Borrar = new SemestreControlador_Borrar();
exports.default = semestreControlador_Borrar;
