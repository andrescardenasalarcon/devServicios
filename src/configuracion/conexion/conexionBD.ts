import pgPromise from 'pg-promise';
import {opcionesPG} from './opcionesConexion';
import variablesConexion from '../dominios/var_basedatos';

const pgp = pgPromise(opcionesPG);
const pool = pgp(variablesConexion);

pool.connect()
.then((conn)=>{
    console.log('Te Conectaste a: ',variablesConexion.database);
    conn.done();

})
.catch((miError)=>{
    console.log(miError);
});
export default pool;
