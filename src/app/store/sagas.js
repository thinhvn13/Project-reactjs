import {
    take,
    put,
    select
} from 'redux-saga/effects';
import uuid from 'uuid';
import axios from 'axios';
import * as mutations from './mutations';
import { history } from './history';

const url=process.env.NODE_ENV ==`production`? `` : "http://localhost:3000";

export function* taskCreationSaga(){
    while(true){
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerID = `U1`;
        const taskID = uuid();
        yield put(mutations.createTask(taskID, groupID, ownerID));
        console.log("Got group ID", groupID);

        const {res}=yield axios.post(url + '/task/new',{
            task:{
                id:taskID,
                group: groupID,
                owner: ownerID,
                isComplete: false,
                name: "New Task"
            }
        });
    }
}

export function* taskModificationSaga(){
    while(true){
        const task = yield take([
            mutations.SET_TASK_NAME,
            mutations.SET_TASK_GROUP,
            mutations.SET_TASK_GROUP
        ]);

        axios.post(url+'/task/update',{
            task:{
                id: task.taskID,
                group: task.groupID,
                name: task.name,
                isComplete: task.isComplete
            }
        });
    }
}

export function* userAuthenticationSaga(){
    while (true){
        const {username, password} = yield take(mutations.REQUEST_AUTHENTICATE_USER);
        try {
            const { data } = yield axios.post(url + `/authenticate`, {username,password});
            if(!data){
                throw new Error();
            }
            yield put(mutations.setState(data.state));
            yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED, data));
            history.push(`/dashboard`);
        } catch (e) {
            /* catch block handles failed login */
            yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
            console.log("error");
        }
    }
}

// my code
//request http to create new user
export function* userCreationSaga(){
    while(true){
        const {name, email, username, password} = yield take(mutations.REQUEST_USER_ACCOUNT_CREATION);
        // yield put(mutations.createUser(nameUser, emailUser, usernameUser, passwordUser));
        try{
        const { data } = yield axios.post(url + `/registeruser`,{name, email, username, password});
        // debugger;
        // console.log(data)
        if(!data)
        {
            throw new Error();
        }
        else if(data.msg == mutations.CREATE_USER_SUCCESSFULLY){
            history.push(`/`);
        }
        yield put(mutations.processCreateUser(data.msg));
    }catch (e){
        console.log(e)
    }

    }
}
export function* emailInsertSaga(){
    while(true){
        const {email} = yield take(mutations.INSERT_EMAIL);
        console.log(email);
        try{
            const { data } = yield axios.post(url + `/registeremail`,{email});
            console.log('test',data);
        }catch (e){
            console.log(e)
        }
    }
}

