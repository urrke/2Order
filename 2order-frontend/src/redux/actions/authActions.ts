import Korisnik from '../../model/Korisnik';
import { ActionType } from '../action-types'

interface LoginData {
    token: string;
    korisnik: Korisnik;
}

interface PrijavaLoading {
    type: ActionType.PRIJAVA_LOADING;
}

interface PrijavaSuccess {
    type: ActionType.PRIJAVA_SUCCESS;
    payload: LoginData;
}

interface PrijavaError {
    type: ActionType.PRIJAVA_ERROR;
    payload: string;
}

interface Odjava {
    type: ActionType.ODJAVA;
}

interface VratiToken {
    type: ActionType.VRATI_TOKEN;
}

export type AuthenticationAction = PrijavaLoading | PrijavaSuccess | PrijavaError | Odjava | VratiToken;