import { Router } from "express";
import controladorProgramas from "../controladores/ProgramaControlador";

class ProgramasRutas{
    public rutaProgramasApi: Router;
    constructor(){
        this.rutaProgramasApi= Router();
        this.configuracion();
    } 
    public configuracion(){
        this.rutaProgramasApi.get('/obtenerprograma',controladorProgramas.demeLosProgramas);
        this.rutaProgramasApi.post('/programas/crear',controladorProgramas.averGrabalo);
        this.rutaProgramasApi.get('/obtenerprograma/:elCodigo',controladorProgramas.busqueUno);
        this.rutaProgramasApi.delete('/obtenerprograma/:elCodigo',controladorProgramas.borrarUno);
    }
}
const programasRutas = new ProgramasRutas();
export default programasRutas.rutaProgramasApi;