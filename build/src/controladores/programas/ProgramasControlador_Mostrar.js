"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const programaDAO_mostrar_1 = __importDefault(require("../../daos/programas/programaDAO_mostrar"));
const programas_mostrar_sql_1 = require("../../repositorios/programas/programas_mostrar_sql");
class PorgramasControlador_Mostrar extends programaDAO_mostrar_1.default {
    demeLosProgramas(req, res) {
        PorgramasControlador_Mostrar.obtenerProgramas(programas_mostrar_sql_1.SQL_PROGRAMA_MOSTRAR.TODO, [], res);
    }
}
const porgramasControlador_Mostrar = new PorgramasControlador_Mostrar();
exports.default = porgramasControlador_Mostrar;
