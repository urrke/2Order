import Korisnik from '../../model/Korisnik'
import { ActionType } from '../action-types/index'
import { AuthenticationAction } from '../actions/authActions'

interface LoginData {
    token: string;
    korisnik: Korisnik;
}

interface AuthState {
    data: LoginData | null;
    loading: boolean;
    error: string | null;
}

const initialState = {
    data: null,
    loading: false,
    error: null,
}

const authReducer = (state: AuthState = initialState, action: AuthenticationAction): AuthState => {
    switch(action.type){
        case ActionType.PRIJAVA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.PRIJAVA_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionType.PRIJAVA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.ODJAVA:
            return { loading: false, error: null, data: null }
        case ActionType.VRATI_TOKEN:
            return { ...state }
        default: 
            return state;
    }
}

export default authReducer;