"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MATERIA_CREAR = void 0;
exports.SQL_MATERIA_CREAR = {
    CREAR: 'INSERT INTO materias(nombre_materia,referencia_materia) VALUES($1,$2) RETURNING cod_materia',
    CONFIRMAR: 'SELECT COUNT(cod_materia) as Cantidad FROM materias m \
    WHERE m.nombre_materia = lower($1)',
};
