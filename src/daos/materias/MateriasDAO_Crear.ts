import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class MateriasDAO_Crear {
    public static async crearMaterias(sqlConfirmar: string, sqlCrear: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            const dato = await consulta.one(sqlConfirmar, parametros);
            if (dato.cantidad == 0) {
                return await consulta.one(sqlCrear, parametros);
            } else {
                return { cod_materia: 0 };
            }
        })
            .then((respuesta) => {
                if (respuesta.cod_materia != 0) {
                    res.status(200).json({ respuesta: 'Materia Creada', nuevoCodigo: respuesta.cod_materia })
                } else {
                    console.log(respuesta)
                    res.status(402).json({ respuesta: 'Error creando registro, probablmente este repetido' });
                }
            })
            .catch((mierror) => {
                console.log(mierror);
                res.status(400).json({ respuesta: 'Error en las consultas ', mierror });
            });
    }

}
export default MateriasDAO_Crear;