export const SQL_PENSUM_MOSTRAR = {
    TODO: 'select pe.cod_pensum, pe.nombre_pensum, pr.nombre_programa from pensums pe INNER JOIN programas pr ON pe.cod_programa = pr.cod_programa;',
}