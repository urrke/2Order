import Recenzija from '../../model/Recenzija';
import { ActionType } from '../action-types'

interface VratiSveRecenzijeLoading {
    type: ActionType.VRATI_SVE_RECENZIJE_LOADING;
}

interface VratiSveRecenzijeSuccess {
    type: ActionType.VRATI_SVE_RECENZIJE_SUCCESS;
    payload: Recenzija[];
}

interface VratiSveRecenzijeError {
    type: ActionType.VRATI_SVE_RECENZIJE_ERROR;
    payload: string;
}

interface VratiRecenzijuLoading {
    type: ActionType.VRATI_RECENZIJU_LOADING;
}

interface VratiRecenzijuSuccess {
    type: ActionType.VRATI_RECENZIJU_SUCCESS;
    payload: Recenzija;
}

interface VratiRecenzijuError {
    type: ActionType.VRATI_RECENZIJU_ERROR;
    payload: string;
}

interface VratiRecenzijuRacunaLoading {
    type: ActionType.VRATI_RECENZIJU_RACUNA_LOADING;
}

interface VratiRecenzijuRacunaSuccess {
    type: ActionType.VRATI_RECENZIJU_RACUNA_SUCCESS;
    payload: Recenzija;
}

interface VratiRecenzijuRacunaError {
    type: ActionType.VRATI_RECENZIJU_RACUNA_ERROR;
    payload: string;
}

interface VratiRecenzijePoDatumuLoading {
    type: ActionType.VRATI_RECENZIJE_PO_DATUMU_LOADING;
}

interface VratiRecenzijePoDatumuSuccess {
    type: ActionType.VRATI_RECENZIJE_PO_DATUMU_SUCCESS;
    payload: Recenzija[];
}

interface VratiRecenzijePoDatumuError {
    type: ActionType.VRATI_RECENZIJE_PO_DATUMU_ERROR;
    payload: string;
}

interface VratiRecenzijeKorisnikaLoading {
    type: ActionType.VRATI_RECENZIJE_KORISNIKA_LOADING;
}

interface VratiRecenzijeKorisnikaSuccess {
    type: ActionType.VRATI_RECENZIJE_KORISNIKA_SUCCESS;
    payload: Recenzija[];
}

interface VratiRecenzijeKorisnikaError {
    type: ActionType.VRATI_RECENZIJE_KORISNIKA_ERROR;
    payload: string;
}

interface DodajRecenzijuLoading {
    type: ActionType.DODAJ_RECENZIJU_LOADING;
}

interface DodajRecenzijuSuccess {
    type: ActionType.DODAJ_RECENZIJU_SUCCESS;
    payload: Recenzija;
}

interface DodajRecenzijuError {
    type: ActionType.DODAJ_RECENZIJU_ERROR;
    payload: string;
}

interface ObrisiRecenzijuLoading {
    type: ActionType.OBRISI_RECENZIJU_LOADING;
}

interface ObrisiRecenzijuSuccess {
    type: ActionType.OBRISI_RECENZIJU_SUCCESS;
    payload: number;
}

interface ObrisiRecenzijuError {
    type: ActionType.OBRISI_RECENZIJU_ERROR;
    payload: string;
}

interface ObrisiRecenzijeLoading {
    type: ActionType.OBRISI_RECENZIJE_LOADING;
}

interface ObrisiRecenzijeSuccess {
    type: ActionType.OBRISI_RECENZIJE_SUCCESS;
    payload: number[];
}

interface ObrisiRecenzijeError {
    type: ActionType.OBRISI_RECENZIJE_ERROR;
    payload: string;
}

interface AzurirajRecenzijuLoading {
    type: ActionType.AZURIRAJ_RECENZIJU_LOADING;
}

interface AzurirajRecenzijuSuccess {
    type: ActionType.AZURIRAJ_RECENZIJU_SUCCESS;
    payload: Recenzija;
}

interface AzurirajRecenzijuError {
    type: ActionType.AZURIRAJ_RECENZIJU_ERROR;
    payload: string;
}

export type RecenzijaAction = VratiSveRecenzijeLoading | VratiSveRecenzijeSuccess | VratiSveRecenzijeError
| VratiRecenzijuLoading | VratiRecenzijuSuccess | VratiRecenzijuError
| VratiRecenzijuRacunaLoading | VratiRecenzijuRacunaSuccess | VratiRecenzijuRacunaError
| VratiRecenzijePoDatumuLoading | VratiRecenzijePoDatumuSuccess | VratiRecenzijePoDatumuError
| VratiRecenzijeKorisnikaLoading | VratiRecenzijeKorisnikaSuccess | VratiRecenzijeKorisnikaError
| DodajRecenzijuLoading | DodajRecenzijuSuccess | DodajRecenzijuError
| ObrisiRecenzijuLoading | ObrisiRecenzijuSuccess | ObrisiRecenzijuError
| ObrisiRecenzijeLoading | ObrisiRecenzijeSuccess | ObrisiRecenzijeError
| AzurirajRecenzijuLoading | AzurirajRecenzijuSuccess | AzurirajRecenzijuError;