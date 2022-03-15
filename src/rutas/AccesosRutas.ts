import { Router } from "express";
import accesosControlador from "../controladores/accesos/AccesosControlador";
class AccesosRutas {
    public rutaAccesoApi: Router;
    constructor() {
        this.rutaAccesoApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaAccesoApi.post('/accesos',accesosControlador.busqueUnoAcceso);
    }
}

const accesosRutas = new AccesosRutas();
export default accesosRutas.rutaAccesoApi;