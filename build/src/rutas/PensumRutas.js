"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PensumsControlador_Actualizar_1 = __importDefault(require("../controladores/pensums/PensumsControlador_Actualizar"));
const PensumsControlador_Borrar_1 = __importDefault(require("../controladores/pensums/PensumsControlador_Borrar"));
const PensumsControlador_Buscar_1 = __importDefault(require("../controladores/pensums/PensumsControlador_Buscar"));
const PensumsControlador_Crear_1 = __importDefault(require("../controladores/pensums/PensumsControlador_Crear"));
const PensumsControlador_Mostrar_1 = __importDefault(require("../controladores/pensums/PensumsControlador_Mostrar"));
class PensumRutas {
    constructor() {
        this.rutaPensumApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaPensumApi.get('/obtenerpensum', PensumsControlador_Mostrar_1.default.mostrarPensums);
        this.rutaPensumApi.post('/crear', PensumsControlador_Crear_1.default.grabarPensum);
        this.rutaPensumApi.get('/obtenerpensum/:elCodigo', PensumsControlador_Buscar_1.default.buscarPensums);
        this.rutaPensumApi.delete('/obtenerpensum/:elCodigo', PensumsControlador_Borrar_1.default.borrarUnPensum);
        this.rutaPensumApi.put('/actualizar', PensumsControlador_Actualizar_1.default.actualizarPensums);
    }
}
const pensumRutas = new PensumRutas();
exports.default = pensumRutas.rutaPensumApi;
