export const SQL_PENSUM ={
    TODO:'select pe.cod_pensum, pe.nombre_pensum, pr.nombre_programa from pensums pe INNER JOIN programas pr ON pe.cod_programa = pr.cod_programa;',

    CREAR: 'INSERT INTO pensums(cod_pensum,cod_programa,nombre_pensum) VALUES($1,$2,$3) RETURNING cod_pensum',

    CONFIRMAR: 'SELECT COUNT(cod_pensum) as Cantidad FROM pensums p \
            WHERE p.nombre_pensum = lower($1',

    CARGAR: 'SELECT p.cod_pensum, p.cod_programa, p.nombre_pensum FROM pensums p WHERE cod_pensum = $1',

    BORRAR: 'DELETE FROM pensums WHERE cod_pensum = $1',


}