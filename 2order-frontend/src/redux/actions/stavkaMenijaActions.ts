import StavkaMenija from '../../model/StavkaMenija';
import { ActionType } from '../action-types'

interface VratiCeoMeniLoading {
    type: ActionType.VRATI_CEO_MENI_LOADING;
}

interface VratiCeoMeniSuccess {
    type: ActionType.VRATI_CEO_MENI_SUCCESS;
    payload: StavkaMenija[];
}

interface VratiCeoMeniError {
    type: ActionType.VRATI_CEO_MENI_ERROR;
    payload: string;
}

interface VratiStavkuMenijaLoading {
    type: ActionType.VRATI_STAVKU_MENIJA_LOADING;
}

interface VratiStavkuMenijaSuccess {
    type: ActionType.VRATI_STAVKU_MENIJA_SUCCESS;
    payload: StavkaMenija;
}

interface VratiStavkuMenijaError {
    type: ActionType.VRATI_STAVKU_MENIJA_ERROR;
    payload: string;
}

interface VratiStavkeMenijaPoTipuLoading {
    type: ActionType.VRATI_STAVKE_MENIJA_PO_TIPU_LOADING;
}

interface VratiStavkeMenijaPoTipuSuccess {
    type: ActionType.VRATI_STAVKE_MENIJA_PO_TIPU_SUCCESS;
    payload: StavkaMenija[];
}

interface VratiStavkeMenijaPoTipuError {
    type: ActionType.VRATI_STAVKE_MENIJA_PO_TIPU_ERROR;
    payload: string;
}

interface VratiStavkeMenijaPoGrupiLoading {
    type: ActionType.VRATI_STAVKE_MENIJA_PO_GRUPI_LOADING;
}

interface VratiStavkeMenijaPoGrupiSuccess {
    type: ActionType.VRATI_STAVKE_MENIJA_PO_GRUPI_SUCCESS;
    payload: StavkaMenija[];
}

interface VratiStavkeMenijaPoGrupiError {
    type: ActionType.VRATI_STAVKE_MENIJA_PO_GRUPI_ERROR;
    payload: string;
}


interface DodajStavkuMenijaLoading {
    type: ActionType.DODAJ_STAVKU_MENIJA_LOADING;
}

interface DodajStavkuMenijaSuccess {
    type: ActionType.DODAJ_STAVKU_MENIJA_SUCCESS;
    payload: StavkaMenija;
}

interface DodajStavkuMenijaError {
    type: ActionType.DODAJ_STAVKU_MENIJA_ERROR;
    payload: string;
}

interface ObrisiStavkuMenijaLoading {
    type: ActionType.OBRISI_STAVKU_MENIJA_LOADING;
}

interface ObrisiStavkuMenijaSuccess {
    type: ActionType.OBRISI_STAVKU_MENIJA_SUCCESS;
    payload: number;
}

interface ObrisiStavkuMenijaError {
    type: ActionType.OBRISI_STAVKU_MENIJA_ERROR;
    payload: string;
}

interface ObrisiStavkeMenijaLoading {
    type: ActionType.OBRISI_STAVKE_MENIJA_LOADING;
}

interface ObrisiStavkeMenijaSuccess {
    type: ActionType.OBRISI_STAVKE_MENIJA_SUCCESS;
    payload: number[];
}

interface ObrisiStavkeMenijaError {
    type: ActionType.OBRISI_STAVKE_MENIJA_ERROR;
    payload: string;
}

interface AzurirajStavkuMenijaLoading {
    type: ActionType.AZURIRAJ_STAVKU_MENIJA_LOADING;
}

interface AzurirajStavkuMenijaSuccess {
    type: ActionType.AZURIRAJ_STAVKU_MENIJA_SUCCESS;
    payload: StavkaMenija;
}

interface AzurirajStavkuMenijaError {
    type: ActionType.AZURIRAJ_STAVKU_MENIJA_ERROR;
    payload: string;
}

interface AzurirajStavkeMenijaLoading {
    type: ActionType.AZURIRAJ_STAVKE_MENIJA_LOADING;
}

interface AzurirajStavkeMenijaSuccess {
    type: ActionType.AZURIRAJ_STAVKE_MENIJA_SUCCESS;
    payload: StavkaMenija[];
}

interface AzurirajStavkeMenijaError {
    type: ActionType.AZURIRAJ_STAVKE_MENIJA_ERROR;
    payload: string;
}

export type StavkaMenijaAction = VratiCeoMeniLoading | VratiCeoMeniSuccess | VratiCeoMeniError
| VratiStavkuMenijaLoading | VratiStavkuMenijaSuccess | VratiStavkuMenijaError
| VratiStavkeMenijaPoTipuLoading | VratiStavkeMenijaPoTipuSuccess | VratiStavkeMenijaPoTipuError
| VratiStavkeMenijaPoGrupiLoading | VratiStavkeMenijaPoGrupiSuccess | VratiStavkeMenijaPoGrupiError
| DodajStavkuMenijaLoading | DodajStavkuMenijaSuccess | DodajStavkuMenijaError
| ObrisiStavkuMenijaLoading | ObrisiStavkuMenijaSuccess | ObrisiStavkuMenijaError
| ObrisiStavkeMenijaLoading | ObrisiStavkeMenijaSuccess | ObrisiStavkeMenijaError
| AzurirajStavkuMenijaLoading | AzurirajStavkuMenijaSuccess | AzurirajStavkuMenijaError
| AzurirajStavkeMenijaLoading | AzurirajStavkeMenijaSuccess | AzurirajStavkeMenijaError;