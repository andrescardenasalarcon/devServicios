"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PensumsDAO_Actualizar_1 = __importDefault(require("../../daos/pensums/PensumsDAO_Actualizar"));
const pensums_actualizar_sql_1 = require("../../repositorios/pensums/pensums_actualizar_sql");
class PensumsControlador_Actualizar extends PensumsDAO_Actualizar_1.default {
    actualizarPensums(req, res) {
        const codigoP = req.body.codPensum;
        const codigoPro = req.body.codPrograma;
        const nombre = req.body.nombrePensum;
        const parametro = [codigoP, codigoPro, nombre];
        PensumsControlador_Actualizar.actualizarPensum(pensums_actualizar_sql_1.SQL_PENSUM_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const pensumsControlador_Actualizar = new PensumsControlador_Actualizar();
exports.default = pensumsControlador_Actualizar;
