import { Request, Response } from "express";
import PensumsDAO_Actualizar from "../../daos/pensums/PensumsDAO_Actualizar";
import { SQL_PENSUM_ACTUALIZAR } from "../../repositorios/pensums/pensums_actualizar_sql";

class PensumsControlador_Actualizar extends PensumsDAO_Actualizar {
    public actualizarPensums(req: Request, res: Response): void {
        const codigoP = req.body.codPensum;
        const codigoPro = req.body.codPrograma;
        const nombre = req.body.nombrePensum;
        const parametro = [codigoP, codigoPro, nombre];
        PensumsControlador_Actualizar.actualizarPensum(SQL_PENSUM_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const pensumsControlador_Actualizar = new PensumsControlador_Actualizar();
export default pensumsControlador_Actualizar;