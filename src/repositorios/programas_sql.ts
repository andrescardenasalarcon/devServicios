export const SQL_PROGRAMA = {
    TODO: 'select p.cod_programa,p.nombre_programa from programas p',


    CARGAR: 'SELECT cod_programa, nombre_programa FROM programas WHERE cod_programa = $1',

    BORRAR: 'DELETE FROM programas WHERE cod_programa = $1',

}