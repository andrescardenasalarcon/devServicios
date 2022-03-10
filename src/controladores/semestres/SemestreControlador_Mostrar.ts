import { Request,Response } from "express";
import SemestresDAO_mostrar from "../../daos/semestres/SemestresDAO_mostrar";
import { SQL_SEMESTRE_MOSTRAR } from "../../repositorios/semestres/semestres_mostrar_sql";

class SemestreControlador_Mostrar extends SemestresDAO_mostrar{
    public mostrarLosSemestres(req:Request,res:Response): void {
        SemestreControlador_Mostrar.mostrarSemestres(SQL_SEMESTRE_MOSTRAR.TODO, [], res);

    }
}
const semestreControlador_Mostrar = new SemestreControlador_Mostrar();
export default semestreControlador_Mostrar;