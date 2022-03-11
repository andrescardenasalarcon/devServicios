"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ACCESO_BUSCAR = void 0;
exports.SQL_ACCESO_BUSCAR = {
    CARGAR: 'SELECT cod_accesos FROM accesos WHERE correo_acceso = $1 AND clave_acceso = $2',
};
