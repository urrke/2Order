import StavkaMenija from '../../model/StavkaMenija';
import { ActionType } from '../action-types/index'
import { StavkaMenijaAction } from '../actions/stavkaMenijaActions'
import { filterData, pushToArray, updateData } from './functionsForChangeState'

interface StavkaMenijaState {
    loading: boolean;
    error: string | null;
    stavkeMenija: StavkaMenija[];
}

const initialState = {
    loading: false,
    error: null,
    stavkeMenija: []
}

const stavkaMenijaReducer = (state: StavkaMenijaState = initialState, action: StavkaMenijaAction): StavkaMenijaState => {
    switch(action.type){
        case ActionType.VRATI_CEO_MENI_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_CEO_MENI_SUCCESS:
            return { loading: false, error: null, stavkeMenija: action.payload }
        case ActionType.VRATI_CEO_MENI_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_STAVKU_MENIJA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_STAVKU_MENIJA_SUCCESS:
            return { loading: false, error: null, stavkeMenija: state.stavkeMenija }
        case ActionType.VRATI_STAVKU_MENIJA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_STAVKE_MENIJA_PO_TIPU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_STAVKE_MENIJA_PO_TIPU_SUCCESS:
            return { loading: false, error: null, stavkeMenija: action.payload }
        case ActionType.VRATI_STAVKE_MENIJA_PO_TIPU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_STAVKE_MENIJA_PO_GRUPI_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_STAVKE_MENIJA_PO_GRUPI_SUCCESS:
            return { loading: false, error: null, stavkeMenija: action.payload }
        case ActionType.VRATI_STAVKE_MENIJA_PO_GRUPI_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.DODAJ_STAVKU_MENIJA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.DODAJ_STAVKU_MENIJA_SUCCESS:
            return { loading: false, error: null, stavkeMenija: pushToArray(action.payload, state.stavkeMenija) }
        case ActionType.DODAJ_STAVKU_MENIJA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.OBRISI_STAVKU_MENIJA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.OBRISI_STAVKU_MENIJA_SUCCESS:
            return { loading: false, error: null, stavkeMenija: state.stavkeMenija }
        case ActionType.OBRISI_STAVKU_MENIJA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.OBRISI_STAVKE_MENIJA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.OBRISI_STAVKE_MENIJA_SUCCESS:
            return { loading: false, error: null, stavkeMenija: filterData(action.payload, state.stavkeMenija) }
        case ActionType.OBRISI_STAVKE_MENIJA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.AZURIRAJ_STAVKU_MENIJA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.AZURIRAJ_STAVKU_MENIJA_SUCCESS:
            return { loading: false, error: null, stavkeMenija: state.stavkeMenija }
        case ActionType.AZURIRAJ_STAVKU_MENIJA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.AZURIRAJ_STAVKE_MENIJA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.AZURIRAJ_STAVKE_MENIJA_SUCCESS:
            return { loading: false, error: null, stavkeMenija: state.stavkeMenija }
        case ActionType.AZURIRAJ_STAVKE_MENIJA_ERROR:
            return { ...state, loading: false, error: action.payload }
        default: 
            return state;
    }
}

export default stavkaMenijaReducer;