import { Request,Response } from "express";
import ProgramaDAO_crear from "../../daos/programas/ProgramaDAO_crear";
import { SQL_PROGRAMA_CREAR } from "../../repositorios/programas/programas_crear_sql";

class ProgramaControlador_crear extends ProgramaDAO_crear{
    public averGrabalo(req: Request, res: Response): void {
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre]
        ProgramaControlador_crear.crearProgramas(SQL_PROGRAMA_CREAR.CONFIRMAR, SQL_PROGRAMA_CREAR.CREAR, parametro, res);
    };
}
const programaControlador_crear = new ProgramaControlador_crear();
export default programaControlador_crear;