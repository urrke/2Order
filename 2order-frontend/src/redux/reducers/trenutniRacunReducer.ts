import StavkaMenija from '../../model/StavkaMenija';
import { ActionType } from '../action-types/index'
import { TrenutniRacunAction } from '../actions/trenutniRacunActions'
import { findAndDelete, pushToArray } from './functionsForChangeState'

interface StavkaIBrojPonavljanja {
    stavka: StavkaMenija;
    broj: number;
}

interface TrenutniRacunState {
    stavke: StavkaMenija[];
    racun: StavkaIBrojPonavljanja[];
    iznos: number | null;
    idStola: number | null;
    nazivStola: string | null;
    imeKonobara: string | null;
}

const initialState = {
    stavke: [],
    racun: [],
    iznos: null,
    idStola: null,
    nazivStola: null,
    imeKonobara: null
}

const trenutniRacunReducer = (state: TrenutniRacunState = initialState, action: TrenutniRacunAction): TrenutniRacunState => {
    switch(action.type){
        case ActionType.VRATI_STAVKE_IZ_TRENUTNOG_RACUNA:
            return { ...state, stavke: state.stavke }
        case ActionType.DODAJ_STAVKU_U_TRENUTNI_RACUN:
            return { ...state, stavke: pushToArray(action.payload, state.stavke) }
        case ActionType.OBRISI_STAVKU_IZ_TRENUTNOG_RACUNA:
            return { ...state, stavke: findAndDelete(action.payload, state.stavke) }
        case ActionType.DODAJ_IZNOS_U_TRENUTNI_RACUN:
            return { ...state, iznos: action.payload }
        case ActionType.VRATI_IZNOS_IZ_TRENUTNOG_RACUNA:
            return { ...state, iznos: state.iznos }
        case ActionType.DODAJ_RACUN:
            return { ...state, racun: pushToArray(action.payload, state.racun) }
        case ActionType.VRATI_RACUN:
            return { ...state, racun: state.racun }
        case ActionType.POSTAVI_TRENUTNI_STO:
            return { ...state, idStola: action.payload.id, nazivStola: action.payload.naziv, imeKonobara: action.payload.imeKonobara }
        default: 
            return state;
    }
}

export default trenutniRacunReducer;