"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PensumDAO_1 = __importDefault(require("../daos/PensumDAO"));
const pensum_sql_1 = require("../repositorios/pensum_sql");
class ControladorPensums extends PensumDAO_1.default {
    demeLosPensums(req, res) {
        ControladorPensums.obtenerPensum(pensum_sql_1.SQL_PENSUM.TODO, [], res);
    }
    grabarPensum(req, res) {
        const id_Programa = req.body.codPrograma;
        const nombre = req.body.nombrePensum;
        const parametro = [id_Programa, nombre];
        ControladorPensums.crearPensum(pensum_sql_1.SQL_PENSUM.CONFIRMAR, pensum_sql_1.SQL_PENSUM.CREAR, parametro, res);
    }
    busqueUno(req, res) {
        const elCodigo = req.params.codigito;
        const parametro = [elCodigo];
        ControladorPensums.encontrarPorId(pensum_sql_1.SQL_PENSUM.CARGAR, parametro, res);
    }
    borrarUno(req, res) {
        const elCodigo = req.params.codigito;
        const parametro = [elCodigo];
        ControladorPensums.encontrarPorId(pensum_sql_1.SQL_PENSUM.BORRAR, parametro, res);
    }
}
const controladorPensums = new ControladorPensums();
exports.default = controladorPensums;
