import { Application } from "express";
import { allevents , removeEvent , createEvent} from "./controller";
//import { isAuthenticated } from "../auth/authenticated";
//import { isAuthorized } from "../auth/authorized";

//check auth
//isAuthenticated,
//isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),

export function eventsConfig(app: Application) {
    app.get('/all', [
        allevents
    ]);

    app.delete('/remove/:id', [
        removeEvent
    ]);

    app.post('/create',[
        createEvent
    ]);
}

