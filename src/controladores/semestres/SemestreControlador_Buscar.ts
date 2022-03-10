import { Request, Response } from "express";
import SemestresDAO_buscar from "../../daos/semestres/SemestresDAO_buscar";
import { SQL_SEMESTRE_BUSCAR } from "../../repositorios/semestres/semestres_buscar_sql";

class SemestreControlador_Buscar extends SemestresDAO_buscar{
    public buscarMateria(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        SemestreControlador_Buscar.encontrarSemestre(SQL_SEMESTRE_BUSCAR.BUSCAR,parametro,res);
    }
}
const semestreControlador_Buscar = new SemestreControlador_Buscar();
export default semestreControlador_Buscar;