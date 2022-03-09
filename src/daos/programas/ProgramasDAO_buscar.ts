import { json, Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class ProgramasDAO_buscar {


    protected static async encontrarPorId(sqlBuscar: string, parametros: any, res: Response): Promise<any> {

        await pool.one(sqlBuscar, parametros)
            .then((dato) => {
                console.log(dato);
                res.status(200).json({ respuesta: dato });
            })
            .catch((mierror) => {
                console.log(mierror)
                return res.status(400).json({ msg: 'Error buscando programa' });
            });
    }

}
export default ProgramasDAO_buscar;