import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import { AuthenticationAction } from '../actions/authActions'
import config from '../../app.config.json'
import axios from 'axios';
import Login from '../../model/Login';

export const prijava = (email: string, sifra: string) => {
    return async (dispatch: Dispatch<AuthenticationAction>) => {
        dispatch({
            type: ActionType.PRIJAVA_LOADING
        });

        var logData = new Login(email, sifra);

        try {
            const { data } = await axios.post(`${config.server}/Auth/authenticate`, JSON.stringify(logData), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.PRIJAVA_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.PRIJAVA_ERROR,
                payload: error.message
            });
        }
    }
}

export const odjava = () => {
    return async (dispatch: Dispatch<AuthenticationAction>) => {
        dispatch({
            type: ActionType.ODJAVA
        });
    }
}

export const vratiToken = () => {
    return async (dispatch: Dispatch<AuthenticationAction>) => {
        dispatch({
            type: ActionType.VRATI_TOKEN
        });
    }
}