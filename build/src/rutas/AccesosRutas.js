"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AccesosControlador_1 = __importDefault(require("../controladores/accesos/AccesosControlador"));
class AccesosRutas {
    constructor() {
        this.rutaAccesoApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaAccesoApi.post('/accesos', AccesosControlador_1.default.busqueUnoAcceso);
    }
}
const accesosRutas = new AccesosRutas();
exports.default = accesosRutas.rutaAccesoApi;
