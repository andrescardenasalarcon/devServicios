import { Request, Response } from "express";
import SemestresDAO_crear from "../../daos/semestres/SemestresDAO_crear";
import { SQL_SEMESTRE_CREAR } from "../../repositorios/semestres/semestres_crear_sql";

class SemestreControlador_Crear extends SemestresDAO_crear {
    public grabarSemsetre(req: Request, res: Response): void {
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre];
        SemestreControlador_Crear.crearSemestre(SQL_SEMESTRE_CREAR.CONFIRMAR, SQL_SEMESTRE_CREAR.CREAR, parametro, res);
    }

}
const semestreControlador_Crear = new SemestreControlador_Crear();
export default semestreControlador_Crear;