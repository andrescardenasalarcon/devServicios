"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PensumsDAO_Crear_1 = __importDefault(require("../../daos/pensums/PensumsDAO_Crear"));
const pensums_crear_sql_1 = require("../../repositorios/pensums/pensums_crear_sql");
class PensumsControlador_Crear extends PensumsDAO_Crear_1.default {
    grabarPensum(req, res) {
        const id_Programa = req.body.codPrograma;
        const nombre = req.body.nombrePensum;
        const parametro = [id_Programa, nombre];
        PensumsControlador_Crear.crearPensum(pensums_crear_sql_1.SQL_PENSUM_CREAR.CONFIRMAR, pensums_crear_sql_1.SQL_PENSUM_CREAR.CREAR, parametro, res);
    }
}
const pensumsControlador_Crear = new PensumsControlador_Crear();
exports.default = pensumsControlador_Crear;
