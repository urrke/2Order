import Korisnik from '../../model/Korisnik';
import { ActionType } from '../action-types'

interface VratiSveKorisnikeLoading {
    type: ActionType.VRATI_SVE_KORISNIKE_LOADING;
}

interface VratiSveKorisnikeSuccess {
    type: ActionType.VRATI_SVE_KORISNIKE_SUCCESS;
    payload: Korisnik[];
}

interface VratiSveKorisnikeError {
    type: ActionType.VRATI_SVE_KORISNIKE_ERROR;
    payload: string;
}

interface VratiKorisnikaLoading {
    type: ActionType.VRATI_KORISNIKA_LOADING;
}

interface VratiKorisnikaSuccess {
    type: ActionType.VRATI_KORISNIKA_SUCCESS;
    payload: Korisnik;
}

interface VratiKorisnikaError {
    type: ActionType.VRATI_KORISNIKA_ERROR;
    payload: string;
}

interface VratiKorisnikaPoEmailuLoading {
    type: ActionType.VRATI_KORISNIKA_PO_EMAILU_LOADING;
}

interface VratiKorisnikaPoEmailuSuccess {
    type: ActionType.VRATI_KORISNIKA_PO_EMAILU_SUCCESS;
    payload: Korisnik;
}

interface VratiKorisnikaPoEmailuError {
    type: ActionType.VRATI_KORISNIKA_PO_EMAILU_ERROR;
    payload: string;
}

interface VratiKorisnikePoTipuLoading {
    type: ActionType.VRATI_KORISNIKE_PO_TIPU_LOADING;
}

interface VratiKorisnikePoTipuSuccess {
    type: ActionType.VRATI_KORISNIKE_PO_TIPU_SUCCESS;
    payload: Korisnik[];
}

interface VratiKorisnikePoTipuError {
    type: ActionType.VRATI_KORISNIKE_PO_TIPU_ERROR;
    payload: string;
}

interface DodajKorisnikaLoading {
    type: ActionType.DODAJ_KORISNIKA_LOADING;
}

interface DodajKorisnikaSuccess {
    type: ActionType.DODAJ_KORISNIKA_SUCCESS;
    payload: Korisnik;
}

interface DodajKorisnikaError {
    type: ActionType.DODAJ_KORISNIKA_ERROR;
    payload: string;
}

interface ObrisiKorisnikaLoading {
    type: ActionType.OBRISI_KORISNIKA_LOADING;
}

interface ObrisiKorisnikaSuccess {
    type: ActionType.OBRISI_KORISNIKA_SUCCESS;
    payload: number;
}

interface ObrisiKorisnikaError {
    type: ActionType.OBRISI_KORISNIKA_ERROR;
    payload: string;
}

interface ObrisiKorisnikeLoading {
    type: ActionType.OBRISI_KORISNIKE_LOADING;
}

interface ObrisiKorisnikeSuccess {
    type: ActionType.OBRISI_KORISNIKE_SUCCESS;
    payload: number[];
}

interface ObrisiKorisnikeError {
    type: ActionType.OBRISI_KORISNIKE_ERROR;
    payload: string;
}

interface AzurirajKorisnikaLoading {
    type: ActionType.AZURIRAJ_KORISNIKA_LOADING;
}

interface AzurirajKorisnikaSuccess {
    type: ActionType.AZURIRAJ_KORISNIKA_SUCCESS;
    payload: Korisnik;
}

interface AzurirajKorisnikaError {
    type: ActionType.AZURIRAJ_KORISNIKA_ERROR;
    payload: string;
}

interface AzurirajKorisnikeLoading {
    type: ActionType.AZURIRAJ_KORISNIKE_LOADING;
}

interface AzurirajKorisnikeSuccess {
    type: ActionType.AZURIRAJ_KORISNIKE_SUCCESS;
    payload: Korisnik[];
}

interface AzurirajKorisnikeError {
    type: ActionType.AZURIRAJ_KORISNIKE_ERROR;
    payload: string;
}

export type KorisnikAction = VratiSveKorisnikeLoading | VratiSveKorisnikeSuccess | VratiSveKorisnikeError
| VratiKorisnikaLoading | VratiKorisnikaSuccess | VratiKorisnikaError 
| VratiKorisnikaPoEmailuLoading | VratiKorisnikaPoEmailuSuccess | VratiKorisnikaPoEmailuError
| VratiKorisnikePoTipuLoading | VratiKorisnikePoTipuSuccess | VratiKorisnikePoTipuError
| DodajKorisnikaLoading | DodajKorisnikaSuccess | DodajKorisnikaError
| ObrisiKorisnikaLoading | ObrisiKorisnikaSuccess | ObrisiKorisnikaError
| ObrisiKorisnikeLoading | ObrisiKorisnikeSuccess | ObrisiKorisnikeError
| AzurirajKorisnikaLoading | AzurirajKorisnikaSuccess | AzurirajKorisnikaError
| AzurirajKorisnikeLoading | AzurirajKorisnikeSuccess | AzurirajKorisnikeError;