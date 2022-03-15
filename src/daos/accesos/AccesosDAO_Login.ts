import { json, Response } from "express";
import AccesoDAO_Respuesta from "./AccesoDAO_Respuesta";
import pool from "../../configuracion/conexion/conexionBD";

class AccesosDAO_Login {


    protected static async encontrarIdAcceso(sqlBuscar: string, parametros: any, res: Response): Promise<any> {

        await pool.oneOrNone(sqlBuscar, parametros)
            .then((dato) => {
               return AccesoDAO_Respuesta.procesar(dato,res);
            })
            .catch((mierror) => {
                console.log(mierror)
                return res.status(400).json({ msg: 'Error buscando acceso' });
            });
    }

}
export default AccesosDAO_Login;