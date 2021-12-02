import { ActionType } from '../action-types'

interface DodajKonekcijuLoading {
    type: ActionType.DODAJ_KONEKCIJU_LOADING;
}

interface DodajKonekcijuSuccess {
    type: ActionType.DODAJ_KONEKCIJU_SUCCESS;
    payload: signalR.HubConnection | undefined;
}

interface DodajKonekcijuError {
    type: ActionType.DODAJ_KONEKCIJU_ERROR;
    payload: string;
}

interface VratiKonekciju {
    type: ActionType.VRATI_KONEKCIJU;
}

export type SignalRActions = DodajKonekcijuLoading | DodajKonekcijuSuccess | DodajKonekcijuError | VratiKonekciju;