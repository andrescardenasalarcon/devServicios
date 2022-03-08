"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MATERIA = void 0;
exports.SQL_MATERIA = {
    TODO: 'SELECT m.cod_materia, m.nombre_materia, m.referenacia_materia FROM materias m',
    CREAR: 'INSERT INTO materias(nombre_materia,referenacia_materia) VALUES($1,$2) RETURNING cod_materia',
    CONFIRMAR: 'SELECT COUNT(cod_materia) as Cantidad FROM materias m \
    WHERE m.nombre_materia AND m.referencia_materia = lower($1,$2)'
};
