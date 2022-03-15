import { Request, Response } from "express";
import AccesosDAO_Login from "../../daos/accesos/AccesosDAO_Login";
import { SQL_ACCESO_BUSCAR } from "../../repositorios/accesos/accesos_buscar_sql";

class AccesosControlador extends AccesosDAO_Login {


    public busqueUnoAcceso(req: Request, res: Response): void {
        const correo = req.body.correoAcceso;
        const contra = req.body.claveAcceso;
        const role = req.body.codRoles;
        const parametro = [correo, contra, role];
        AccesosControlador.encontrarIdAcceso(SQL_ACCESO_BUSCAR.CARGAR, parametro, res);

    }



}
const accesosControlador = new AccesosControlador();
export default accesosControlador;