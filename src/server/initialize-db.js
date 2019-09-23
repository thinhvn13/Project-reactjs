import { defaultState } from './defaultState';
import { connectDB } from './connect-db';

async function initializeDB(){
    let db = await connectDB();
    let user = await db.collection(`users`).findOne({username:"DEV"});
    if (!user){
        for(let collectionName in defaultState){
            let collection = db.collection(collectionName);
            await collection.insertMany(defaultState[collectionName]);
        }
    }
}

initializeDB();