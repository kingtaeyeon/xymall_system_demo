import actionTypes from "../actions/actionTypes";

const initState = {
    id: '',
    dislpayName: '',
    avatar: '',
    role: '',
    isLogin: false,
    isLoading: false
}

export default (state = initState, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.START_LOGIN:
            return  {
                ...state,
                isLoading: true
            }
        case actionTypes.LIGIN_SUCCESS:
            return {
                ...state,
                ...action.payload.userInfo,
                isLogin: true,
                isLoading: false
            }
        case actionTypes.LIGIN_FAILED:
            return {
                initState
            }
        default:
            return state
    }
}