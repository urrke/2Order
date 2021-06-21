import Dostava from '../../model/Sto';
import { ActionType } from '../action-types/index'
import { DostavaAction } from '../actions/dostavaActions'
import { filterData, pushToArray, updateData } from './functionsForChangeState'

interface DostavaState {
    loading: boolean;
    error: string | null;
    dostave: Dostava[];
}

const initialState = {
    loading: false,
    error: null,
    dostave: []
}

const dostavaReducer = (state: DostavaState = initialState, action: DostavaAction): DostavaState => {
    switch(action.type){
        case ActionType.VRATI_DOSTAVU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_DOSTAVU_SUCCESS:
            return { loading: false, error: null, dostave: state.dostave }
        case ActionType.VRATI_DOSTAVU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_SVE_DOSTAVE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_SVE_DOSTAVE_SUCCESS:
            return { loading: false, error: null, dostave: state.dostave }
        case ActionType.VRATI_SVE_DOSTAVE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_SVE_DANASNJE_DOSTAVE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_SVE_DANASNJE_DOSTAVE_SUCCESS:
            return { loading: false, error: null, dostave: state.dostave }
        case ActionType.VRATI_SVE_DANASNJE_DOSTAVE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_SVE_DOSTAVE_KORISNIKA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_SVE_DOSTAVE_KORISNIKA_SUCCESS:
            return { loading: false, error: null, dostave: state.dostave }
        case ActionType.VRATI_SVE_DOSTAVE_KORISNIKA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_DOSTAVE_SA_ISTOM_SIFROM_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_DOSTAVE_SA_ISTOM_SIFROM_SUCCESS:
            return { loading: false, error: null, dostave: state.dostave }
        case ActionType.VRATI_DOSTAVE_SA_ISTOM_SIFROM_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.DODAJ_DOSTAVU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.DODAJ_DOSTAVU_SUCCESS:
            return { loading: false, error: null, dostave: state.dostave }
        case ActionType.DODAJ_DOSTAVU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.OBRISI_DOSTAVU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.OBRISI_DOSTAVU_SUCCESS:
            return { loading: false, error: null, dostave: state.dostave }
        case ActionType.OBRISI_DOSTAVU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.AZURIRAJ_ADRESU_DOSTAVE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.AZURIRAJ_ADRESU_DOSTAVE_SUCCESS:
            return { loading: false, error: null, dostave: state.dostave }
        case ActionType.AZURIRAJ_ADRESU_DOSTAVE_ERROR:
            return { ...state, loading: false, error: action.payload }
        default: 
            return state;
    }
}

export default dostavaReducer;