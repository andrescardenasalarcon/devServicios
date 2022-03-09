import { Router } from "express";
import programaControlador_Buscar from "../controladores/programas/ProgramaControlador_Buscar";
import programaControlador_Actualizar from "../controladores/programas/ProgramaControlado_Actualizar";
import programaControlador_crear from "../controladores/programas/ProgramaControlador_crear";
import programaControlador_Borrar from "../controladores/programas/ProgramaControlador_Borrar";
import porgramasControlador_Mostrar from "../controladores/programas/ProgramasControlador_Mostrar";


class ProgramasRutas{
    public rutaProgramasApi: Router;
    constructor(){
        this.rutaProgramasApi= Router();
        this.configuracion();
    } 
    public configuracion(){
        this.rutaProgramasApi.get('/obtenerprograma',porgramasControlador_Mostrar.demeLosProgramas);
        this.rutaProgramasApi.post('/programas/crear',programaControlador_crear.averGrabalo);
        this.rutaProgramasApi.put('/programas/actualizar',programaControlador_Actualizar.actualizalo);
        this.rutaProgramasApi.get('/obtenerprograma/:elCodigo',programaControlador_Buscar.busqueUno);
        this.rutaProgramasApi.delete('/obtenerprograma/:elCodigo',programaControlador_Borrar.borrarUno);
        
    }
}
const programasRutas = new ProgramasRutas();
export default programasRutas.rutaProgramasApi;