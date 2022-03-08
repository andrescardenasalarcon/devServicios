import { Router } from "express";
import controladorMaterias from "../controladores/ControladorMaterias";

class MateriasRutas {
    public rutaMateriasApi: Router;
    constructor() {
        this.rutaMateriasApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutaMateriasApi.get('/listamaterias', controladorMaterias.demeLasMaterias);
        this.rutaMateriasApi.post('/crear', controladorMaterias.grabarMateria);
        this.rutaMateriasApi.post('/listamaterias/:elCodigo', controladorMaterias.busqueUno);
    }
}
const materiasRutas = new MateriasRutas();
export default materiasRutas.rutaMateriasApi;