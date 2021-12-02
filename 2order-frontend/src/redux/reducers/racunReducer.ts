import Racun from '../../model/Racun';
import { ActionType } from '../action-types/index'
import { RacunAction } from '../actions/racunActions'
import { filterData, pushToArray, updateData } from './functionsForChangeState'

interface RacunState {
    loading: boolean;
    error: string | null;
    racuni: Racun[];
}

const initialState = {
    loading: false,
    error: null,
    racuni: []
}

const racunReducer = (state: RacunState = initialState, action: RacunAction): RacunState => {
    switch(action.type){
        case ActionType.VRATI_SVE_RACUNE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_SVE_RACUNE_SUCCESS:
            return { loading: false, error: null, racuni: action.payload }
        case ActionType.VRATI_SVE_RACUNE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_RACUN_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_RACUN_SUCCESS:
            return { loading: false, error: null, racuni: state.racuni }
        case ActionType.VRATI_RACUN_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_RACUNE_PO_TIPU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_RACUNE_PO_TIPU_SUCCESS:
            return { loading: false, error: null, racuni: state.racuni }
        case ActionType.VRATI_RACUNE_PO_TIPU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_RACUNE_PO_DATUMU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_RACUNE_PO_DATUMU_SUCCESS:
            return { loading: false, error: null, racuni: state.racuni }
        case ActionType.VRATI_RACUNE_PO_DATUMU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_RACUNE_PRE_DATUMA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_RACUNE_PRE_DATUMA_SUCCESS:
            return { loading: false, error: null, racuni: state.racuni }
        case ActionType.VRATI_RACUNE_PRE_DATUMA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_RACUNE_KORISNIKA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_RACUNE_KORISNIKA_SUCCESS:
            return { loading: false, error: null, racuni: action.payload }
        case ActionType.VRATI_RACUNE_KORISNIKA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.DODAJ_RACUN_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.DODAJ_RACUN_SUCCESS:
            return { loading: false, error: null, racuni: state.racuni }
        case ActionType.DODAJ_RACUN_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.OBRISI_RACUN_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.OBRISI_RACUN_SUCCESS:
            return { loading: false, error: null, racuni: state.racuni }
        case ActionType.OBRISI_RACUN_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.OBRISI_RACUNE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.OBRISI_RACUNE_SUCCESS:
            return { loading: false, error: null, racuni: filterData(action.payload, state.racuni) }
        case ActionType.OBRISI_RACUNE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.AZURIRAJ_RACUN_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.AZURIRAJ_RACUN_SUCCESS:
            return { loading: false, error: null, racuni: state.racuni }
        case ActionType.AZURIRAJ_RACUN_ERROR:
            return { ...state, loading: false, error: action.payload }
        default: 
            return state;
    }
}

export default racunReducer;