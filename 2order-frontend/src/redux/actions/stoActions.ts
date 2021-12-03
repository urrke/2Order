import Racun from '../../model/Racun';
import Sto from '../../model/Sto';
import { ActionType } from '../action-types'

interface Position {
    id: number;
    x: number;
    y: number;
}

interface VratiSveStoloveLoading {
    type: ActionType.VRATI_SVE_STOLOVE_LOADING;
}

interface VratiSveStoloveSuccess {
    type: ActionType.VRATI_SVE_STOLOVE_SUCCESS;
    payload: Sto[];
}

interface VratiSveStoloveError {
    type: ActionType.VRATI_SVE_STOLOVE_ERROR;
    payload: string;
}

interface VratiStoLoading {
    type: ActionType.VRATI_STO_LOADING;
}

interface VratiStoSuccess {
    type: ActionType.VRATI_STO_SUCCESS;
    payload: Sto;
}

interface VratiStoError {
    type: ActionType.VRATI_STO_ERROR;
    payload: string;
}

interface VratiStoloveKonobaraLoading {
    type: ActionType.VRATI_STOLOVE_KONOBARA_LOADING;
}

interface VratiStoloveKonobaraSuccess {
    type: ActionType.VRATI_STOLOVE_KONOBARA_SUCCESS;
    payload: Sto[];
}

interface VratiStoloveKonobaraError {
    type: ActionType.VRATI_STOLOVE_KONOBARA_ERROR;
    payload: string;
}

interface VratiSveSlobodneIliZauzeteStoloveLoading {
    type: ActionType.VRATI_SVE_SLOBODNE_ILI_ZAUZETE_STOLOVE_LOADING;
}

interface VratiSveSlobodneIliZauzeteStoloveSuccess {
    type: ActionType.VRATI_SVE_SLOBODNE_ILI_ZAUZETE_STOLOVE_SUCCESS;
    payload: Sto[];
}

interface VratiSveSlobodneIliZauzeteStoloveError {
    type: ActionType.VRATI_SVE_SLOBODNE_ILI_ZAUZETE_STOLOVE_ERROR;
    payload: string;
}

interface DodajStoLoading {
    type: ActionType.DODAJ_STO_LOADING;
}

interface DodajStoSuccess {
    type: ActionType.DODAJ_STO_SUCCESS;
    payload: Sto;
}

interface DodajStoError {
    type: ActionType.DODAJ_STO_ERROR;
    payload: string;
}

interface ObrisiStoLoading {
    type: ActionType.OBRISI_STO_LOADING;
}

interface ObrisiStoSuccess {
    type: ActionType.OBRISI_STO_SUCCESS;
    payload: number;
}

interface ObrisiStoError {
    type: ActionType.OBRISI_STO_ERROR;
    payload: string;
}

interface ObrisiStoloveLoading {
    type: ActionType.OBRISI_STOLOVE_LOADING;
}

interface ObrisiStoloveSuccess {
    type: ActionType.OBRISI_STOLOVE_SUCCESS;
    payload: number[];
}

interface ObrisiStoloveError {
    type: ActionType.OBRISI_STOLOVE_ERROR;
    payload: string;
}

interface AzurirajStoLoading {
    type: ActionType.AZURIRAJ_STO_LOADING;
}

interface AzurirajStoSuccess {
    type: ActionType.AZURIRAJ_STO_SUCCESS;
    payload: Sto;
}

interface AzurirajStoError {
    type: ActionType.AZURIRAJ_STO_ERROR;
    payload: string;
}

interface AzurirajStoloveLoading {
    type: ActionType.AZURIRAJ_STOLOVE_LOADING;
}

interface AzurirajStoloveSuccess {
    type: ActionType.AZURIRAJ_STOLOVE_SUCCESS;
    payload: Sto[];
}

interface AzurirajStoloveError {
    type: ActionType.AZURIRAJ_STOLOVE_ERROR;
    payload: string;
}

interface ZauzmiIliOslobodiStoLoading {
    type: ActionType.ZAUZMI_ILI_OSLOBODI_STO_LOADING;
}

interface ZauzmiIliOslobodiStoSuccess {
    type: ActionType.ZAUZMI_ILI_OSLOBODI_STO_SUCCESS;
    payload: Sto;
}

interface ZauzmiIliOslobodiStoError {
    type: ActionType.ZAUZMI_ILI_OSLOBODI_STO_ERROR;
    payload: string;
}

interface AzurirajPozicijuStola {
    type: ActionType.AZURIRAJ_POZICIJU_STOLA;
    payload: Position;
}

interface PostaviTrenutnuPorudzbinu {
    type: ActionType.POSTAVI_TRENUTNU_PORUDZBINU;
    payload: {
        idStola: number,
        racun: Racun
    }
}

export type StoAction = VratiSveStoloveLoading | VratiSveStoloveSuccess | VratiSveStoloveError
| VratiStoLoading | VratiStoSuccess | VratiStoError
| VratiStoloveKonobaraLoading | VratiStoloveKonobaraSuccess | VratiStoloveKonobaraError
| VratiSveSlobodneIliZauzeteStoloveLoading | VratiSveSlobodneIliZauzeteStoloveSuccess | VratiSveSlobodneIliZauzeteStoloveError
| DodajStoLoading | DodajStoSuccess | DodajStoError
| ObrisiStoLoading | ObrisiStoSuccess | ObrisiStoError
| ObrisiStoloveLoading | ObrisiStoloveSuccess | ObrisiStoloveError
| AzurirajStoLoading | AzurirajStoSuccess | AzurirajStoError
| AzurirajStoloveLoading | AzurirajStoloveSuccess | AzurirajStoloveError
| ZauzmiIliOslobodiStoLoading | ZauzmiIliOslobodiStoSuccess | ZauzmiIliOslobodiStoError
| AzurirajPozicijuStola | PostaviTrenutnuPorudzbinu;