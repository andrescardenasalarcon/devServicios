export const SQL_MATERIA = {
    TODO: 'SELECT m.cod_materia, m.nombre_materia, m.referencia_materia FROM materias m',

    CREAR: 'INSERT INTO materias(nombre_materia,referencia_materia) VALUES($1,$2) RETURNING cod_materia',

    CONFIRMAR: 'SELECT COUNT(cod_materia) as Cantidad FROM materias m\
    m.nombre_materia = lower($1)'
}