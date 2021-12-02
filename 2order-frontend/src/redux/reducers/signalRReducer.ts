import { ActionType } from '../action-types/index'
import { SignalRActions } from '../actions/signalRActions'

interface SignalRState {
    connection: signalR.HubConnection | undefined;
    loading: boolean;
    error: string | null;
}

const initialState = {
    connection: undefined,
    loading: false,
    error: null
}

const signalrReducer = (state: SignalRState = initialState, action: SignalRActions): SignalRState => {
    switch(action.type){
        case ActionType.DODAJ_KONEKCIJU_LOADING:
            return { loading: true, error: null, connection: undefined }
        case ActionType.DODAJ_KONEKCIJU_SUCCESS:
            return { loading: false, error: null, connection: action.payload }
        case ActionType.DODAJ_KONEKCIJU_ERROR:
            return { loading: false, error: action.payload, connection: undefined }
        case ActionType.VRATI_KONEKCIJU:
            return { ...state }
        default: 
            return state;
    }
}

export default signalrReducer;