import { Application } from "express";
import { createUser, allusers, get, patch, removeusers } from "./controller";
import { isAuthenticated } from "../auth/authenticated";
import { isAuthorized } from "../auth/authorized";

//check auth
//isAuthenticated,
//isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),

export function routesConfig(app: Application) {
    app.post('/register',
        createUser
    );
    app.get('/users', [
        allusers
    ]);
    app.get('/users/:id', [
        get
    ]);
    app.patch('/users/:id', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
        patch
    ]);
    app.delete('/users/:id', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
        removeusers
    ]);

    app.get('/login', async (req, res) => {
        return res.status(200).send({ message: 'Login send' });
        // maybe we can call Firebase’s Client SDK and login from the frontend ? so this is kinda useless ?
    })

    app.get('/events', async (req, res) => {
        //let usr=[]
        //const users = await db.collection('user').get()
       //if (users.docs.length > 0) {
         //for (const user of users.docs) {
          //usr.push(user.data())
       //}}
       //return res.json(usr)

       return res.status(200).send("events")

    })


}

