import { Request, Response } from "express";
import SemestresDAO_actualizar from "../../daos/semestres/SemestresDAO_actualizar";
import { SQL_SEMESTRE_ACTUALIZAR } from "../../repositorios/semestres/semestres_actualizar_sql";

class SemestreControlador_Actualizar extends SemestresDAO_actualizar{
    public actualizarSemestre(req: Request, res: Response): void {
        const codigo = req.body.codSemestre;
        const nombre = req.body.nombreSemestre;
        const parametro = [codigo,nombre];
        SemestreControlador_Actualizar.actualizarSemestre(SQL_SEMESTRE_ACTUALIZAR.ACTUALIZAR,parametro, res);
    }
}
const semestreControlador_Actualizar = new SemestreControlador_Actualizar();
export default semestreControlador_Actualizar;