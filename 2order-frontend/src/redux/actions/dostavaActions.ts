import Dostava from '../../model/Dostava';
import { ActionType } from '../action-types'

interface VratiDostavuAction {
    type: ActionType.VRATI_DOSTAVU_LOADING;
}

interface VratiDostavuActionSuccess {
    type: ActionType.VRATI_DOSTAVU_SUCCESS;
    payload: Dostava;
}

interface VratiDostavuActionError {
    type: ActionType.VRATI_DOSTAVU_ERROR;
    payload: string;
}

interface VratiSveDostaveAction {
    type: ActionType.VRATI_SVE_DOSTAVE_LOADING;
}

interface VratiSveDostaveActionSuccess {
    type: ActionType.VRATI_SVE_DOSTAVE_SUCCESS;
    payload: Dostava[];
}

interface VratiSveDostaveActionError {
    type: ActionType.VRATI_SVE_DOSTAVE_ERROR;
    payload: string;
}

interface VratiSveDanasnjeDostaveAction {
    type: ActionType.VRATI_SVE_DANASNJE_DOSTAVE_LOADING;
}

interface VratiSveDanasnjeDostaveActionSuccess {
    type: ActionType.VRATI_SVE_DANASNJE_DOSTAVE_SUCCESS;
    payload: Dostava[];
}

interface VratiSveDanasnjeDostaveActionError {
    type: ActionType.VRATI_SVE_DANASNJE_DOSTAVE_ERROR;
    payload: string;
}

interface VratiSveDostaveKorisnikaAction {
    type: ActionType.VRATI_SVE_DOSTAVE_KORISNIKA_LOADING;
}

interface VratiSveDostaveKorisnikaActionSuccess {
    type: ActionType.VRATI_SVE_DOSTAVE_KORISNIKA_SUCCESS;
    payload: Dostava[];
}

interface VratiSveDostaveKorisnikaActionError {
    type: ActionType.VRATI_SVE_DOSTAVE_KORISNIKA_ERROR;
    payload: string;
}

interface VratiDostaveSaIstomSifromAction {
    type: ActionType.VRATI_DOSTAVE_SA_ISTOM_SIFROM_LOADING;
}

interface VratiDostaveSaIstomSifromActionSuccess {
    type: ActionType.VRATI_DOSTAVE_SA_ISTOM_SIFROM_SUCCESS;
    payload: Dostava[];
}

interface VratiDostaveSaIstomSifromActionError {
    type: ActionType.VRATI_DOSTAVE_SA_ISTOM_SIFROM_ERROR;
    payload: string;
}

interface DodajDostavuAction {
    type: ActionType.DODAJ_DOSTAVU_LOADING;
}

interface DodajDostavuActionSuccess {
    type: ActionType.DODAJ_DOSTAVU_SUCCESS;
    payload: Dostava;
}

interface DodajDostavuActionError {
    type: ActionType.DODAJ_DOSTAVU_ERROR;
    payload: string;
}

interface ObrisiDostavuAction {
    type: ActionType.OBRISI_DOSTAVU_LOADING;
}

interface ObrisiDostavuActionSuccess {
    type: ActionType.OBRISI_DOSTAVU_SUCCESS;
    payload: Dostava;
}

interface ObrisiDostavuActionError {
    type: ActionType.OBRISI_DOSTAVU_ERROR;
    payload: string;
}

interface AzurirajAdresuDostaveAction {
    type: ActionType.AZURIRAJ_ADRESU_DOSTAVE_LOADING;
}

interface AzurirajAdresuDostaveActionSuccess {
    type: ActionType.AZURIRAJ_ADRESU_DOSTAVE_SUCCESS;
    payload: Dostava;
}

interface AzurirajAdresuDostaveActionError {
    type: ActionType.AZURIRAJ_ADRESU_DOSTAVE_ERROR;
    payload: string;
}

export type DostavaAction = VratiDostavuAction | VratiDostavuActionSuccess | VratiDostavuActionError
| VratiSveDostaveAction | VratiSveDostaveActionSuccess | VratiSveDostaveActionError
| VratiSveDanasnjeDostaveAction | VratiSveDanasnjeDostaveActionSuccess | VratiSveDanasnjeDostaveActionError
| VratiSveDostaveKorisnikaAction | VratiSveDostaveKorisnikaActionSuccess | VratiSveDostaveKorisnikaActionError
| VratiDostaveSaIstomSifromAction | VratiDostaveSaIstomSifromActionSuccess | VratiDostaveSaIstomSifromActionError
| DodajDostavuAction | DodajDostavuActionSuccess | DodajDostavuActionError
| ObrisiDostavuAction | ObrisiDostavuActionSuccess | ObrisiDostavuActionError
| AzurirajAdresuDostaveAction | AzurirajAdresuDostaveActionSuccess | AzurirajAdresuDostaveActionError;