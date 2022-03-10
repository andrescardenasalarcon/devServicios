import { Request, Response } from "express";
import PensumsDAO_Borrar from "../../daos/pensums/PensumsDAO_Borrar";
import { SQL_PENSUM_BORRAR } from "../../repositorios/pensums/pensums_borrar_sql";

class PensumsControlador_Borrar extends PensumsDAO_Borrar{
    
    public borrarUnPensum(req: Request, res: Response): void {
        const elCodigo = req.params.elCodigo;
        const parametro = [elCodigo];
        PensumsControlador_Borrar.eliminarPensum(SQL_PENSUM_BORRAR.BORRAR, parametro, res);
    }
}
const pensumsControlador_Borrar = new PensumsControlador_Borrar();
export default pensumsControlador_Borrar;