import { Request, Response } from "express";
import ProgramasDAO_buscar from "../../daos/programas/ProgramasDAO_buscar";
import { SQL_PROGRAMA_BUSCAR } from "../../repositorios/programas/programas_buscar_sql";

class ProgramaControlador_Buscar extends ProgramasDAO_buscar {
    

    public busqueUno(req: Request, res: Response): void {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ProgramaControlador_Buscar.encontrarPorId(SQL_PROGRAMA_BUSCAR.CARGAR, parametro, res);

    }

}
const programaControlador_Buscar = new ProgramaControlador_Buscar();
export default programaControlador_Buscar;