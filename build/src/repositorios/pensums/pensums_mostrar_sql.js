"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PENSUM_MOSTRAR = void 0;
exports.SQL_PENSUM_MOSTRAR = {
    TODO: 'select pe.cod_pensum, pe.nombre_pensum, pr.nombre_programa from pensums pe INNER JOIN programas pr ON pe.cod_programa = pr.cod_programa;',
};
