import { Request, Response } from "express";
import ProgramaDAO_mostrar from "../../daos/programas/programaDAO_mostrar";
import { SQL_PROGRAMA_MOSTRAR } from "../../repositorios/programas/programas_mostrar_sql";

class PorgramasControlador_Mostrar extends ProgramaDAO_mostrar {
    public demeLosProgramas(req: Request, res: Response): void {
        PorgramasControlador_Mostrar.obtenerProgramas(SQL_PROGRAMA_MOSTRAR.TODO, [], res);
    }
}
const porgramasControlador_Mostrar = new PorgramasControlador_Mostrar();
export default porgramasControlador_Mostrar;
