import { Router } from "express";
import controladorPensums from "../controladores/ControladorPensums";

class PensumRutas{
    public rutaPensumApi: Router;
    constructor(){
        this.rutaPensumApi= Router();
        this.configuracion();
    } 
    public configuracion(){
        this.rutaPensumApi.get('/obtenerpensum',controladorPensums.demeLosPensums);
        this.rutaPensumApi.post('/pensums/crear',controladorPensums.grabarPensum);
        this.rutaPensumApi.get('/obtenerpensum/:elCodigo',controladorPensums.busqueUno);
        this.rutaPensumApi.delete('/obtenerpensum/:elCodigo',controladorPensums.borrarUno);
    }

}
const pensumRutas = new PensumRutas();
export default pensumRutas.rutaPensumApi;