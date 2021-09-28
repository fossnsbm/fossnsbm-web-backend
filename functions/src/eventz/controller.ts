import { Request, Response } from "express";
import * as admin from 'firebase-admin'
import { Firestore} from '@google-cloud/firestore';


export async function allevents(req: Request, res: Response) {
    try {
        const eventList: any = [];
        const db: Firestore = admin.firestore();
        const eventz = await db.collectionGroup('Events').get();

        eventz.forEach((doc: any) => {
            console.log(doc.id, ' => ', doc.data());
            eventList.push(doc.id , doc.data());
        });
        return res.status(200).send(eventList)

    }
    catch (err) {
        return handleError(res, err)
    }
}

export async function removeEvent(req: Request, res: Response) {
    try{
        const { id } = req.params
        console.log(id)
        const db: Firestore = admin.firestore();
        await db.collection('Events').doc(id).delete()
        return res.status(204).send({Message:"done"})
    }
    catch (err) {
        return handleError(res, err)
    }
}

export async function createEvent(req: Request , res: Response) {
    const { name, topic, talker, date, isPublic } = req.body

    //if(!name || !topic || !talker || !date || !isPublic){
     //   return res.status(400).send({message:"Missing fields"})
    //}

    try{
        const db: Firestore = admin.firestore();
        let docRef=db.collection('Events').doc(name)
    
        await docRef.set({
            name: name,
            topic: topic,
            talker:talker ,
            date:date,
            isPublic:isPublic,
        });

        console.log({
            name: name,
            topic: topic,
            talker:talker ,
            date:date,
            isPublic:isPublic,
        });

        return res.status(204).send({message:"Event Added "})
    }
    catch (err) {
        return handleError(res, err)
    }
}

export async function updateEvent(req: Request , res: Response) {
    const { id } = req.params
    const { name, topic, talker, date, isPublic } = req.body

    try{
        if(!name || !topic || !talker || !date || !isPublic){
            return res.status(400).send({message:"Missing fields"})
        }
    
        const db: Firestore = admin.firestore();
        let docRef=db.collection('Events').doc(id)
    
        await docRef.update({
            name: name,
            topic: topic,
            talker:talker ,
            date:date,
            isPublic:isPublic,
        });

        console.log({
            name: name,
            topic: topic,
            talker:talker ,
            date:date,
            isPublic:isPublic,
        });
    
        return res.status(201).send({name})
    }
    catch (err) {
        return handleError(res, err)
    }
}


function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}
 
