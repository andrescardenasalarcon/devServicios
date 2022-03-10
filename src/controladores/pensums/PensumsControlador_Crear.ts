import { Request, Response } from "express";
import PensumsDAO_Crear from "../../daos/pensums/PensumsDAO_Crear";
import { SQL_PENSUM_CREAR } from "../../repositorios/pensums/pensums_crear_sql";

class PensumsControlador_Crear extends PensumsDAO_Crear{
    public grabarPensum(req: Request, res: Response): void {
        const id_Programa = req.body.codPrograma;
        const nombre = req.body.nombrePensum;
        const parametro = [id_Programa, nombre];
        PensumsControlador_Crear.crearPensum(SQL_PENSUM_CREAR.CONFIRMAR, SQL_PENSUM_CREAR.CREAR, parametro, res);
    }
}
const pensumsControlador_Crear = new PensumsControlador_Crear();
export default pensumsControlador_Crear;