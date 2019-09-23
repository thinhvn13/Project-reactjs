//define action
export const SET_TASK_COMPLETE = `SET_TASK_COMPLETE`;
export const SET_TASK_GROUP = `SET_TASK_GROUP`;
export const SET_TASK_NAME = `SET_TASK_NAME`;
export const ADD_TASK_COMMENT = `ADD_TASK_COMMENT`;
export const REQUEST_TASK_CREATION = `REQUEST_TASK_CREATION`;
export const CREATE_TASK = `CREATE_TASK`;
export const SET_STATE = `SET_STATE`;
export const USERNAME_RESERVED = `USERNAME_RESERVED`;
export const REQUEST_USER_ACCOUNT_CREATION = `REQUEST_USER_ACCOUNT_CREATION`;
//user
export const REQUEST_AUTHENTICATE_USER = `REQUEST_AUTHENTICATE_USER`;
export const PROCESSING_AUTHENTICATE_USER = `PROCESSING_AUTHENTICATE_USER`;
export const AUTHENTICATING = `AUTHENTICATING`;
export const AUTHENTICATED = `AUTHENTICATED`;
export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;
//my action
export const CREATE_USER = `CREATE_USER`;
export const CREATEING_USER = `CREATEING_USER`;
export const PROCESSING_CREATE_USER = `PROCESSING_CREATE_USER`;

export const ERROR_MAIL = `ERROR_MAIL`;
export const ERROR_USERNAME = `ERROR_USERNAME`;
export const ERROR_USERNAME_EMAIL = `ERROR_USERNAME_MAIL`;
export const CREATE_USER_SUCCESSFULLY = `CREATE_USER_SUCCESSFULLY`;
export const REQUEST_CREATE_USER = `REQUEST_CREATE_USER`;

export const INSERT_EMAIL = `INSERT_EMAIL`;
export const INSERT_EMAIL_SUCCESS = `INSERT_EMAIL_SUCCESS`;

export const setTaskCompletion = (id, isComplete)=>({
    type: SET_TASK_COMPLETE,
    taskID: id,
    isComplete
});

export const addTaskComment = (commentID, taskID, ownerID, content)=>({
    type:ADD_TASK_COMMENT,
    id:commentID,
    task: taskID,
    owner: ownerID,
    content
});

export const requestTaskCreation = (groupID)=>({
    type:REQUEST_TASK_CREATION,
    groupID
});

export const createTask = (taskID, groupID, ownerID)=>({
    type:CREATE_TASK,
    taskID,
    groupID,
    ownerID
});

export const setTaskGroup = (taskID, groupID)=>({
    type:SET_TASK_GROUP,
    taskID,
    groupID
});

export const setTaskName = (taskID, name)=>({
    type:SET_TASK_NAME,
    taskID,
    name
});
//
export const requestAuthenticateUser = (username, password)=>({
    type:REQUEST_AUTHENTICATE_USER,
    username,
    password
});

export const processAuthenticateUser = (status = AUTHENTICATING, session = null)=>({
    type: PROCESSING_AUTHENTICATE_USER,
    authenticated: status,
    session,
});

export const setState = (state = {})=>({
    type:SET_STATE,
    state
});

//Create user
export const createUser = (nameNewUser, emailNewUser, usernameNewUser, passwordNewUser)=>({
    type:CREATE_USER,
    nameNewUser,
    emailNewUser,
    usernameNewUser,
    passwordNewUser
});

export const requestCreateUserAccount = (name, email, username, password)=>({
    type:REQUEST_USER_ACCOUNT_CREATION,
    name,
    email,
    username,
    password
});


export const processCreateUser = (status = CREATEING_USER)=>({
    type:PROCESSING_CREATE_USER,
    status_create_user: status
});

export const insertEmail = (email)=>({
    type: INSERT_EMAIL,
    email

});

