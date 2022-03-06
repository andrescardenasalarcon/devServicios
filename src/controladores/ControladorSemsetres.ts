import { Request,Response } from "express";
import SemestresDAO from "../daos/SemestresDAO";
import { SQL_SEMESTRE } from "../repositorios/semestres_sql";

class ControladorSemestres extends SemestresDAO {
    public demeLosSemestres(req:Request,res:Response): void {
        ControladorSemestres.obtenerSemestres(SQL_SEMESTRE.TODO, [], res);

    }
    public grabarSemsetre(req: Request, res: Response): void {
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre];
        ControladorSemestres.crearSemestre(SQL_SEMESTRE.CONFIRMAR, SQL_SEMESTRE.CREAR, parametro, res);

    }
}
const controladorSemestres = new ControladorSemestres();
export default controladorSemestres;