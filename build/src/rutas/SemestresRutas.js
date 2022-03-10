"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SemestreControlador_Actualizar_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Actualizar"));
const SemestreControlador_Borrar_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Borrar"));
const SemestreControlador_Buscar_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Buscar"));
const SemestreControlador_Crear_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Crear"));
const SemestreControlador_Mostrar_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Mostrar"));
class SemestresRutas {
    constructor() {
        this.rutaSemestresApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaSemestresApi.get('/listasemestres', SemestreControlador_Mostrar_1.default.mostrarLosSemestres);
        this.rutaSemestresApi.post('/crear', SemestreControlador_Crear_1.default.grabarSemsetre);
        this.rutaSemestresApi.put('/actualizar', SemestreControlador_Actualizar_1.default.actualizarSemestre);
        this.rutaSemestresApi.post('/listasemestres/:elCodigo', SemestreControlador_Buscar_1.default.buscarMateria);
        this.rutaSemestresApi.delete('/listasemestres/:elCodigo', SemestreControlador_Borrar_1.default.borrarSemestre);
    }
}
const semestresRutas = new SemestresRutas();
exports.default = semestresRutas.rutaSemestresApi;
