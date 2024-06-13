import {userDefault} from './userDefault'
import * as types from './action-types'

const userState = {
    loading : false,
    userData : userDefault,
    error : null
}


const userReducer = (state =  userState, action: { type: any, payload :any })=>{
    switch(action.type){
        case types.LOGIN_START:
        return {
            ... state,
            loading: true
        };
        case types.LOGIN_SUCCESS:
            return {
                ... state,
                loading: false,
                userData : action?.payload
            };
            case types.LOGIN_FAIL:
                return {
                    ... state,
                    loading: false,
                    error: action?.payload 
                };
        default:
            return state
    }
}

export default userReducer