export const SQL_PENSUM_CREAR = {

    CREAR: 'INSERT INTO pensums(cod_programa,nombre_pensum) VALUES($1,$2) RETURNING cod_pensum',

    CONFIRMAR: 'SELECT COUNT(cod_pensum) as Cantidad FROM pensums p  WHERE lower(p.nombre_pensum) = lower($2)',
}