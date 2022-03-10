"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestresDAO_mostrar_1 = __importDefault(require("../../daos/semestres/SemestresDAO_mostrar"));
const semestres_mostrar_sql_1 = require("../../repositorios/semestres/semestres_mostrar_sql");
class SemestreControlador_Mostrar extends SemestresDAO_mostrar_1.default {
    mostrarLosSemestres(req, res) {
        SemestreControlador_Mostrar.mostrarSemestres(semestres_mostrar_sql_1.SQL_SEMESTRE_MOSTRAR.TODO, [], res);
    }
}
const semestreControlador_Mostrar = new SemestreControlador_Mostrar();
exports.default = semestreControlador_Mostrar;
