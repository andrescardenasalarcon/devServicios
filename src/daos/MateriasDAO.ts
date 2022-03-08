import { Response } from "express";
import pool from "../configuracion/conexion/conexionBD";

class MateriasDAO {
    public static async obtenerMaterias(sqlConsulta:string,parametros:any,res:Response):Promise<any>{
        pool.result(sqlConsulta,parametros)
        .then((resultado)=>{
            res.status(200).json(resultado.rows);
        })
        .catch((mierror)=>{
            console.log('Error',mierror);
            res.status(400).json({respuesta:'Algo salió mal en Materias'});
        });
    }
    public static async crearMaterias(sqlConfirmar:string,sqlCrear:string,parametros:any,res:Response):Promise<any>{
        await pool.task(async consulta =>{
            const dato = await consulta.one(sqlConfirmar,parametros);
            if(dato.cantidad==0){
                return await consulta.one(sqlCrear,parametros);
            }else{
                return{ cod_materia :0};
            }
        })
        .then((respuesta)=>{
            if(respuesta.cod_materia != 0){
                res.status(200).json({respuesta:'Materia Creada', nuevoCodigo: respuesta.cod_materia  })
            }else{
                res.status(402).json({respuesta:'Error creando registro, probablmente este repetido'});
            }
        })
        .catch((mierror)=>{
            console.log('Pailas', mierror);
            res.status(400).json({respuesta:'Error en las consultas '});
        });
    }
}
export default MateriasDAO;