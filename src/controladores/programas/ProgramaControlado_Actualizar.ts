import { Request, Response } from "express";
import ProgramasDAO_actualizar from "../../daos/programas/programaDAO_actualizar";
import { SQL_PROGRAMAS_ACTUALIZAR } from "../../repositorios/programas/programas_actualizar_sql";

class ProgramaControlador_Actualizar extends ProgramasDAO_actualizar {

    public actualizalo(req: Request, res: Response): void {
        const codigo = req.body.codPrograma;
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre,codigo];
        ProgramaControlador_Actualizar.actualizarPrograma(SQL_PROGRAMAS_ACTUALIZAR.YA,parametro, res);
    }
}
const programaControlador_Actualizar = new ProgramaControlador_Actualizar();
export default programaControlador_Actualizar;