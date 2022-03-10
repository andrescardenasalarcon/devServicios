"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PensumsDAO_Mostrar_1 = __importDefault(require("../../daos/pensums/PensumsDAO_Mostrar"));
const pensums_mostrar_sql_1 = require("../../repositorios/pensums/pensums_mostrar_sql");
class PensumsControlador_Mostrar extends PensumsDAO_Mostrar_1.default {
    mostrarPensums(req, res) {
        PensumsControlador_Mostrar.mostrarPensum(pensums_mostrar_sql_1.SQL_PENSUM_MOSTRAR.TODO, [], res);
    }
}
const pensumsControlador_Mostrar = new PensumsControlador_Mostrar();
exports.default = pensumsControlador_Mostrar;
