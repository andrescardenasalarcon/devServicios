"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramasDAO_buscar_1 = __importDefault(require("../../daos/programas/ProgramasDAO_buscar"));
const programas_buscar_sql_1 = require("../../repositorios/programas/programas_buscar_sql");
class ProgramaControlador_Buscar extends ProgramasDAO_buscar_1.default {
    busqueUno(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ProgramaControlador_Buscar.encontrarPorId(programas_buscar_sql_1.SQL_PROGRAMA_BUSCAR.CARGAR, parametro, res);
    }
}
const programaControlador_Buscar = new ProgramaControlador_Buscar();
exports.default = programaControlador_Buscar;
