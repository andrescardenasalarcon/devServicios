import { Router } from "express";
import semestreControlador_Actualizar from "../controladores/semestres/SemestreControlador_Actualizar";
import semestreControlador_Borrar from "../controladores/semestres/SemestreControlador_Borrar";
import semestreControlador_Buscar from "../controladores/semestres/SemestreControlador_Buscar";
import semestreControlador_Crear from "../controladores/semestres/SemestreControlador_Crear";
import semestreControlador_Mostrar from "../controladores/semestres/SemestreControlador_Mostrar";

class SemestresRutas {
    public rutaSemestresApi: Router;
    constructor() {
        this.rutaSemestresApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaSemestresApi.get('/listasemestres',semestreControlador_Mostrar.mostrarLosSemestres);
        this.rutaSemestresApi.post('/crear',semestreControlador_Crear.grabarSemsetre);
        this.rutaSemestresApi.put('/actualizar',semestreControlador_Actualizar.actualizarSemestre);
        this.rutaSemestresApi.post('/listasemestres/:elCodigo',semestreControlador_Buscar.buscarMateria);
        this.rutaSemestresApi.delete('/listasemestres/:elCodigo',semestreControlador_Borrar.borrarSemestre);

    }
}
const semestresRutas = new SemestresRutas();
export default semestresRutas.rutaSemestresApi;