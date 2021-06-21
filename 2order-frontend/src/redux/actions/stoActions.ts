import Sto from '../../model/Sto';
import { ActionType } from '../action-types'

interface VratiStoAction {
    type: ActionType.VRATI_STO_LOADING;
}

interface VratiStoActionSuccess {
    type: ActionType.VRATI_STO_SUCCESS;
    payload: Sto;
}

interface VratiStoActionError {
    type: ActionType.VRATI_STO_ERROR;
    payload: string;
}

interface VratiSveStoloveAction {
    type: ActionType.VRATI_SVE_STOLOVE_LOADING;
}

interface VratiSveStoloveActionSuccess {
    type: ActionType.VRATI_SVE_STOLOVE_SUCCESS;
    payload: Sto[];
}

interface VratiSveStoloveActionError {
    type: ActionType.VRATI_SVE_STOLOVE_ERROR;
    payload: string;
}

interface VratiSveStoloveKorisnikaAction {
    type: ActionType.VRATI_SVE_STOLOVE_KORISNIKA_LOADING;
}

interface VratiSveStoloveKorisnikaActionSuccess {
    type: ActionType.VRATI_SVE_STOLOVE_KORISNIKA_SUCCESS;
    payload: Sto[];
}

interface VratiSveStoloveKorisnikaActionError {
    type: ActionType.VRATI_SVE_STOLOVE_KORISNIKA_ERROR;
    payload: string;
}

interface VratiSveSlobodneIliZauzeteStoloveAction {
    type: ActionType.VRATI_SVE_SLOBODNE_ILI_ZAUZETE_STOLOVE_LOADING;
}

interface VratiSveSlobodneIliZauzeteStoloveActionSuccess {
    type: ActionType.VRATI_SVE_SLOBODNE_ILI_ZAUZETE_STOLOVE_SUCCESS;
    payload: Sto[];
}

interface VratiSveSlobodneIliZauzeteStoloveActionError {
    type: ActionType.VRATI_SVE_SLOBODNE_ILI_ZAUZETE_STOLOVE_ERROR;
    payload: string;
}

interface DodajStoAction {
    type: ActionType.DODAJ_STO_LOADING;
}

interface DodajStoActionSuccess {
    type: ActionType.DODAJ_STO_SUCCESS;
    payload: Sto;
}

interface DodajStoActionError {
    type: ActionType.DODAJ_STO_ERROR;
    payload: string;
}

interface ObrisiStoAction {
    type: ActionType.OBRISI_STO_LOADING;
}

interface ObrisiStoActionSuccess {
    type: ActionType.OBRISI_STO_SUCCESS;
    payload: Sto;
}

interface ObrisiStoActionError {
    type: ActionType.OBRISI_STO_ERROR;
    payload: string;
}

interface AzurirajStoAction {
    type: ActionType.AZURIRAJ_STO_LOADING;
}

interface AzurirajStoActionSuccess {
    type: ActionType.AZURIRAJ_STO_SUCCESS;
    payload: Sto;
}

interface AzurirajStoActionError {
    type: ActionType.AZURIRAJ_STO_ERROR;
    payload: string;
}

export type StoAction = VratiStoAction | VratiStoActionSuccess | VratiStoActionError
| VratiSveStoloveAction | VratiSveStoloveActionSuccess | VratiSveStoloveActionError
| VratiSveStoloveKorisnikaAction | VratiSveStoloveKorisnikaActionSuccess | VratiSveStoloveKorisnikaActionError
| VratiSveSlobodneIliZauzeteStoloveAction | VratiSveSlobodneIliZauzeteStoloveActionSuccess | VratiSveSlobodneIliZauzeteStoloveActionError
| DodajStoAction | DodajStoActionSuccess | DodajStoActionError
| ObrisiStoAction | ObrisiStoActionSuccess | ObrisiStoActionError
| AzurirajStoAction | AzurirajStoActionSuccess | AzurirajStoActionError;