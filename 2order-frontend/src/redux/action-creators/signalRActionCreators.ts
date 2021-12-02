import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import * as signalR from '@microsoft/signalr';
import { SignalRActions } from '../actions/signalRActions';

export const konekcija = () => {
    return async (dispatch: Dispatch<SignalRActions>) => {
        dispatch({
            type: ActionType.DODAJ_KONEKCIJU_LOADING
        });

        try {
            var conn = new signalR.HubConnectionBuilder().withUrl("https://localhost:44382/NotificationHub").build();
            if(conn) {
                conn.start();
            }

            dispatch({
                type: ActionType.DODAJ_KONEKCIJU_SUCCESS,
                payload: conn
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.DODAJ_KONEKCIJU_ERROR,
                payload: error.message
            });
        }
    }
}

export const vratiKonekciju = () => {
    return async (dispatch: Dispatch<SignalRActions>) => {
        dispatch({
            type: ActionType.VRATI_KONEKCIJU
        });
    }
}