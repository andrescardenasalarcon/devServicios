import { Request,Response } from "express";
import ProgramasDAO from "../daos/ProgramasDAO";
import {SQL_PROGRAMA}  from "../repositorios/programas_sql";

class ControladorProgramas extends ProgramasDAO{
    public demeLosProgramas(req:Request,res:Response):void{
        ControladorProgramas.obtenerProgramas(SQL_PROGRAMA.TODO,[],res);
    }
    
    public averGrabalo(req:Request,res:Response):void{
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre]
        ControladorProgramas.crearProgramas(SQL_PROGRAMA.CONFIRMAR,SQL_PROGRAMA.CREAR,parametro,res);
    }
}
const controladorProgramas = new ControladorProgramas();
export default controladorProgramas;