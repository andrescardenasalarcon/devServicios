import { Request,Response } from "express";
import MateriasDAO_Mostrar from "../../daos/materias/MateriasDAO_mostrar";
import { SQL_MATERIA_MOSTRAR } from "../../repositorios/materias/materias_mostrar_sql";

class MateriasControlador_Mostrar extends MateriasDAO_Mostrar{
    public demeLasMaterias(req: Request, res: Response): void {
        MateriasControlador_Mostrar.obtenerMaterias(SQL_MATERIA_MOSTRAR.TODO, [], res);
    }
}
const materiasControlador_Mostrar = new MateriasControlador_Mostrar();
export default materiasControlador_Mostrar;