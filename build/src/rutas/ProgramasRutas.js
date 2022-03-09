"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProgramaControlador_Buscar_1 = __importDefault(require("../controladores/programas/ProgramaControlador_Buscar"));
const ProgramaControlado_Actualizar_1 = __importDefault(require("../controladores/programas/ProgramaControlado_Actualizar"));
const ProgramaControlador_crear_1 = __importDefault(require("../controladores/programas/ProgramaControlador_crear"));
const ProgramaControlador_Borrar_1 = __importDefault(require("../controladores/programas/ProgramaControlador_Borrar"));
const ProgramasControlador_Mostrar_1 = __importDefault(require("../controladores/programas/ProgramasControlador_Mostrar"));
class ProgramasRutas {
    constructor() {
        this.rutaProgramasApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaProgramasApi.get('/obtenerprograma', ProgramasControlador_Mostrar_1.default.demeLosProgramas);
        this.rutaProgramasApi.post('/programas/crear', ProgramaControlador_crear_1.default.averGrabalo);
        this.rutaProgramasApi.put('/programas/actualizar', ProgramaControlado_Actualizar_1.default.actualizalo);
        this.rutaProgramasApi.get('/obtenerprograma/:elCodigo', ProgramaControlador_Buscar_1.default.busqueUno);
        this.rutaProgramasApi.delete('/obtenerprograma/:elCodigo', ProgramaControlador_Borrar_1.default.borrarUno);
    }
}
const programasRutas = new ProgramasRutas();
exports.default = programasRutas.rutaProgramasApi;
