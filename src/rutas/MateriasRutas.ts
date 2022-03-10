import { Router } from "express";
import materiasControlador_Actualizar from "../controladores/materias/MateriasControlador_Actualizar";
import materiasControlador_Borrar from "../controladores/materias/MateriasControlador_Borrar";
import materiasControlador_Buscar from "../controladores/materias/MateriasControlador_Buscar";
import materiasControlador_Crear from "../controladores/materias/MateriasControlador_Crear";
import materiasControlador_Mostrar from "../controladores/materias/MateriasControlador_Mostrar";
class MateriasRutas {
    public rutaMateriasApi: Router;
    constructor() {
        this.rutaMateriasApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutaMateriasApi.get('/listamaterias', materiasControlador_Mostrar.demeLasMaterias);
        this.rutaMateriasApi.post('/crear', materiasControlador_Crear.grabarMateria);
        this.rutaMateriasApi.put('/actualizar', materiasControlador_Actualizar.actualizarMateria);
        this.rutaMateriasApi.post('/listamaterias/:elCodigo', materiasControlador_Buscar.buscarMateria);
        this.rutaMateriasApi.delete('/listamaterias/:elCodigo', materiasControlador_Borrar.borrarMateria);
    }
}
const materiasRutas = new MateriasRutas();
export default materiasRutas.rutaMateriasApi;