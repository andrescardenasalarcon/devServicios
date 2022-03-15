"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccesosDAO_Login_1 = __importDefault(require("../../daos/accesos/AccesosDAO_Login"));
const accesos_buscar_sql_1 = require("../../repositorios/accesos/accesos_buscar_sql");
class AccesosControlador extends AccesosDAO_Login_1.default {
    busqueUnoAcceso(req, res) {
        const correo = req.body.correoAcceso;
        const contra = req.body.claveAcceso;
        const role = req.body.codRoles;
        const parametro = [correo, contra, role];
        AccesosControlador.encontrarIdAcceso(accesos_buscar_sql_1.SQL_ACCESO_BUSCAR.CARGAR, parametro, res);
    }
}
const accesosControlador = new AccesosControlador();
exports.default = accesosControlador;
