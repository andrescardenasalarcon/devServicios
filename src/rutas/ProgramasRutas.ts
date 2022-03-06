import { Router } from "express";
import controladorProgramas from "../controladores/ProgramaControlador";

class ProgramasRutas{
    public rutaProgramasApi: Router;
    constructor(){
        this.rutaProgramasApi= Router();
        this.configuracion();
    } 
    public configuracion(){
        this.rutaProgramasApi.get('/listaprogramas',controladorProgramas.demeLosProgramas);
        this.rutaProgramasApi.post('/programas/crear',controladorProgramas.averGrabalo);
    }
}
const programasRutas = new ProgramasRutas();
export default programasRutas.rutaProgramasApi;