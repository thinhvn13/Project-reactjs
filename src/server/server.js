import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {connectDB} from './connect-db'
import './connect-db';
import { authenticationRoute, registerRoute} from './authenticate';
import path from 'path';

let port = process.env.PORT || 3000;
let app = express();

app.listen(port, console.log('this is port of server:', port));

app.get('/',(req, res)=>{
    res.send("Hello Word!!!")
});


app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);
    
authenticationRoute(app);
registerRoute(app);

if (process.env.NODE_ENV == `production`) {
    app.use(express.static(path.resolve(__dirname,'../../dist')));
    app.get('/*',(req,res)=>{
        res.sendFile(path.resolve('index.html'));
    });
}

export const addNewTask = async task=>{
    let db = await connectDB();
    let collection = db.collection(`tasks`);
    await collection.insertOne(task);
};

export const updateTask = async task=>{
    let {id, group, isComplete, name} = task;
    let db = await connectDB();
    let collection = db.collection(`tasks`);

    if(group){
        await collection.updateOne({id},{$set:{group}})
    }

    if(name){
        await collection.updateOne({id},{$set:{name}})
    }

    if(isComplete !== undefined){
        await collection.updateOne({id},{$set:{isComplete}})
    }
};

app.post('/task/new', async (req, res)=>{
    let task = req.body.task
    await addNewTask(task);
    res.status(200).send();
});

app.post('/task/update', async (req, res)=>{
    let task = req.body.task
    await updateTask(task);
    res.status(200).send();
});

export const insertEmail= async email=>{
    let db = await connectDB();
    let collection = db.collection(`emails`);
    await collection.insertOne(email);
};

app.post('/registeremail', async (req, res)=>{
    let {email} = req.body
    let db = await connectDB();
    let collection = db.collection(`emails`);
    let check = await collection.findOne({email:email});

    if(check){
        return res.status(200).send();
    }
    await insertEmail({email:email});
    res.status(200).send();
});

// export const addNewUser = async user=>{
//     let db = await connectDB();
//     let collection = db.collection(`users`);
//     await collection.insertOne(user);
// };

// app.post('/register', async (req,res)=>{
//     let { name, email, username, password} = req.body;
//     let db = await connectDB();
//     let collection = db.collection(`users`);

//     let user = await collection.findOne({username:username});
//     let e = await collection.findOne({email:email});
//     let token = 'error test';
//     if (user && e) {
//         console.log(name);
//         return res.status(400).send({
//             message: 'This is an error!'
//          });
        
//         // return res.status(500).send(`This username and email are not available. Please try another name.`);
//     }
//     else if (user) {
//         console.log(email);
//         return res.send({token});
//         // return res.status(500).send(`This username is not available. Please try another name.`);
//     }
//     else if(e) {
//         console.log(username);
//         return res.send({token});
//         // return res.status(500).send(`This email is not available. Please try another email.`);
//     }
//     console.log(password)
//     let newUser = {
//         name:name,
//         email:email,
//         username:username,
//         passwordHash:md5(password),
//     } 
    
//     await addNewUser(newUser)
//     // await collection.insertOne(newUser);
//     res.status(200).send();
// });