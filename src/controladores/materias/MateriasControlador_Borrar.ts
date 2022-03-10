import { Request, Response } from "express";
import MateriasDAO_Borrar from "../../daos/materias/MateriasDAO_Borrar";
import { SQL_MATERIA_BORRAR } from "../../repositorios/materias/materias_borrar_sql";

class MateriasControlador_Borrar extends MateriasDAO_Borrar{
    public borrarMateria(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        MateriasControlador_Borrar.eliminarPorId(SQL_MATERIA_BORRAR.BORRAR,parametro,res);
    }
}
const materiasControlador_Borrar = new MateriasControlador_Borrar();
export default materiasControlador_Borrar;