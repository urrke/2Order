import Porudzbina from '../../model/Porudzbina';
import StavkaMenija from '../../model/StavkaMenija';
import { ActionType } from '../action-types'

interface VratiSvePorudzbineLoading {
    type: ActionType.VRATI_SVE_PORUDZBINE_LOADING;
}

interface VratiSvePorudzbineSuccess {
    type: ActionType.VRATI_SVE_PORUDZBINE_SUCCESS;
    payload: Porudzbina[];
}

interface VratiSvePorudzbineError {
    type: ActionType.VRATI_SVE_PORUDZBINE_ERROR;
    payload: string;
}

interface VratiPorudzbinuLoading {
    type: ActionType.VRATI_PORUDZBINU_LOADING;
}

interface VratiPorudzbinuSuccess {
    type: ActionType.VRATI_PORUDZBINU_SUCCESS;
    payload: Porudzbina;
}

interface VratiPorudzbinuError {
    type: ActionType.VRATI_PORUDZBINU_ERROR;
    payload: string;
}

interface VratiPorudzbineKorisnikaLoading {
    type: ActionType.VRATI_PORUDZBINE_KORISNIKA_LOADING;
}

interface VratiPorudzbineKorisnikaSuccess {
    type: ActionType.VRATI_PORUDZBINE_KORISNIKA_SUCCESS;
    payload: Porudzbina[];
}

interface VratiPorudzbineKorisnikaError {
    type: ActionType.VRATI_PORUDZBINE_KORISNIKA_ERROR;
    payload: string;
}

interface VratiPorudzbineSaIstomSifromLoading {
    type: ActionType.VRATI_PORUDZBINE_SA_ISTOM_SIFROM_LOADING;
}

interface VratiPorudzbineSaIstomSifromSuccess {
    type: ActionType.VRATI_PORUDZBINE_SA_ISTOM_SIFROM_SUCCESS;
    payload: Porudzbina[];
}

interface VratiPorudzbineSaIstomSifromError {
    type: ActionType.VRATI_PORUDZBINE_SA_ISTOM_SIFROM_ERROR;
    payload: string;
}

interface DodajPorudzbinuLoading {
    type: ActionType.DODAJ_PORUDZBINU_LOADING;
}

interface DodajPorudzbinuSuccess {
    type: ActionType.DODAJ_PORUDZBINU_SUCCESS;
    payload: Porudzbina;
}

interface DodajPorudzbinuError {
    type: ActionType.DODAJ_PORUDZBINU_ERROR;
    payload: string;
}

interface ObrisiPorudzbinuLoading {
    type: ActionType.OBRISI_PORUDZBINU_LOADING;
}

interface ObrisiPorudzbinuSuccess {
    type: ActionType.OBRISI_PORUDZBINU_SUCCESS;
    payload: number;
}

interface ObrisiPorudzbinuError {
    type: ActionType.OBRISI_PORUDZBINU_ERROR;
    payload: string;
}

interface ObrisiPorudzbineLoading {
    type: ActionType.OBRISI_PORUDZBINE_LOADING;
}

interface ObrisiPorudzbineSuccess {
    type: ActionType.OBRISI_PORUDZBINE_SUCCESS;
    payload: number[];
}

interface ObrisiPorudzbineError {
    type: ActionType.OBRISI_PORUDZBINE_ERROR;
    payload: string;
}

interface AzurirajPorudzbinuLoading {
    type: ActionType.AZURIRAJ_PORUDZBINU_LOADING;
}

interface AzurirajPorudzbinuSuccess {
    type: ActionType.AZURIRAJ_PORUDZBINU_SUCCESS;
    payload: Porudzbina;
}

interface AzurirajPorudzbinuError {
    type: ActionType.AZURIRAJ_PORUDZBINU_ERROR;
    payload: string;
}

export type PorudzbinaAction = VratiSvePorudzbineLoading | VratiSvePorudzbineSuccess | VratiSvePorudzbineError
| VratiPorudzbinuLoading | VratiPorudzbinuSuccess | VratiPorudzbinuError
| VratiPorudzbineKorisnikaLoading | VratiPorudzbineKorisnikaSuccess | VratiPorudzbineKorisnikaError
| VratiPorudzbineSaIstomSifromLoading | VratiPorudzbineSaIstomSifromSuccess | VratiPorudzbineSaIstomSifromError
| DodajPorudzbinuLoading | DodajPorudzbinuSuccess | DodajPorudzbinuError
| ObrisiPorudzbinuLoading | ObrisiPorudzbinuSuccess | ObrisiPorudzbinuError
| ObrisiPorudzbineLoading | ObrisiPorudzbineSuccess | ObrisiPorudzbineError
| AzurirajPorudzbinuLoading | AzurirajPorudzbinuSuccess | AzurirajPorudzbinuError;