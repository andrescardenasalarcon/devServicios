"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProgramaControlador_1 = __importDefault(require("../controladores/ProgramaControlador"));
class ProgramasRutas {
    constructor() {
        this.rutaProgramasApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaProgramasApi.get('/listaprogramas', ProgramaControlador_1.default.demeLosProgramas);
        this.rutaProgramasApi.post('/programas/crear', ProgramaControlador_1.default.averGrabalo);
    }
}
const programasRutas = new ProgramasRutas();
exports.default = programasRutas.rutaProgramasApi;
