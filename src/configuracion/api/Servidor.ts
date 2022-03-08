import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import programasRutas from '../../rutas/ProgramasRutas';
import semestresRutas from '../../rutas/SemestresRutas';
import materiasRutas from '../../rutas/MateriasRutas';


class Servidor {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.iniciarConfiguracion();
        this.activarRutas();

    }
    public iniciarConfiguracion(): void {
        this.app.set('PORT', 8088);
        this.app.use(cors());//Limitar quien entra
        this.app.use(morgan('dev'));
        this.app.use(express.json({ limit: '100mb' }));
        this.app.use(express.urlencoded({ extended: true })); //Para peticiones en rutas de todo tipo


    }
    public activarRutas(): void {
        this.app.use('/appi/programas', programasRutas);
        this.app.use('/appi/semestres', semestresRutas);
        this.app.use('/appi/materias', materiasRutas);

    }
    public iniciar(): void {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVE !!!',
                this.app.get('PORT'));
        });
    }
}
export default Servidor;
