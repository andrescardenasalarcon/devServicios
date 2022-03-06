import { Response } from "express";
import pool from "../configuracion/conexion/conexionBD";

class ProgramasDAO {
    public static async obtenerProgramas(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((mierror) => {
                console.log('Error: ', mierror);
                res.status(400).json({ respuesta: 'Algo salió mal en Programas' });
            });
    }
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
                        res.status(200).json({ respuesta: 'Partido Creado', nuevoCodigo: respuesta.cod_programa });
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
export default ProgramasDAO;