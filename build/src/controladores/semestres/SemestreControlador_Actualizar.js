"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestresDAO_actualizar_1 = __importDefault(require("../../daos/semestres/SemestresDAO_actualizar"));
const semestres_actualizar_sql_1 = require("../../repositorios/semestres/semestres_actualizar_sql");
class SemestreControlador_Actualizar extends SemestresDAO_actualizar_1.default {
    actualizarSemestre(req, res) {
        const codigo = req.body.codSemestre;
        const nombre = req.body.nombreSemestre;
        const parametro = [codigo, nombre];
        SemestreControlador_Actualizar.actualizarSemestre(semestres_actualizar_sql_1.SQL_SEMESTRE_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const semestreControlador_Actualizar = new SemestreControlador_Actualizar();
exports.default = semestreControlador_Actualizar;
