import { Response } from "express";
import jwt from 'jsonwebtoken';
class AccesoDAO_Respuesta {
    public static async procesar(registro: any, res: Response): Promise<any> {
        if (registro != null) {
            console.log(registro);
            ///vamos a crear el token
            const miToken = jwt.sign({ codigo: registro.codAccesos,role:registro.codRoles, dosDev: 'eso somos' }, 'LaClaveVaAqui', { expiresIn: '8h' });
            return res.status(200).json({ miToken: miToken });
        } else {
            return res.status(401).json({ mensaje: 'Usuario incorrecto' });
        }









    }

}
export default AccesoDAO_Respuesta;