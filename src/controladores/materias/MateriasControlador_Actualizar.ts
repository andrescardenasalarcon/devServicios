import { Request, Response } from "express";
import MateriasDAO_Actualizar from "../../daos/materias/MateriasDAO_Actualizar";
import { SQL_MATERIAS_ACTUALIZAR } from "../../repositorios/materias/materias_actualizar_sql";

class MateriasControlador_Actualizar extends MateriasDAO_Actualizar{
    public actualizarMateria(req: Request, res: Response): void {
        const codigo = req.body.codMateria;
        const nombre = req.body.nombreMateria;
        const referencia = req.body.referenciaMateria;
        const parametro = [codigo,nombre,referencia];
        MateriasControlador_Actualizar.actualizarMateria(SQL_MATERIAS_ACTUALIZAR.ACTUALIZAR,parametro, res);
    }
}
const materiasControlador_Actualizar = new MateriasControlador_Actualizar();
export default materiasControlador_Actualizar;