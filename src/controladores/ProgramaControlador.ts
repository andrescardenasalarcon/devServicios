import { Request, Response } from "express";
import ProgramasDAO from "../daos/ProgramasDAO";
import { SQL_PROGRAMA } from "../repositorios/programas_sql";

class ControladorProgramas extends ProgramasDAO {
    public demeLosProgramas(req: Request, res: Response): void {
        ControladorProgramas.obtenerProgramas(SQL_PROGRAMA.TODO, [], res);
    }

    public busqueUno(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ControladorProgramas.encontrarPorId(SQL_PROGRAMA.CARGAR,parametro,res);

    }
    public borrarUno(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ControladorProgramas.eliminarPorId(SQL_PROGRAMA.BORRAR,parametro,res);

    }
}
const controladorProgramas = new ControladorProgramas();
export default controladorProgramas;