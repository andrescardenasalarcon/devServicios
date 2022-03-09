"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const programaDAO_borrar_1 = __importDefault(require("../../daos/programas/programaDAO_borrar"));
const programas_borrar_sql_1 = require("../../repositorios/programas/programas_borrar_sql");
class ProgramaControlador_Borrar extends programaDAO_borrar_1.default {
    borrarUno(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ProgramaControlador_Borrar.eliminarPorId(programas_borrar_sql_1.SQL_PROGRAMA_BORRAR.BORRAR, parametro, res);
    }
}
const programaControlador_Borrar = new ProgramaControlador_Borrar();
exports.default = programaControlador_Borrar;
