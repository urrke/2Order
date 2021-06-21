import Recenzija from '../../model/Recenzija';
import { ActionType } from '../action-types'

interface VratiRecenzijuAction {
    type: ActionType.VRATI_RECENZIJU_LOADING;
}

interface VratiRecenzijuActionSuccess {
    type: ActionType.VRATI_RECENZIJU_SUCCESS;
    payload: Recenzija;
}

interface VratiRecenzijuActionError {
    type: ActionType.VRATI_RECENZIJU_ERROR;
    payload: string;
}

interface VratiSveRecenzijeAction {
    type: ActionType.VRATI_SVE_RECENZIJE_LOADING;
}

interface VratiSveRecenzijeActionSuccess {
    type: ActionType.VRATI_SVE_RECENZIJE_SUCCESS;
    payload: Recenzija[];
}

interface VratiSveRecenzijeActionError {
    type: ActionType.VRATI_SVE_RECENZIJE_ERROR;
    payload: string;
}

interface VratiSveRecenzijeKorisnikaAction {
    type: ActionType.VRATI_SVE_RECENZIJE_KORISNIKA_LOADING;
}

interface VratiSveRecenzijeKorisnikaActionSuccess {
    type: ActionType.VRATI_SVE_RECENZIJE_KORISNIKA_SUCCESS;
    payload: Recenzija[];
}

interface VratiSveRecenzijeKorisnikaActionError {
    type: ActionType.VRATI_SVE_RECENZIJE_KORISNIKA_ERROR;
    payload: string;
}

interface DodajRecenzijuAction {
    type: ActionType.DODAJ_RECENZIJU_LOADING;
}

interface DodajRecenzijuActionSuccess {
    type: ActionType.DODAJ_RECENZIJU_SUCCESS;
    payload: Recenzija;
}

interface DodajRecenzijuActionError {
    type: ActionType.DODAJ_RECENZIJU_ERROR;
    payload: string;
}

interface ObrisiRecenzijuAction {
    type: ActionType.OBRISI_RECENZIJU_LOADING;
}

interface ObrisiRecenzijuActionSuccess {
    type: ActionType.OBRISI_RECENZIJU_SUCCESS;
    payload: Recenzija;
}

interface ObrisiRecenzijuActionError {
    type: ActionType.OBRISI_RECENZIJU_ERROR;
    payload: string;
}

export type RecenzijaAction = VratiRecenzijuAction | VratiRecenzijuActionSuccess | VratiRecenzijuActionError
| VratiSveRecenzijeAction | VratiSveRecenzijeActionSuccess | VratiSveRecenzijeActionError
| VratiSveRecenzijeKorisnikaAction | VratiSveRecenzijeKorisnikaActionSuccess | VratiSveRecenzijeKorisnikaActionError
| DodajRecenzijuAction | DodajRecenzijuActionSuccess | DodajRecenzijuActionError
| ObrisiRecenzijuAction | ObrisiRecenzijuActionSuccess | ObrisiRecenzijuActionError;