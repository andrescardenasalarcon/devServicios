"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PensumsDAO_Buscar_1 = __importDefault(require("../../daos/pensums/PensumsDAO_Buscar"));
const pensums_buscar_sql_1 = require("../../repositorios/pensums/pensums_buscar_sql");
class PensumsControlador_Buscar extends PensumsDAO_Buscar_1.default {
    buscarPensums(req, res) {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        PensumsControlador_Buscar.buscarPensum(pensums_buscar_sql_1.SQL_PENSUM_BUSCAR.BUSCAR, parametro, res);
    }
}
const pensumsControlador_Buscar = new PensumsControlador_Buscar();
exports.default = pensumsControlador_Buscar;
