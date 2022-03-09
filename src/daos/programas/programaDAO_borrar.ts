import { json,Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class programaDAO_borrar{
    protected static async eliminarPorId(sqlBuscar: string, parametros: any, res: Response): Promise<any> {

        await pool.result(sqlBuscar, parametros)
            .then((dato) => {
                console.log(dato);
                res.status(200).json({ respuesta: dato.rowCount});
            })
            .catch((mierror) => {
                console.log(mierror)
                return res.status(400).json({ msg: 'Error borrando progrmaa' });
            });
    }
}
export default programaDAO_borrar;