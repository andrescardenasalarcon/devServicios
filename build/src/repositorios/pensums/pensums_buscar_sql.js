"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PENSUM_BUSCAR = void 0;
exports.SQL_PENSUM_BUSCAR = {
    BUSCAR: 'SELECT p.cod_pensum, p.cod_programa, p.nombre_pensum FROM pensums p WHERE cod_pensum = $1',
};
