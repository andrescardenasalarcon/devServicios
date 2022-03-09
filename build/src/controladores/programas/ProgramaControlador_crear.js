"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramaDAO_crear_1 = __importDefault(require("../../daos/programas/ProgramaDAO_crear"));
const programas_crear_sql_1 = require("../../repositorios/programas/programas_crear_sql");
class ProgramaControlador_crear extends ProgramaDAO_crear_1.default {
    averGrabalo(req, res) {
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre];
        ProgramaControlador_crear.crearProgramas(programas_crear_sql_1.SQL_PROGRAMA_CREAR.CONFIRMAR, programas_crear_sql_1.SQL_PROGRAMA_CREAR.CREAR, parametro, res);
    }
    ;
}
const programaControlador_crear = new ProgramaControlador_crear();
exports.default = programaControlador_crear;
