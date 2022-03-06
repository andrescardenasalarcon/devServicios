import { Router } from "express";
import controladorSemestres from "../controladores/ControladorSemsetres";

class SemestresRutas {
    public rutaSemestresApi: Router;
    constructor() {
        this.rutaSemestresApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaSemestresApi.get('/listasemestres',controladorSemestres.demeLosSemestres);
        this.rutaSemestresApi.post('/semetres/crear',controladorSemestres.grabarSemsetre);
    }
}
const semestresRutas = new SemestresRutas();
export default semestresRutas.rutaSemestresApi;