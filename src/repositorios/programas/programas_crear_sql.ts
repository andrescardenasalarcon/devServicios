export const SQL_PROGRAMA_CREAR = {
    CREAR: 'INSERT INTO programas(nombre_programa) VALUES($1) RETURNING cod_programa',

    CONFIRMAR: 'SELECT COUNT(cod_programa) as Cantidad FROM programas p \
    WHERE p.nombre_programa = lower($1)',
}