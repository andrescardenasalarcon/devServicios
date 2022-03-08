"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDAO_1 = __importDefault(require("../daos/MateriasDAO"));
const materias_sql_1 = require("../repositorios/materias_sql");
class ControladorMaterias extends MateriasDAO_1.default {
    demeLasMaterias(req, res) {
        ControladorMaterias.obtenerMaterias(materias_sql_1.SQL_MATERIA.TODO, [], res);
    }
    grabarMateria(req, res) {
        const nombre = req.body.nombreMateria;
        const referencia = req.body.referenciaMateria;
        const parametro = [nombre, referencia];
        ControladorMaterias.crearMaterias(materias_sql_1.SQL_MATERIA.CONFIRMAR, materias_sql_1.SQL_MATERIA.CREAR, parametro, res);
    }
}
const controladorMaterias = new ControladorMaterias();
exports.default = controladorMaterias;
