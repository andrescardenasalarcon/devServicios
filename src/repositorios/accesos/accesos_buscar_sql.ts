export const SQL_ACCESO_BUSCAR = {
    
    CARGAR: 'select cod_accesos, roles.cod_roles from accesos inner join roles on accesos.cod_roles = roles.cod_roles where  correo_acceso = $1 AND clave_acceso = $2 and roles.cod_roles = $3',

}