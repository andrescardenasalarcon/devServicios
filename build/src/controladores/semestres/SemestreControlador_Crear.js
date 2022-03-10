"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestresDAO_crear_1 = __importDefault(require("../../daos/semestres/SemestresDAO_crear"));
const semestres_crear_sql_1 = require("../../repositorios/semestres/semestres_crear_sql");
class SemestreControlador_Crear extends SemestresDAO_crear_1.default {
    grabarSemsetre(req, res) {
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre];
        SemestreControlador_Crear.crearSemestre(semestres_crear_sql_1.SQL_SEMESTRE_CREAR.CONFIRMAR, semestres_crear_sql_1.SQL_SEMESTRE_CREAR.CREAR, parametro, res);
    }
}
const semestreControlador_Crear = new SemestreControlador_Crear();
exports.default = semestreControlador_Crear;
