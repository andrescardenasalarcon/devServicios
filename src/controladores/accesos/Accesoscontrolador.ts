import { Request, Response } from "express";
import AccesosDAO_buscar from "../../daos/accesos/AccesosDAO_Buscar";
import { SQL_ACCESO_BUSCAR } from "../../repositorios/accesos/accesos_buscar_sql";

class AccesosControlador_Buscar extends AccesosDAO_buscar {


    public busqueUnoAcceso(req: Request, res: Response): void {
        const correo = req.body.correoAcceso;
        const contra = req.body.claveAcceso;
        const parametro = [correo, contra];
        AccesosControlador_Buscar.encontrarIdAcceso(SQL_ACCESO_BUSCAR.CARGAR, parametro, res);

    }



}
const accesosControlador_Buscar = new AccesosControlador_Buscar();
export default accesosControlador_Buscar;