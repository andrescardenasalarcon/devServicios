import { Request, Response } from "express";
import SemestresDAO_borrar from "../../daos/semestres/SemestresDAO_borrar";
import { SQL_SEMESTRE_BORRAR } from "../../repositorios/semestres/semestres_borrar_sql";

class SemestreControlador_Borrar extends SemestresDAO_borrar{
    public borrarSemestre(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        SemestreControlador_Borrar.eliminarSemestre(SQL_SEMESTRE_BORRAR.BORRAR,parametro,res);
    }
}
const semestreControlador_Borrar = new SemestreControlador_Borrar();
export default semestreControlador_Borrar;