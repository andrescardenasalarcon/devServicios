"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorPensums_1 = __importDefault(require("../controladores/ControladorPensums"));
class PensumRutas {
    constructor() {
        this.rutaPensumApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaPensumApi.get('/obtenerpensum', ControladorPensums_1.default.demeLosPensums);
        this.rutaPensumApi.post('/pensums/crear', ControladorPensums_1.default.grabarPensum);
        this.rutaPensumApi.get('/obtenerpensum/:elCodigo', ControladorPensums_1.default.busqueUno);
        this.rutaPensumApi.delete('/obtenerpensum/:elCodigo', ControladorPensums_1.default.borrarUno);
    }
}
const pensumRutas = new PensumRutas();
exports.default = pensumRutas.rutaPensumApi;
