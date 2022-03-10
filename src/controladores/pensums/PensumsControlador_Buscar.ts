import { Request, Response } from "express";
import PensumsDAO_Buscar from "../../daos/pensums/PensumsDAO_Buscar";
import { SQL_PENSUM_BUSCAR } from "../../repositorios/pensums/pensums_buscar_sql";

class PensumsControlador_Buscar extends PensumsDAO_Buscar{
    public buscarPensums(req: Request, res: Response): void {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        PensumsControlador_Buscar.buscarPensum(SQL_PENSUM_BUSCAR.BUSCAR, parametro, res);
    }
}
const pensumsControlador_Buscar = new PensumsControlador_Buscar();
export default pensumsControlador_Buscar;
