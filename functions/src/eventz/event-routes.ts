import { Application } from "express";
import { allevents , removeEvent , createEvent , updateEvent} from "./controller";
//import { isAuthenticated } from "../auth/authenticated";
//import { isAuthorized } from "../auth/authorized";

//check auth
//isAuthenticated,
//isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),

export function eventsConfig(app: Application) {
    app.get('/all', [
        allevents
    ]); // get all events

    app.delete('/remove/:id', [
        removeEvent
    ]); // remove evnt < pass the id as parameter > 

    app.post('/create',[
        createEvent
    ]); // create a new event

    app.post('/update/:id',[
        updateEvent
    ]); // update a post pass post data with event id 
}

