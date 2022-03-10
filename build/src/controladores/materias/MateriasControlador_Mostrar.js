"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDAO_mostrar_1 = __importDefault(require("../../daos/materias/MateriasDAO_mostrar"));
const materias_mostrar_sql_1 = require("../../repositorios/materias/materias_mostrar_sql");
class MateriasControlador_Mostrar extends MateriasDAO_mostrar_1.default {
    demeLasMaterias(req, res) {
        MateriasControlador_Mostrar.obtenerMaterias(materias_mostrar_sql_1.SQL_MATERIA_MOSTRAR.TODO, [], res);
    }
}
const materiasControlador_Mostrar = new MateriasControlador_Mostrar();
exports.default = materiasControlador_Mostrar;
