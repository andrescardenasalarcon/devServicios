"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProgramaControlador_1 = __importDefault(require("../controladores/ProgramaControlador"));
const ProgramaControlado_Actualizar_1 = __importDefault(require("../controladores/programas/ProgramaControlado_Actualizar"));
const ProgramaControlador_crear_1 = __importDefault(require("../controladores/programas/ProgramaControlador_crear"));
class ProgramasRutas {
    constructor() {
        this.rutaProgramasApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaProgramasApi.get('/obtenerprograma', ProgramaControlador_1.default.demeLosProgramas);
        this.rutaProgramasApi.post('/programas/crear', ProgramaControlador_crear_1.default.averGrabalo);
        this.rutaProgramasApi.put('/programas/actualizar', ProgramaControlado_Actualizar_1.default.actualizalo);
        this.rutaProgramasApi.get('/obtenerprograma/:elCodigo', ProgramaControlador_1.default.busqueUno);
        this.rutaProgramasApi.delete('/obtenerprograma/:elCodigo', ProgramaControlador_1.default.borrarUno);
    }
}
const programasRutas = new ProgramasRutas();
exports.default = programasRutas.rutaProgramasApi;
