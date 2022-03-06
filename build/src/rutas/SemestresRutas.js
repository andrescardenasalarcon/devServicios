"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorSemsetres_1 = __importDefault(require("../controladores/ControladorSemsetres"));
class SemestresRutas {
    constructor() {
        this.rutaSemestresApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaSemestresApi.get('/listasemestres', ControladorSemsetres_1.default.demeLosSemestres);
        this.rutaSemestresApi.post('/semetres/crear', ControladorSemsetres_1.default.grabarSemsetre);
    }
}
const semestresRutas = new SemestresRutas();
exports.default = semestresRutas.rutaSemestresApi;
