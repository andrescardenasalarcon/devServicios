import { Request, Response } from "express";
import MateriasDAO_Buscar from "../../daos/materias/MateriasDAO_buscar";
import { SQL_MATERIA_BUSCAR } from "../../repositorios/materias/materias_buscar_sql";

class MateriasControlador_Buscar extends MateriasDAO_Buscar {
    public buscarMateria(req: Request, res: Response): void {
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        MateriasControlador_Buscar.encontrarMateriaPorId(SQL_MATERIA_BUSCAR.CARGAR, parametro, res);
    }
}
const materiasControlador_Buscar = new MateriasControlador_Buscar();
export default materiasControlador_Buscar;