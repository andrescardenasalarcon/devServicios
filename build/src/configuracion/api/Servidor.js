"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const Validacion_1 = __importDefault(require("../../middleware/Validacion"));
const ProgramasRutas_1 = __importDefault(require("../../rutas/ProgramasRutas"));
const SemestresRutas_1 = __importDefault(require("../../rutas/SemestresRutas"));
const MateriasRutas_1 = __importDefault(require("../../rutas/MateriasRutas"));
const PensumRutas_1 = __importDefault(require("../../rutas/PensumRutas"));
const AccesosRutas_1 = __importDefault(require("../../rutas/AccesosRutas"));
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.iniciarConfiguracion();
        this.activarRutas();
    }
    iniciarConfiguracion() {
        this.app.set('PORT', 8088);
        this.app.use((0, cors_1.default)()); //Limitar quien entra
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json({ limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true })); //Para peticiones en rutas de todo tipo
    }
    activarRutas() {
        this.app.use('/appi/programas', ProgramasRutas_1.default);
        this.app.use('/appi/semestres', SemestresRutas_1.default);
        this.app.use('/appi/materias', Validacion_1.default.delToken, MateriasRutas_1.default);
        this.app.use('/appi/pensum', PensumRutas_1.default);
        this.app.use('/appi/accesos', AccesosRutas_1.default);
        this.app.use('/appi/privada/materias', Validacion_1.default.delToken, MateriasRutas_1.default);
    }
    iniciar() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVE !!!', this.app.get('PORT'));
        });
    }
}
exports.default = Servidor;
