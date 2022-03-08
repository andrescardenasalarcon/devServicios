"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorMaterias_1 = __importDefault(require("../controladores/ControladorMaterias"));
class MateriasRutas {
    constructor() {
        this.rutaMateriasApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaMateriasApi.get('/listamaterias', ControladorMaterias_1.default.demeLasMaterias);
        this.rutaMateriasApi.post('/crear', ControladorMaterias_1.default.grabarMateria);
    }
}
const materiasRutas = new MateriasRutas();
exports.default = materiasRutas.rutaMateriasApi;
