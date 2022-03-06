"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestresDAO_1 = __importDefault(require("../daos/SemestresDAO"));
const semestres_sql_1 = require("../repositorios/semestres_sql");
class ControladorSemestres extends SemestresDAO_1.default {
    demeLosSemestres(req, res) {
        ControladorSemestres.obtenerSemestres(semestres_sql_1.SQL_SEMESTRE.TODO, [], res);
    }
    grabarSemsetre(req, res) {
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre];
        ControladorSemestres.crearSemestre(semestres_sql_1.SQL_SEMESTRE.CONFIRMAR, semestres_sql_1.SQL_SEMESTRE.CREAR, parametro, res);
    }
}
const controladorSemestres = new ControladorSemestres();
exports.default = controladorSemestres;
