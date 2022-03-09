import { Router } from "express";
import controladorProgramas from "../controladores/ProgramaControlador";
import programaControlador_Actualizar from "../controladores/programas/ProgramaControlado_Actualizar";
import programaControlador_crear from "../controladores/programas/ProgramaControlador_crear";

class ProgramasRutas{
    public rutaProgramasApi: Router;
    constructor(){
        this.rutaProgramasApi= Router();
        this.configuracion();
    } 
    public configuracion(){
        this.rutaProgramasApi.get('/obtenerprograma',controladorProgramas.demeLosProgramas);
        this.rutaProgramasApi.post('/programas/crear',programaControlador_crear.averGrabalo);
        this.rutaProgramasApi.put('/programas/actualizar',programaControlador_Actualizar.actualizalo);
        this.rutaProgramasApi.get('/obtenerprograma/:elCodigo',controladorProgramas.busqueUno);
        this.rutaProgramasApi.delete('/obtenerprograma/:elCodigo',controladorProgramas.borrarUno);
        
    }
}
const programasRutas = new ProgramasRutas();
export default programasRutas.rutaProgramasApi;