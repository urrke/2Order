import Meni from '../../model/Meni';
import { ActionType } from '../action-types/index'
import { MeniAction } from '../actions/meniActions'
import { filterData, pushToArray, updateData } from './functionsForChangeState'

interface MeniState {
    loading: boolean;
    error: string | null;
    stavkeMenija: Meni[];
}

const initialState = {
    loading: false,
    error: null,
    stavkeMenija: []
}

const meniReducer = (state: MeniState = initialState, action: MeniAction): MeniState => {
    switch(action.type){
        case ActionType.VRATI_STAVKU_IZ_MENIJA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_STAVKU_IZ_MENIJA_SUCCESS:
            return { loading: false, error: null, stavkeMenija: state.stavkeMenija }
        case ActionType.VRATI_STAVKU_IZ_MENIJA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_CEO_MENI_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_CEO_MENI_SUCCESS:
            return { loading: false, error: null, stavkeMenija: action.payload }
        case ActionType.VRATI_CEO_MENI_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_MENI_PO_TIPU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_MENI_PO_TIPU_SUCCESS:
            return { loading: false, error: null, stavkeMenija: action.payload }
        case ActionType.VRATI_MENI_PO_TIPU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_MENI_PO_GRUPI_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_MENI_PO_GRUPI_SUCCESS:
            return { loading: false, error: null, stavkeMenija: action.payload }
        case ActionType.VRATI_MENI_PO_GRUPI_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.DODAJ_STAVKU_U_MENI_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.DODAJ_STAVKU_U_MENI_SUCCESS:
            return { loading: false, error: null, stavkeMenija: state.stavkeMenija }
        case ActionType.DODAJ_STAVKU_U_MENI_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.OBRISI_STAVKU_IZ_MENIJA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.OBRISI_STAVKU_IZ_MENIJA_SUCCESS:
            return { loading: false, error: null, stavkeMenija: state.stavkeMenija }
        case ActionType.OBRISI_STAVKU_IZ_MENIJA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.AZURIRAJ_CENU_STAVKE_IZ_MENIJA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.AZURIRAJ_CENU_STAVKE_IZ_MENIJA_SUCCESS:
            return { loading: false, error: null, stavkeMenija: state.stavkeMenija }
        case ActionType.AZURIRAJ_CENU_STAVKE_IZ_MENIJA_ERROR:
            return { ...state, loading: false, error: action.payload }
        default: 
            return state;
    }
}

export default meniReducer;