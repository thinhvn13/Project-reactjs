import uuid from 'uuid';
import md5 from 'md5';
import { connectDB } from './connect-db'

const authenticationTokens = [];

async function assembleUserState(user){
    let db = await connectDB();

    let tasks = await db.collection(`tasks`).find({owner:user.id}).toArray();
    let groups = await db.collection(`groups`).find({owner:user.id}).toArray();

    return {
        session:{authenticated:`AUTHENTICATED`,id:user.id},
        tasks,
        groups
    };
}

export const authenticationRoute = app => {
    app.post('/authenticate', async (req,res)=>{
        let { username, password } = req.body;
        let db = await connectDB();
        let collection = db.collection(`users`);

        let user = await collection.findOne({username:username});
        if (!user) {
            return res.status(500).send(`User not found`);
        }

        let hash = md5(password);
        let passwordCorrect = hash === user.passwordHash;
        if (!passwordCorrect) {
            return res.status(500).send('Password incorrect');
        }

        let token = uuid();

        authenticationTokens.push({
            token,
            userName: user.name
        });

        let state = await assembleUserState(user);

        return res.send({token,state});
    });
};

//register
export const addNewUser = async user=>{
    let db = await connectDB();
    let collection = db.collection(`users`);
    await collection.insertOne(user);
};
export const registerRoute = app => {
    app.post('/registeruser', async (req,res)=>{
        let { name, email, username, password} = req.body;
        let db = await connectDB();
        let collection = db.collection(`users`);

        let user = await collection.findOne({username:username});
        let e = await collection.findOne({email:email});
        if (user && e) {
            return res.send({msg:`ERROR_USERNAME_MAIL`});
            // return res.status(500).send(`This username and email are available. Please try another name.`);
        }
        else if (user) {
            return res.send({msg:`ERROR_USERNAME`});
            // return res.status(500).send(`This username is available. Please try another name.`);
        }
        else if(e) {
            return  res.send({msg:`ERROR_MAIL`});
            // return res.status(500).send(`This email is available. Please try another email.`);
        }
        let newUser = {
            name:name,
            email:email,
            username:username,
            passwordHash:md5(password),
        } 
        
        await addNewUser(newUser)
        // await collection.insertOne(newUser);
        res.send({msg:`CREATE_USER_SUCCESSFULLY`});
    });
};