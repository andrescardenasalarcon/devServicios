export const SQL_MATERIA = {
    TODO: 'SELECT m.cod_materia, m.nombre_materia, m.referenacia_materia FROM materias m',

    CREAR: 'INSERT INTO materias(nombre_materia,referenacia_materia) VALUES($1,$2) RETURNING cod_materia',

    CONFIRMAR: 'SELECT COUNT(cod_materia) as Cantidad FROM materias m \
    WHERE m.nombre_materia = lower($1)',
    
    CARGAR: 'SELECT cod_materia, nombre_materia FROM materias WHERE cod_materia = $1',

}