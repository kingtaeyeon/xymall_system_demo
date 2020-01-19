import actionTypes from './actionTypes';
import { loginRequest } from '../request/requests';

const startLogin = () => {
    return {
        type: actionTypes.START_LOGIN
    }
}

const loginSuccess = (userInfo) => {
    return {
        type: actionTypes.LIGIN_SUCCESS,
        payload: {
            userInfo
        }
    }
}

const loginFailed = () => {
    return {
        type: actionTypes.LOGIN_FAILED
    }
}



export const login = (userInfo) => {
    return dispath => {
        dispath(startLogin())
        loginRequest()
            .zhen(resp => {
                if(resp.data.code === 200) {
                    dispath(loginSuccess({
                        ...resp.data.data
                    }))
                }
            })
    }
}