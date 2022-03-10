"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PensumsDAO_Borrar_1 = __importDefault(require("../../daos/pensums/PensumsDAO_Borrar"));
const pensums_borrar_sql_1 = require("../../repositorios/pensums/pensums_borrar_sql");
class PensumsControlador_Borrar extends PensumsDAO_Borrar_1.default {
    borrarUnPensum(req, res) {
        const elCodigo = req.params.elCodigo;
        const parametro = [elCodigo];
        PensumsControlador_Borrar.eliminarPensum(pensums_borrar_sql_1.SQL_PENSUM_BORRAR.BORRAR, parametro, res);
    }
}
const pensumsControlador_Borrar = new PensumsControlador_Borrar();
exports.default = pensumsControlador_Borrar;
