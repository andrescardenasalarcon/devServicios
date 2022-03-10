import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class PensumsDAO_Actualizar {
    public static async actualizarPensum(sqlActualizarYa: string, parametros: any, res: Response): Promise<any> {
        {
            await pool.task(async consulta => {
                return await consulta.result(sqlActualizarYa, parametros);


            })
                .then((respuesta) => {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Pensum Actualizada' });


                })
                .catch((mierror) => {
                    console.log(mierror);
                    res.status(400).json({ respuesta: 'Error actualizando Pensum' });

                });
        }
    }
}
export default PensumsDAO_Actualizar;