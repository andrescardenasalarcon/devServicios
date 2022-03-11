"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccesosDAO_Buscar_1 = __importDefault(require("../../daos/accesos/AccesosDAO_Buscar"));
const accesos_buscar_sql_1 = require("../../repositorios/accesos/accesos_buscar_sql");
class AccesosControlador_Buscar extends AccesosDAO_Buscar_1.default {
    busqueUnoAcceso(req, res) {
        const correo = req.body.correoAcceso;
        const contra = req.body.claveAcceso;
        const parametro = [correo, contra];
        AccesosControlador_Buscar.encontrarIdAcceso(accesos_buscar_sql_1.SQL_ACCESO_BUSCAR.CARGAR, parametro, res);
    }
}
const accesosControlador_Buscar = new AccesosControlador_Buscar();
exports.default = accesosControlador_Buscar;
