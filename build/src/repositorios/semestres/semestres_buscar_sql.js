"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_SEMESTRE_BUSCAR = void 0;
exports.SQL_SEMESTRE_BUSCAR = {
    BUSCAR: 'SELECT cod_semestre, nombre_semestre FROM semestres WHERE cod_semestre = $1',
};
