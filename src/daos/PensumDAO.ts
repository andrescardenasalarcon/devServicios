import { json, Response } from "express";
import pool from "../configuracion/conexion/conexionBD";

class PensumDAO {
    static async obtenerPensum(sqlConsulta: string, parametros: any, res: Response): Promise<any> {

        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((mierror) => {
                console.log('Error: ', mierror);
                res.status(400).json({ respuesta: 'Algo salió mal en Pensum' });

            });
    }
    public static async crearPensum(sqlConfirmar: string, sqlCrear: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            const dato = await consulta.one(sqlConfirmar, parametros);
            if (dato.cantidad == 0) {
                return await consulta.one(sqlCrear, parametros);
            } else {
                return { cod_pensum: 0 };
            }

        })
        .then((respuesta)=>{
            if(respuesta.cod_pensum != 0){
                //ese nuevoCodigo yo le doy el nombre que quiera a esa variable
                res.status(200).json({respuesta: 'Pensum Creado', nuevoCodigo: respuesta.cod_pensum});                
            }else{
                res.status(402).json({respuesta:'Error creadno registro, probablemente se encuentre repetido'});

            }
        })
        .catch((mierror)=>{
            console.log('Error',mierror);
            res.status(400).json({respuesta:'Error en las consultas'});
        })
    }

    protected static async encontrarPorId(sqlBuscar:string,parametros:any,res:Response):Promise<any>{
        await pool.one(sqlBuscar,parametros)
        .then((dato)=>{
            console.log(dato);
            res.status(200).json({respuesta :dato});
        })
        .catch((mierror)=>{
            console.log(mierror)
            return res.status(400).json({msg:'Error buscando Pensum'});
        })
    }
    protected static async eliminarPorId(sqlBuscar: string, parametros: any, res: Response): Promise<any> {

        await pool.result(sqlBuscar, parametros)
            .then((dato) => {
                console.log(dato);
                res.status(200).json({ respuesta: dato.rowCount});
            })
            .catch((mierror) => {
                console.log(mierror)
                return res.status(400).json({ msg: 'Error borrando pensum' });
            });
    }
}
export default PensumDAO;