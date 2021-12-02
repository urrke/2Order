import Recenzija from '../../model/Recenzija';
import { ActionType } from '../action-types/index'
import { RecenzijaAction } from '../actions/recenzijaActions'
import { filterData, pushToArray, updateData } from './functionsForChangeState'

interface RecenzijaState {
    loading: boolean;
    error: string | null;
    recenzije: Recenzija[];
}

const initialState = {
    loading: false,
    error: null,
    recenzije: []
}

const recenzijaReducer = (state: RecenzijaState = initialState, action: RecenzijaAction): RecenzijaState => {
    switch(action.type){
        case ActionType.VRATI_SVE_RECENZIJE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_SVE_RECENZIJE_SUCCESS:
            return { loading: false, error: null, recenzije: action.payload }
        case ActionType.VRATI_SVE_RECENZIJE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_RECENZIJU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_RECENZIJU_SUCCESS:
            return { loading: false, error: null, recenzije: state.recenzije }
        case ActionType.VRATI_RECENZIJU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_RECENZIJU_RACUNA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_RECENZIJU_RACUNA_SUCCESS:
            return { loading: false, error: null, recenzije: state.recenzije }
        case ActionType.VRATI_RECENZIJU_RACUNA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_RECENZIJE_PO_DATUMU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_RECENZIJE_PO_DATUMU_SUCCESS:
            return { loading: false, error: null, recenzije: state.recenzije }
        case ActionType.VRATI_RECENZIJE_PO_DATUMU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_RECENZIJE_KORISNIKA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_RECENZIJE_KORISNIKA_SUCCESS:
            return { loading: false, error: null, recenzije: action.payload }
        case ActionType.VRATI_RECENZIJE_KORISNIKA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.DODAJ_RECENZIJU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.DODAJ_RECENZIJU_SUCCESS:
            return { loading: false, error: null, recenzije: state.recenzije }
        case ActionType.DODAJ_RECENZIJU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.OBRISI_RECENZIJU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.OBRISI_RECENZIJU_SUCCESS:
            return { loading: false, error: null, recenzije: state.recenzije }
        case ActionType.OBRISI_RECENZIJU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.OBRISI_RECENZIJE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.OBRISI_RECENZIJE_SUCCESS:
            return { loading: false, error: null, recenzije: filterData(action.payload, state.recenzije) }
        case ActionType.OBRISI_RECENZIJE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.AZURIRAJ_RECENZIJU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.AZURIRAJ_RECENZIJU_SUCCESS:
            return { loading: false, error: null, recenzije: state.recenzije }
        case ActionType.AZURIRAJ_RECENZIJU_ERROR:
            return { ...state, loading: false, error: action.payload }
        default: 
            return state;
    }
}

export default recenzijaReducer;