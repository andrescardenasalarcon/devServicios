export const SQL_MATERIA_CREAR = {

    CREAR: 'INSERT INTO materias(nombre_materia,referencia_materia) VALUES($1,$2) RETURNING cod_materia',
    CONFIRMAR: 'SELECT COUNT(cod_materia) as Cantidad FROM materias m \
    WHERE m.nombre_materia = lower($1)',
}