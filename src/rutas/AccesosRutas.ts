import { Router } from "express";
import accesosControlador_Buscar from "../controladores/accesos/Accesoscontrolador";

class AccesosRutas {
    public rutaAccesoApi: Router;
    constructor() {
        this.rutaAccesoApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaAccesoApi.post('/accesos',accesosControlador_Buscar.busqueUnoAcceso);
    }
}

const accesosRutas = new AccesosRutas();
export default accesosRutas.rutaAccesoApi;