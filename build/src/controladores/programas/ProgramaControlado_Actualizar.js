"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const programaDAO_actualizar_1 = __importDefault(require("../../daos/programas/programaDAO_actualizar"));
const programas_actualizar_sql_1 = require("../../repositorios/programas/programas_actualizar_sql");
class ProgramaControlador_Actualizar extends programaDAO_actualizar_1.default {
    actualizalo(req, res) {
        const codigo = req.body.codPrograma;
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre, codigo];
        ProgramaControlador_Actualizar.actualizarPrograma(programas_actualizar_sql_1.SQL_PROGRAMAS_ACTUALIZAR.YA, parametro, res);
    }
}
const programaControlador_Actualizar = new ProgramaControlador_Actualizar();
exports.default = programaControlador_Actualizar;
