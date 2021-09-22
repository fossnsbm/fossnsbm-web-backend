import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { routesConfig } from './users/routes-config';
import { eventsConfig } from './eventz/event-routes';

var serviceAccount = require("/home/dasith/projects/idk/fossnsbm-web-backend/functions/src/serviceAccountKey.json");
// prob change the path im too lazy 


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fossnsbm-e4ff9-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const app = express(); 
app.use(bodyParser.json()); // get json
app.use(cors({ origin: true })); //  Connect/Express middleware that can be used to enable CORS with various options.
routesConfig(app)
eventsConfig(app)

export const api = functions.https.onRequest(app); // requests going to /api will be handled by the app instance.
export const events = functions.https.onRequest(app)

