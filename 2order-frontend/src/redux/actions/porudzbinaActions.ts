import Porudzbina from '../../model/Porudzbina';
import { ActionType } from '../action-types'

interface VratiPorudzbinuAction {
    type: ActionType.VRATI_PORUDZBINU_LOADING;
}

interface VratiPorudzbinuActionSuccess {
    type: ActionType.VRATI_PORUDZBINU_SUCCESS;
    payload: Porudzbina;
}

interface VratiPorudzbinuActionError {
    type: ActionType.VRATI_PORUDZBINU_ERROR;
    payload: string;
}

interface VratiSvePorudzbineAction {
    type: ActionType.VRATI_SVE_PORUDZBINE_LOADING;
}

interface VratiSvePorudzbineActionSuccess {
    type: ActionType.VRATI_SVE_PORUDZBINE_SUCCESS;
    payload: Porudzbina[];
}

interface VratiSvePorudzbineActionError {
    type: ActionType.VRATI_SVE_PORUDZBINE_ERROR;
    payload: string;
}

interface VratiSvePorudzbineKorisnikaAction {
    type: ActionType.VRATI_SVE_PORUDZBINE_KORISNIKA_LOADING;
}

interface VratiSvePorudzbineKorisnikaActionSuccess {
    type: ActionType.VRATI_SVE_PORUDZBINE_KORISNIKA_SUCCESS;
    payload: Porudzbina[];
}

interface VratiSvePorudzbineKorisnikaActionError {
    type: ActionType.VRATI_SVE_PORUDZBINE_KORISNIKA_ERROR;
    payload: string;
}

interface DodajPorudzbinuAction {
    type: ActionType.DODAJ_PORUDZBINU_LOADING;
}

interface DodajPorudzbinuActionSuccess {
    type: ActionType.DODAJ_PORUDZBINU_SUCCESS;
    payload: Porudzbina;
}

interface DodajPorudzbinuActionError {
    type: ActionType.DODAJ_PORUDZBINU_ERROR;
    payload: string;
}

interface ObrisiPorudzbinuAction {
    type: ActionType.OBRISI_PORUDZBINU_LOADING;
}

interface ObrisiPorudzbinuActionSuccess {
    type: ActionType.OBRISI_PORUDZBINU_SUCCESS;
    payload: Porudzbina;
}

interface ObrisiPorudzbinuActionError {
    type: ActionType.OBRISI_PORUDZBINU_ERROR;
    payload: string;
}

export type PorudzbinaAction = VratiPorudzbinuAction | VratiPorudzbinuActionSuccess | VratiPorudzbinuActionError
| VratiSvePorudzbineAction | VratiSvePorudzbineActionSuccess | VratiSvePorudzbineActionError
| VratiSvePorudzbineKorisnikaAction | VratiSvePorudzbineKorisnikaActionSuccess | VratiSvePorudzbineKorisnikaActionError
| DodajPorudzbinuAction | DodajPorudzbinuActionSuccess | DodajPorudzbinuActionError
| ObrisiPorudzbinuAction | ObrisiPorudzbinuActionSuccess | ObrisiPorudzbinuActionError;