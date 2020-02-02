import { take, put, select } from 'redux-saga/effects';
import uuid from 'uuid';
import axios from 'axios';

import { history } from './history'
import * as mutations from './mutations';
const url = process.env.NODE_ENV === 'production' ? `` : `http://localhost:7777`;

export function* userAuthenticationSaga(){
    while (true){
        const {username,password} = yield take(mutations.REQUEST_AUTHENTICATE_USER);
        try {
            const { data } = yield axios.post(url + `/authenticate`,{username,password});
            yield put(mutations.setState(data.state));
            yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED, {
                id:"U1", // todo... get ID from response
                token:data.token
            }));
            history.push(`/dashboard`);
        } catch (e) {
            /* catch block handles failed login */
            yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
        }
    }
}

export function* userAccountCreationSaga(){
    while (true) {
        const {username, password } = yield take(mutations.REQUEST_USER_ACCOUNT_CREATION);
        try {
            const { data } = yield axios.post(url + `/user/create`, {username,password});
            console.log(data);

            yield put(mutations.setState({...data.state,session:{id:data.userID}}));
            yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));

            history.push('/dashboard');

        } catch (e) {
            console.error("Error",e);
            yield put(mutations.processAuthenticateUser(mutations.USERNAME_RESERVED));
        }
    }
}

export function* newEmployeeCreationSaga() {
    while (true) {
        const employee = yield take(mutations.REQUEST_NEW_EMPLOYEE_CREATION);
        try {
            const { data } = yield axios.post(url + `/employee/create`, { employee });
            console.log(data);
            yield put(mutations.setEmployeeState({employees: data.state }));
            yield put(mutations.processAuthenticateUser(mutations.NEW_EMPLOYEE_CREATED));
            yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));

            history.push('/dashboard');

        } catch (e) {
            console.error("Error",e);
            yield put(mutations.processAuthenticateUser(mutations.USERNAME_RESERVED));
        }
    }
}