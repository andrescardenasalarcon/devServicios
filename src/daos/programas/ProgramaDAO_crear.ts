import { json,Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class ProgramaDAO_crear{
    public static async crearProgramas(sqlConfirmar: string, sqlCrear: string, parametros: any, res: Response): Promise<any> {
        {
            await pool.task(async consulta => {
                const dato = await consulta.one(sqlConfirmar, parametros);
                if (dato.cantidad == 0) {
                    return await consulta.one(sqlCrear, parametros);
                } else {
                    return { cod_programa: 0 };
                }

            })
                .then((respuesta) => {
                    //aca va si todo va bien
                    if (respuesta.cod_programa != 0) {
                        res.status(200).json({ respuesta: 'Programa Creado', nuevoCodigo: respuesta.cod_programa });
                    } else {
                        res.status(402).json({ respuesta: 'Error creando registro, probablemente esta repetido' });

                    }

                })
                .catch((mierror) => {
                    console.log('Pailas', mierror);
                    res.status(400).json({ respuesta: 'Error en las cosnsultas' });

                });
        }
    }
}
export default ProgramaDAO_crear;