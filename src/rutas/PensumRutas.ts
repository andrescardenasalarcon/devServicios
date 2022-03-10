import { Router } from "express";
import pensumsControlador_Actualizar from "../controladores/pensums/PensumsControlador_Actualizar";
import pensumsControlador_Borrar from "../controladores/pensums/PensumsControlador_Borrar";
import pensumsControlador_Buscar from "../controladores/pensums/PensumsControlador_Buscar";
import pensumsControlador_Crear from "../controladores/pensums/PensumsControlador_Crear";
import pensumsControlador_Mostrar from "../controladores/pensums/PensumsControlador_Mostrar";

class PensumRutas{
    public rutaPensumApi: Router;
    constructor(){
        this.rutaPensumApi= Router();
        this.configuracion();
    } 
    public configuracion(){
        this.rutaPensumApi.get('/obtenerpensum',pensumsControlador_Mostrar.mostrarPensums);
        this.rutaPensumApi.post('/crear',pensumsControlador_Crear.grabarPensum);
        this.rutaPensumApi.get('/obtenerpensum/:elCodigo',pensumsControlador_Buscar.buscarPensums);
        this.rutaPensumApi.delete('/obtenerpensum/:elCodigo',pensumsControlador_Borrar.borrarUnPensum);
        this.rutaPensumApi.put('/actualizar',pensumsControlador_Actualizar.actualizarPensums);
    }

}
const pensumRutas = new PensumRutas();
export default pensumRutas.rutaPensumApi;