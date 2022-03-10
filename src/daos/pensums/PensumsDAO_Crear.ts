import { Request, Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class PensumsDAO_Crear {
    public static async crearPensum(sqlConfirmar: string, sqlCrear: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            const dato = await consulta.one(sqlConfirmar, parametros);
            if (dato.cantidad == 0) {
                return await consulta.one(sqlCrear, parametros);
            } else {
                return { codPensum: 0 };
            }

        })
            .then((respuesta) => {
                if (respuesta.codPensum != 0) {
                    //ese nuevoCodigo yo le doy el nombre que quiera a esa variable
                    res.status(200).json({ respuesta: 'Pensum Creado', nuevoCodigo: respuesta.codPensum });
                } else {
                    res.status(402).json({ respuesta: 'Error creando registro, probablemente se encuentre repetido' });

                }
            })
            .catch((mierror) => {
                console.log('Error', mierror);
                res.status(400).json({ respuesta: 'Error en las consultas' });
            })
    }

}
export default PensumsDAO_Crear;