"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramasDAO_1 = __importDefault(require("../daos/ProgramasDAO"));
const programas_sql_1 = require("../repositorios/programas_sql");
class ControladorProgramas extends ProgramasDAO_1.default {
    demeLosProgramas(req, res) {
        ControladorProgramas.obtenerProgramas(programas_sql_1.SQL_PROGRAMA.TODO, [], res);
    }
    averGrabalo(req, res) {
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre];
        ControladorProgramas.crearProgramas(programas_sql_1.SQL_PROGRAMA.CONFIRMAR, programas_sql_1.SQL_PROGRAMA.CREAR, parametro, res);
    }
}
const controladorProgramas = new ControladorProgramas();
exports.default = controladorProgramas;
