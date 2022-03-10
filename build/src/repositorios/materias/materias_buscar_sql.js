"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MATERIA_BUSCAR = void 0;
exports.SQL_MATERIA_BUSCAR = {
    CARGAR: 'SELECT cod_materia, nombre_materia FROM materias WHERE cod_materia = $1',
};
