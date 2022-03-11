import { json, Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class AccesosDAO_buscar {


    protected static async encontrarIdAcceso(sqlBuscar: string, parametros: any, res: Response): Promise<any> {

        await pool.one(sqlBuscar, parametros)
            .then((dato) => {
                console.log(dato);
                res.status(200).json({ 'Tu ID es': dato });
            })
            .catch((mierror) => {
                console.log(mierror)
                return res.status(400).json({ msg: 'Error buscando acceso' });
            });
    }

}
export default AccesosDAO_buscar;