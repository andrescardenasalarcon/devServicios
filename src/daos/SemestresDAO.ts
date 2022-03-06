import { Request, Response } from "express";
import pool from "../configuracion/conexion/conexionBD";

class SemestresDAO {
    public static async obtenerSemestres(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((mierror) => {
                console.log('Error: ', mierror);
                res.status(400).json({ respuesta: "Algo salió mal en SemestresDao" });
            })
    }
    public static async crearSemestre(sqlConfirmar: string, sqlCrear: string, parametros: any, res: Response): Promise<any> {
        {
            await pool.task(async consulta => {
                const dato = await consulta.one(sqlConfirmar, parametros);
                if (dato.cantidad == 0) {
                    return await consulta.one(sqlCrear, parametros);
                }else{
                    return{cod_semestre:0};
                }
            })
            .then((respuesta)=>{
                if(respuesta.cod_semestre != 0){
                    res.status(200).json({respuesta:'Semestre Creado', nuevoCodigo:respuesta.cod_semestre});
                }else{
                    res.status(402).json({respuesta:'Error creando registro, probablemente esta repetido'});
                }
            })
            .catch((mierror)=>{
                console.log('Error System Math-Error',mierror);
                res.status(400).json({respuesta:'Error en las consultas'});

            });

        }

    }
}
export default SemestresDAO;