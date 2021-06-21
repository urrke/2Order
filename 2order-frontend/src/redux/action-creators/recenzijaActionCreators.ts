import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import axios from 'axios'
import config from '../../app.config.json'
import { RecenzijaAction } from '../actions/recenzijaActions'
import Recenzija from '../../model/Recenzija'

export const vratiRecenziju = (id: number) => {
    return async (dispatch: Dispatch<RecenzijaAction>) => {
        dispatch({
            type: ActionType.VRATI_RECENZIJU_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Recenzija/GetRecenzija/${id}`);

            dispatch({
                type: ActionType.VRATI_RECENZIJU_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_RECENZIJU_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiSveRecenzije = () => {
    return async (dispatch: Dispatch<RecenzijaAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_RECENZIJE_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Recenzija/GetAllRecenzija`);

            dispatch({
                type: ActionType.VRATI_SVE_RECENZIJE_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_SVE_RECENZIJE_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiSveRecenzijeKorisnika = (idKorisnika: number) => {
    return async (dispatch: Dispatch<RecenzijaAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_RECENZIJE_KORISNIKA_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Recenzija/GetAllRecenzijaFromKorisnik/${idKorisnika}`);

            dispatch({
                type: ActionType.VRATI_SVE_RECENZIJE_KORISNIKA_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_SVE_RECENZIJE_KORISNIKA_ERROR,
                payload: error.message
            });
        }
    }
};

export const dodajRecenziju = (recenzija: Recenzija) => {
    return async (dispatch: Dispatch<RecenzijaAction>) => {
        dispatch({
            type: ActionType.DODAJ_RECENZIJU_LOADING
        });

        try {
            const { data } = await axios.post(`${config.server}/Recenzija/AddRecenzija`, JSON.stringify(recenzija), {
                headers: { ContentType: 'application/json' }
            });

            dispatch({
                type: ActionType.DODAJ_RECENZIJU_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.DODAJ_RECENZIJU_ERROR,
                payload: error.message
            });
        }
    }
};

export const obrisiRecenziju = (id: number) => {
    return async (dispatch: Dispatch<RecenzijaAction>) => {
        dispatch({
            type: ActionType.OBRISI_RECENZIJU_LOADING
        });

        try {
            const { data } = await axios.delete(`${config.server}/Recenzija/DeleteRecenzija/${id}`);

            dispatch({
                type: ActionType.OBRISI_RECENZIJU_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.OBRISI_RECENZIJU_ERROR,
                payload: error.message
            });
        }
    }
};