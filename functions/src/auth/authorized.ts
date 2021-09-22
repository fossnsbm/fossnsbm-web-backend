// extract users info 

import { Request, Response } from "express";

export function isAuthorized(opts: { hasRole: Array<'admin' | 'manager' | 'user'>, allowSameUser?: boolean }) {
   return (req: Request, res: Response, next: Function) => {
       const { role, email, uid } = res.locals
       const { id } = req.params


       if(email === 'dasith@dasith.local'){
           return next(); // just added my mail to check stuff remove in prod
       }
       if (opts.allowSameUser && id && uid === id)
           return next();

       if (!role)
           return res.status(403).send();

       if (opts.hasRole.includes(role))
           return next();

       return res.status(403).send();
   }
}
