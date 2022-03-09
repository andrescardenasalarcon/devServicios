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
    busqueUno(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ControladorProgramas.encontrarPorId(programas_sql_1.SQL_PROGRAMA.CARGAR, parametro, res);
    }
    borrarUno(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ControladorProgramas.eliminarPorId(programas_sql_1.SQL_PROGRAMA.BORRAR, parametro, res);
    }
}
const controladorProgramas = new ControladorProgramas();
exports.default = controladorProgramas;
