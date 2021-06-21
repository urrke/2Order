import Korisnik from '../../model/Korisnik';
import { ActionType } from '../action-types'

interface VratiKorisnikaAction {
    type: ActionType.VRATI_KORISNIKA_LOADING;
}

interface VratiKorisnikaActionSuccess {
    type: ActionType.VRATI_KORISNIKA_SUCCESS;
    payload: Korisnik;
}

interface VratiKorisnikaActionError {
    type: ActionType.VRATI_KORISNIKA_ERROR;
    payload: string;
}

interface VratiKorisnikePoTipuAction {
    type: ActionType.VRATI_KORISNIKE_PO_TIPU_LOADING;
}

interface VratiKorisnikePoTipuActionSuccess {
    type: ActionType.VRATI_KORISNIKE_PO_TIPU_SUCCESS;
    payload: Korisnik[];
}

interface VratiKorisnikePoTipuActionError {
    type: ActionType.VRATI_KORISNIKE_PO_TIPU_ERROR;
    payload: string;
}

interface DodajKorisnikaAction {
    type: ActionType.DODAJ_KORISNIKA_LOADING;
}

interface DodajKorisnikaActionSuccess {
    type: ActionType.DODAJ_KORISNIKA_SUCCESS;
    payload: Korisnik;
}

interface DodajKorisnikaActionError {
    type: ActionType.DODAJ_KORISNIKA_ERROR;
    payload: string;
}

interface ObrisiKorisnikaAction {
    type: ActionType.OBRISI_KORISNIKA_LOADING;
}

interface ObrisiKorisnikaActionSuccess {
    type: ActionType.OBRISI_KORISNIKA_SUCCESS;
    payload: Korisnik;
}

interface ObrisiKorisnikaActionError {
    type: ActionType.OBRISI_KORISNIKA_ERROR;
    payload: string;
}

interface AzurirajKorisnikaAction {
    type: ActionType.AZURIRAJ_KORISNIKA_LOADING;
}

interface AzurirajKorisnikaActionSuccess {
    type: ActionType.AZURIRAJ_KORISNIKA_SUCCESS;
    payload: Korisnik;
}

interface AzurirajKorisnikaActionError {
    type: ActionType.AZURIRAJ_KORISNIKA_ERROR;
    payload: string;
}

export type KorisnikAction = VratiKorisnikaAction | VratiKorisnikaActionSuccess | VratiKorisnikaActionError
| VratiKorisnikePoTipuAction | VratiKorisnikePoTipuActionSuccess | VratiKorisnikePoTipuActionError
| DodajKorisnikaAction | DodajKorisnikaActionSuccess | DodajKorisnikaActionError
| ObrisiKorisnikaAction | ObrisiKorisnikaActionSuccess | ObrisiKorisnikaActionError
| AzurirajKorisnikaAction | AzurirajKorisnikaActionSuccess | AzurirajKorisnikaActionError;