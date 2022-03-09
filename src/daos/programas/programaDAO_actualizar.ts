import { json, Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class ProgramasDAO_actualizar {

    public static async actualizarPrograma(sqlActualizarYa: string, parametros: any, res: Response): Promise<any> {
        {
            await pool.task(async consulta => {
                 return await consulta.result(sqlActualizarYa, parametros);


            })
                .then((respuesta) => {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Programa Actualizado' });


                })
                .catch((mierror) => {
                    console.log(mierror);
                    res.status(400).json({ respuesta: 'Error actualizando programas' });

                });
        }
    }
}
export default ProgramasDAO_actualizar;