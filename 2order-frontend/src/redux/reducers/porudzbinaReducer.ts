import Porudzbina from '../../model/Porudzbina';
import { ActionType } from '../action-types/index'
import { PorudzbinaAction } from '../actions/porudzbinaActions'
import { filterData, pushToArray, updateData } from './functionsForChangeState'

interface PorudzbinaState {
    loading: boolean;
    error: string | null;
    porudzbine: Porudzbina[];
}

const initialState = {
    loading: false,
    error: null,
    porudzbine: []
}

const porudzbinaReducer = (state: PorudzbinaState = initialState, action: PorudzbinaAction): PorudzbinaState => {
    switch(action.type){
        case ActionType.VRATI_PORUDZBINU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_PORUDZBINU_SUCCESS:
            return { loading: false, error: null, porudzbine: state.porudzbine }
        case ActionType.VRATI_PORUDZBINU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_SVE_PORUDZBINE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_SVE_PORUDZBINE_SUCCESS:
            return { loading: false, error: null, porudzbine: state.porudzbine }
        case ActionType.VRATI_SVE_PORUDZBINE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_SVE_PORUDZBINE_KORISNIKA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_SVE_PORUDZBINE_KORISNIKA_SUCCESS:
            return { loading: false, error: null, porudzbine: state.porudzbine }
        case ActionType.VRATI_SVE_PORUDZBINE_KORISNIKA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.DODAJ_PORUDZBINU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.DODAJ_PORUDZBINU_SUCCESS:
            return { loading: false, error: null, porudzbine: state.porudzbine }
        case ActionType.DODAJ_PORUDZBINU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.OBRISI_PORUDZBINU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.OBRISI_PORUDZBINU_SUCCESS:
            return { loading: false, error: null, porudzbine: state.porudzbine }
        case ActionType.OBRISI_PORUDZBINU_ERROR:
            return { ...state, loading: false, error: action.payload }
        default: 
            return state;
    }
}

export default porudzbinaReducer;