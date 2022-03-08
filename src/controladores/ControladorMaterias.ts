import { Request, Response } from "express";
import MateriasDAO from "../daos/MateriasDAO";
import { SQL_MATERIA } from "../repositorios/materias_sql";

class ControladorMaterias extends MateriasDAO {
    public demeLasMaterias(req: Request, res: Response): void {
        ControladorMaterias.obtenerMaterias(SQL_MATERIA.TODO, [], res);
    }

    public grabarMateria(req: Request, res: Response): void {
        const nombre = req.body.nombreMateria;
        const referencia = req.body.referenciaMateria;
        const parametro = [nombre, referencia];
        ControladorMaterias.crearMaterias(SQL_MATERIA.CONFIRMAR, SQL_MATERIA.CREAR, parametro, res);

    }
    public busqueUno(req:Request,res:Response):void{
        const codigito = req.params.elCodigo;
        const parametro = [codigito];
        ControladorMaterias.encontrarMateriaPorId(SQL_MATERIA.CARGAR,parametro,res);

    }
}
const controladorMaterias = new ControladorMaterias();
export default controladorMaterias;