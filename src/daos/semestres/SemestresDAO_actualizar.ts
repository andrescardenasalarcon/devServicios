import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class SemestresDAO_actualizar {
    public static async actualizarSemestre(sqlActualizarYa: string, parametros: any, res: Response): Promise<any> {
        {
            await pool.task(async consulta => {
                return await consulta.result(sqlActualizarYa, parametros);


            })
                .then((respuesta) => {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Semestre Actualizada' });


                })
                .catch((mierror) => {
                    console.log(mierror);
                    res.status(400).json({ respuesta: 'Error actualizando Semestre' });

                });
        }
    }
}
export default SemestresDAO_actualizar;