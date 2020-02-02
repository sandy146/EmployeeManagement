export const REQUEST_AUTHENTICATE_USER = `REQUEST_AUTHENTICATE_USER`;
export const PROCESSING_AUTHENTICATE_USER = `PROCESSING_AUTHENTICATE_USER`;
export const AUTHENTICATING = `AUTHENTICATING`;
export const AUTHENTICATED = `AUTHENTICATED`;
export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;
export const SET_STATE = `SET_STATE`;
export const USERNAME_RESERVED = `USERNAME_RESERVED`;
export const REQUEST_USER_ACCOUNT_CREATION = `REQUEST_USER_ACCOUNT_CREATION`;
export const REQUEST_NEW_EMPLOYEE_CREATION = `REQUEST_NEW_EMPLOYEE_CREATION`;
export const NEW_EMPLOYEE_CREATED = `NEW_EMPLOYEE_CREATED`;
export const SET_EMPLOYEE_STATE = `SET_EMPLOYEE_STATE`;

export const requestAuthenticateUser = (username, password)=>({
    type:REQUEST_AUTHENTICATE_USER,
    username,
    password
});

export const processAuthenticateUser = (status = AUTHENTICATING, session = null)=>({
    type: PROCESSING_AUTHENTICATE_USER,
    session,
    authenticated: status
});

export const setState = (state = {})=>({
    type:SET_STATE,
    state
});

export const requestCreateUserAccount = (username,password)=>({
    type:REQUEST_USER_ACCOUNT_CREATION,
    username,
    password
});

export const setEmployeeState = (state = {})=>({
    type:SET_EMPLOYEE_STATE,
    state
});

export const requestCreateNewEmployee = (name, department, designation, dateofjoining, mobile, email, address, timeReport)=>({
    type:REQUEST_NEW_EMPLOYEE_CREATION,
    name,
    department,
    designation,
    dateofjoining,
    mobile,
    email,
    address,
    timeReport
});