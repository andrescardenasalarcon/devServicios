import { Request,Response } from "express";
import MateriasDAO_Crear from "../../daos/materias/MateriasDAO_Crear";
import { SQL_MATERIA_CREAR } from "../../repositorios/materias/materias_crear_sql";

class MateriasControlador_Crear extends MateriasDAO_Crear{
    public grabarMateria(req: Request, res: Response): void {
        const nombre = req.body.nombreMateria;
        const referencia = req.body.referenciaMateria;
        const parametro = [nombre, referencia];
        MateriasControlador_Crear.crearMaterias(SQL_MATERIA_CREAR.CONFIRMAR, SQL_MATERIA_CREAR.CREAR, parametro, res);

    }
}
const materiasControlador_Crear = new MateriasControlador_Crear();
export default materiasControlador_Crear;