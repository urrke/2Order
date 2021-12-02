import Racun from '../../model/Racun';
import { ActionType } from '../action-types'

interface VratiSveRacuneLoading {
    type: ActionType.VRATI_SVE_RACUNE_LOADING;
}

interface VratiSveRacuneSuccess {
    type: ActionType.VRATI_SVE_RACUNE_SUCCESS;
    payload: Racun[];
}

interface VratiSveRacuneError {
    type: ActionType.VRATI_SVE_RACUNE_ERROR;
    payload: string;
}

interface VratiRacunLoading {
    type: ActionType.VRATI_RACUN_LOADING;
}

interface VratiRacunSuccess {
    type: ActionType.VRATI_RACUN_SUCCESS;
    payload: Racun;
}

interface VratiRacunError {
    type: ActionType.VRATI_RACUN_ERROR;
    payload: string;
}

interface VratiRacunePoTipuLoading {
    type: ActionType.VRATI_RACUNE_PO_TIPU_LOADING;
}

interface VratiRacunePoTipuSuccess {
    type: ActionType.VRATI_RACUNE_PO_TIPU_SUCCESS;
    payload: Racun[];
}

interface VratiRacunePoTipuError {
    type: ActionType.VRATI_RACUNE_PO_TIPU_ERROR;
    payload: string;
}

interface VratiRacunePoDatumuLoading {
    type: ActionType.VRATI_RACUNE_PO_DATUMU_LOADING;
}

interface VratiRacunePoDatumuSuccess {
    type: ActionType.VRATI_RACUNE_PO_DATUMU_SUCCESS;
    payload: Racun[];
}

interface VratiRacunePoDatumuError {
    type: ActionType.VRATI_RACUNE_PO_DATUMU_ERROR;
    payload: string;
}

interface VratiRacunePreDatumaLoading {
    type: ActionType.VRATI_RACUNE_PRE_DATUMA_LOADING;
}

interface VratiRacunePreDatumaSuccess {
    type: ActionType.VRATI_RACUNE_PRE_DATUMA_SUCCESS;
    payload: Racun[];
}

interface VratiRacunePreDatumaError {
    type: ActionType.VRATI_RACUNE_PRE_DATUMA_ERROR;
    payload: string;
}

interface VratiRacuneKorisnikaLoading {
    type: ActionType.VRATI_RACUNE_KORISNIKA_LOADING;
}

interface VratiRacuneKorisnikaSuccess {
    type: ActionType.VRATI_RACUNE_KORISNIKA_SUCCESS;
    payload: Racun[];
}

interface VratiRacuneKorisnikaError {
    type: ActionType.VRATI_RACUNE_KORISNIKA_ERROR;
    payload: string;
}

interface DodajRacunLoading {
    type: ActionType.DODAJ_RACUN_LOADING;
}

interface DodajRacunSuccess {
    type: ActionType.DODAJ_RACUN_SUCCESS;
    payload: Racun;
}

interface DodajRacunError {
    type: ActionType.DODAJ_RACUN_ERROR;
    payload: string;
}

interface ObrisiRacunLoading {
    type: ActionType.OBRISI_RACUN_LOADING;
}

interface ObrisiRacunSuccess {
    type: ActionType.OBRISI_RACUN_SUCCESS;
    payload: number;
}

interface ObrisiRacunError {
    type: ActionType.OBRISI_RACUN_ERROR;
    payload: string;
}

interface ObrisiRacuneLoading {
    type: ActionType.OBRISI_RACUNE_LOADING;
}

interface ObrisiRacuneSuccess {
    type: ActionType.OBRISI_RACUNE_SUCCESS;
    payload: number[];
}

interface ObrisiRacuneError {
    type: ActionType.OBRISI_RACUNE_ERROR;
    payload: string;
}

interface AzurirajRacunLoading {
    type: ActionType.AZURIRAJ_RACUN_LOADING;
}

interface AzurirajRacunSuccess {
    type: ActionType.AZURIRAJ_RACUN_SUCCESS;
    payload: Racun;
}

interface AzurirajRacunError {
    type: ActionType.AZURIRAJ_RACUN_ERROR;
    payload: string;
}

export type RacunAction = VratiSveRacuneLoading | VratiSveRacuneSuccess | VratiSveRacuneError
| VratiRacunLoading | VratiRacunSuccess | VratiRacunError
| VratiRacunePoTipuLoading | VratiRacunePoTipuSuccess | VratiRacunePoTipuError
| VratiRacunePoDatumuLoading | VratiRacunePoDatumuSuccess | VratiRacunePoDatumuError
| VratiRacunePreDatumaLoading | VratiRacunePreDatumaSuccess | VratiRacunePreDatumaError
| VratiRacuneKorisnikaLoading | VratiRacuneKorisnikaSuccess | VratiRacuneKorisnikaError
| DodajRacunLoading | DodajRacunSuccess | DodajRacunError
| ObrisiRacunLoading | ObrisiRacunSuccess | ObrisiRacunError
| ObrisiRacuneLoading | ObrisiRacuneSuccess | ObrisiRacuneError
| AzurirajRacunLoading | AzurirajRacunSuccess | AzurirajRacunError;