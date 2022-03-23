import  jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

class Validacion {
    public delToken(req: Request, res: Response, next: NextFunction): any {
        if (!req.headers.authorization) {
            res.status(401).json({msg:'Cabecera Erronea'})
            
        } else {
            try {
                const miToken = req.headers.authorization.split(' ')[1] as string;
                const informacion = jwt.verify(miToken,'LaClaveVaAqui');
                req.body.datosUtiles = informacion;
                next();
            } catch (error) {
                res.status(401).json({msg:'Token Erroneo'});
            }

        }

    }
}
const validacion = new Validacion();
export default validacion;