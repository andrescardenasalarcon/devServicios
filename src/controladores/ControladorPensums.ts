import { Request, Response } from "express";
import PensumDAO from "../daos/PensumDAO";
import { SQL_PENSUM } from "../repositorios/pensum_sql";

class ControladorPensums extends PensumDAO {
    public demeLosPensums(req: Request, res: Response): void {
        ControladorPensums.obtenerPensum(SQL_PENSUM.TODO, [], res);
    }
    public grabarPensum(req: Request, res: Response): void {
        const id_Programa = req.body.codPrograma;
        const nombre = req.body.nombrePensum;
        const parametro = [id_Programa, nombre];
        ControladorPensums.crearPensum(SQL_PENSUM.CONFIRMAR, SQL_PENSUM.CREAR, parametro, res);
    }
    public busqueUno(req: Request, res: Response): void {
        const elCodigo = req.params.codigito;
        const parametro = [elCodigo];
        ControladorPensums.encontrarPorId(SQL_PENSUM.CARGAR, parametro, res);
    }
    public borrarUno(req: Request, res: Response): void {
        const elCodigo = req.params.codigito;
        const parametro = [elCodigo];
        ControladorPensums.encontrarPorId(SQL_PENSUM.BORRAR, parametro, res);
    }
}
const controladorPensums = new ControladorPensums();
export default controladorPensums;
