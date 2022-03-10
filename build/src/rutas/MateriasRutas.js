"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MateriasControlador_Actualizar_1 = __importDefault(require("../controladores/materias/MateriasControlador_Actualizar"));
const MateriasControlador_Borrar_1 = __importDefault(require("../controladores/materias/MateriasControlador_Borrar"));
const MateriasControlador_Buscar_1 = __importDefault(require("../controladores/materias/MateriasControlador_Buscar"));
const MateriasControlador_Crear_1 = __importDefault(require("../controladores/materias/MateriasControlador_Crear"));
const MateriasControlador_Mostrar_1 = __importDefault(require("../controladores/materias/MateriasControlador_Mostrar"));
class MateriasRutas {
    constructor() {
        this.rutaMateriasApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaMateriasApi.get('/listamaterias', MateriasControlador_Mostrar_1.default.demeLasMaterias);
        this.rutaMateriasApi.post('/crear', MateriasControlador_Crear_1.default.grabarMateria);
        this.rutaMateriasApi.put('/actualizar', MateriasControlador_Actualizar_1.default.actualizarMateria);
        this.rutaMateriasApi.post('/listamaterias/:elCodigo', MateriasControlador_Buscar_1.default.buscarMateria);
        this.rutaMateriasApi.delete('/listamaterias/:elCodigo', MateriasControlador_Borrar_1.default.borrarMateria);
    }
}
const materiasRutas = new MateriasRutas();
exports.default = materiasRutas.rutaMateriasApi;
