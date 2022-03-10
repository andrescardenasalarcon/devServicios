export const SQL_SEMESTRE_CREAR = {

    CREAR: 'INSERT INTO semestres(nombre_semestre) VALUES($1) RETURNING semestres',
    
    CONFIRMAR: 'SELECT COUNT(cod_semestre) as Cantidad FROM semestres s \
    WHERE s.nombre_semestre =lower($1)',
}
