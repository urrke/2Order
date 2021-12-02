import Korisnik from '../../model/Korisnik';
import { ActionType } from '../action-types/index'
import { KorisnikAction } from '../actions/korisnikActions'
import { filterData, pushToArray, updateData } from './functionsForChangeState'

interface KorisnikState {
    loading: boolean;
    error: string | null;
    korisnici: Korisnik[];
}

const initialState = {
    loading: false,
    error: null,
    korisnici: []
}

const korisnikReducer = (state: KorisnikState = initialState, action: KorisnikAction): KorisnikState => {
    switch(action.type){
        case ActionType.VRATI_SVE_KORISNIKE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_SVE_KORISNIKE_SUCCESS:
            return { loading: false, error: null, korisnici: action.payload }
        case ActionType.VRATI_SVE_KORISNIKE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_KORISNIKA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_KORISNIKA_SUCCESS:
            return { loading: false, error: null, korisnici: state.korisnici }
        case ActionType.VRATI_KORISNIKA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_KORISNIKA_PO_EMAILU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_KORISNIKA_PO_EMAILU_SUCCESS:
            return { loading: false, error: null, korisnici: state.korisnici }
        case ActionType.VRATI_KORISNIKA_PO_EMAILU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.VRATI_KORISNIKE_PO_TIPU_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.VRATI_KORISNIKE_PO_TIPU_SUCCESS:
            return { loading: false, error: null, korisnici: action.payload }
        case ActionType.VRATI_KORISNIKE_PO_TIPU_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.DODAJ_KORISNIKA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.DODAJ_KORISNIKA_SUCCESS:
            return { loading: false, error: null, korisnici: pushToArray(action.payload, state.korisnici) }
        case ActionType.DODAJ_KORISNIKA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.OBRISI_KORISNIKA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.OBRISI_KORISNIKA_SUCCESS:
            return { loading: false, error: null, korisnici: state.korisnici }
        case ActionType.OBRISI_KORISNIKA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.OBRISI_KORISNIKE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.OBRISI_KORISNIKE_SUCCESS:
            return { loading: false, error: null, korisnici: filterData(action.payload, state.korisnici) }
        case ActionType.OBRISI_KORISNIKE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.AZURIRAJ_KORISNIKA_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.AZURIRAJ_KORISNIKA_SUCCESS:
            return { loading: false, error: null, korisnici: state.korisnici }
        case ActionType.AZURIRAJ_KORISNIKA_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ActionType.AZURIRAJ_KORISNIKE_LOADING:
            return { ...state, loading: true, error: null }
        case ActionType.AZURIRAJ_KORISNIKE_SUCCESS:
            return { loading: false, error: null, korisnici: state.korisnici }
        case ActionType.AZURIRAJ_KORISNIKE_ERROR:
            return { ...state, loading: false, error: action.payload }
        default: 
            return state;
    }
}

export default korisnikReducer;