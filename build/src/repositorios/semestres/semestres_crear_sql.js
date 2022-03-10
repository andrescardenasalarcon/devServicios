"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_SEMESTRE_CREAR = void 0;
exports.SQL_SEMESTRE_CREAR = {
    CREAR: 'INSERT INTO semestres(nombre_semestre) VALUES($1) RETURNING semestres',
    CONFIRMAR: 'SELECT COUNT(cod_semestre) as Cantidad FROM semestres s \
    WHERE s.nombre_semestre =lower($1)',
};
