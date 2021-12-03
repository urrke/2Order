import Sto from '../../model/Sto';
import { ActionType } from '../action-types/index'
import { StoAction } from '../actions/stoActions'
import { filterData, pushToArray, updateData, filterOneData, updateTablePosition, swap } from './functionsForChangeState'

interface StoState {
    loading: boolean;
    error: string | null;
    stolovi: Sto[];
}

const initialState = {
    loading: false,
    error: null,
    stolovi: []
}

const stoReducer = (state: StoState = initialState, action: StoAction): StoState => {
    switch(action.type){
        case ActionType.VRATI_SVE_STOLOVE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_SVE_STOLOVE_SUCCESS:
            return { loading: false, error: null, stolovi: action.payload }
        case ActionType.VRATI_SVE_STOLOVE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_STO_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_STO_SUCCESS:
            return { loading: false, error: null, stolovi: state.stolovi }
        case ActionType.VRATI_STO_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_STOLOVE_KONOBARA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_STOLOVE_KONOBARA_SUCCESS:
            return { loading: false, error: null, stolovi: state.stolovi }
        case ActionType.VRATI_STOLOVE_KONOBARA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_SVE_SLOBODNE_ILI_ZAUZETE_STOLOVE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_SVE_SLOBODNE_ILI_ZAUZETE_STOLOVE_SUCCESS:
            return { loading: false, error: null, stolovi: state.stolovi }
        case ActionType.VRATI_SVE_SLOBODNE_ILI_ZAUZETE_STOLOVE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.DODAJ_STO_LOADING:
            return { ...state, loading: false, error: null }
        case ActionType.DODAJ_STO_SUCCESS:
            return { loading: false, error: null, stolovi: pushToArray(action.payload, state.stolovi) }
        case ActionType.DODAJ_STO_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.OBRISI_STO_LOADING:
            return { ...state, loading: false, error: null }
        case ActionType.OBRISI_STO_SUCCESS:
            return { loading: false, error: null, stolovi: filterOneData(action.payload, state.stolovi) }
        case ActionType.OBRISI_STO_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.OBRISI_STOLOVE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.OBRISI_STOLOVE_SUCCESS:
            return { loading: false, error: null, stolovi: filterData(action.payload, state.stolovi) }
        case ActionType.OBRISI_STOLOVE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.AZURIRAJ_STO_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.AZURIRAJ_STO_SUCCESS:
            return { loading: false, error: null, stolovi: state.stolovi }
        case ActionType.AZURIRAJ_STO_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.AZURIRAJ_STOLOVE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.AZURIRAJ_STOLOVE_SUCCESS:
            return { loading: false, error: null, stolovi: updateData(action.payload, state.stolovi) }
        case ActionType.AZURIRAJ_STOLOVE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.ZAUZMI_ILI_OSLOBODI_STO_LOADING:
            return { ...state, loading: false, error: null }
        case ActionType.ZAUZMI_ILI_OSLOBODI_STO_SUCCESS:
            return { loading: false, error: null, stolovi: swap(action.payload, state.stolovi) }
        case ActionType.ZAUZMI_ILI_OSLOBODI_STO_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.AZURIRAJ_POZICIJU_STOLA:
            return { loading: false, error: null, stolovi: updateTablePosition(state.stolovi, action.payload.id, action.payload.x, action.payload.y) }
        case ActionType.POSTAVI_TRENUTNU_PORUDZBINU:
            return { loading: false, error: null, stolovi: state.stolovi }
        default: 
            return state;
    }
}

export default stoReducer;