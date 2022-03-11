export const SQL_ACCESO_CREAR = {

    CREAR: 'INSERT INTO accesos(correo_acceso,clave_acceso) VALUES($1,$2) RETURNING cod_accesos',

    CONFIRMAR: 'SELECT COUNT(cod_accesos) as Cantidad FROM accesos a \
    WHERE a.correo_acceso = lower($1)',
}