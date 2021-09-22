import { Application } from "express";
import { createUser, allusers, get, patchUser, removeusers } from "./controller";
import { isAuthenticated } from "../auth/authenticated";
import { isAuthorized } from "../auth/authorized";

//check auth
//isAuthenticated,
//isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),

export function routesConfig(app: Application) {
    app.post('/register',
        createUser 
        // register a new user. not sure if we gonna make this a private route maybe make this a priv route or else hardcode the role to user otherwise manually 
        // people can change roles *****
    );
    app.get('/users', [
        allusers

        // view all users make this a priv route public to test
    ]);
    app.get('/users/:id', [
        get
        // get each user info 
    ]);
    app.patch('/users/:id', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
        patchUser

        // update users 
    ]);
    app.delete('/users/:id', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
        removeusers

        // remove user pass the id to remove only admins and managers can do so 
    ]);

    app.get('/login', async (req, res) => {
        return res.status(200).send({ message: 'Login send' });
        // maybe we can call Firebase’s Client SDK and login from the frontend ? so this is kinda useless ?
    })

}

