export const SQL_PROGRAMA = {
    TODO: 'select p.cod_programa,p.nombre_programa from programas p',

    CREAR: 'INSERT INTO programas(nombre_programa) VALUES($1) RETURNING cod_programa',

    CONFIRMAR: 'SELECT COUNT(cod_programa) as Cantidad FROM programas p \
    WHERE p.nombre_programa = lower($2)',

    CARGAR: 'SELECT cod_programa, nombre_programa FROM programas WHERE cod_programa = $1',

    BORRAR: 'DELETE FROM programas WHERE cod_programa = $1',

}