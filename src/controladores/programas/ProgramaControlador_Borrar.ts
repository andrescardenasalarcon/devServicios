import { Request, Response } from "express";
import programaDAO_borrar from "../../daos/programas/programaDAO_borrar";
import { SQL_PROGRAMA_BORRAR } from "../../repositorios/programas/programas_borrar_sql";

class ProgramaControlador_Borrar extends programaDAO_borrar{
    public borrarUno(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ProgramaControlador_Borrar.eliminarPorId(SQL_PROGRAMA_BORRAR.BORRAR,parametro,res);

    }
}
const programaControlador_Borrar = new ProgramaControlador_Borrar();
export default programaControlador_Borrar;