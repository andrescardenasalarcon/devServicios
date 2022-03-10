"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexionBD_1 = __importDefault(require("../../configuracion/conexion/conexionBD"));
class PensumsDAO_Actualizar {
    static actualizarPensum(sqlActualizarYa, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            {
                yield conexionBD_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                    return yield consulta.result(sqlActualizarYa, parametros);
                }))
                    .then((respuesta) => {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Pensum Actualizada' });
                })
                    .catch((mierror) => {
                    console.log(mierror);
                    res.status(400).json({ respuesta: 'Error actualizando Pensum' });
                });
            }
        });
    }
}
exports.default = PensumsDAO_Actualizar;
