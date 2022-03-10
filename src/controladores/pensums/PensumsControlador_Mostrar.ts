import { Request, Response } from "express";
import PensumsDAO_Mostrar from "../../daos/pensums/PensumsDAO_Mostrar";
import { SQL_PENSUM_MOSTRAR } from "../../repositorios/pensums/pensums_mostrar_sql";

class PensumsControlador_Mostrar extends PensumsDAO_Mostrar{
    public mostrarPensums(req: Request, res: Response): void {
        PensumsControlador_Mostrar.mostrarPensum(SQL_PENSUM_MOSTRAR.TODO, [], res);
    }
}
const pensumsControlador_Mostrar = new PensumsControlador_Mostrar();
export default pensumsControlador_Mostrar;