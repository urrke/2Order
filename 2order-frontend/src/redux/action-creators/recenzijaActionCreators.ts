import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import axios from 'axios'
import config from '../../app.config.json'
import { RecenzijaAction } from '../actions/recenzijaActions'
import Recenzija from '../../model/Recenzija'

export const vratiSveRecenzije = () => {
    return async (dispatch: Dispatch<RecenzijaAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_RECENZIJE_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Recenzija/vratiSveRecenzije`);

            dispatch({
                type: ActionType.VRATI_SVE_RECENZIJE_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_SVE_RECENZIJE_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiRecenziju = (id: number) => {
    return async (dispatch: Dispatch<RecenzijaAction>) => {
        dispatch({
            type: ActionType.VRATI_RECENZIJU_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Recenzija/vratiRecenziju/${id}`);

            dispatch({
                type: ActionType.VRATI_RECENZIJU_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_RECENZIJU_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiRecenzijuRacuna = (id: number) => {
    return async (dispatch: Dispatch<RecenzijaAction>) => {
        dispatch({
            type: ActionType.VRATI_RECENZIJU_RACUNA_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Recenzija/vratiRecenzijuRacuna/${id}`);

            dispatch({
                type: ActionType.VRATI_RECENZIJU_RACUNA_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_RECENZIJU_RACUNA_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiRecenzijePoDatumu = (datum: Date) => {
    return async (dispatch: Dispatch<RecenzijaAction>) => {
        dispatch({
            type: ActionType.VRATI_RECENZIJE_PO_DATUMU_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Recenzija/vratiRecenzijePoDatumu/${datum.toDateString()}`);

            dispatch({
                type: ActionType.VRATI_RECENZIJE_PO_DATUMU_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_RECENZIJE_PO_DATUMU_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiRecenzijeKorisnika = (id: number) => {
    return async (dispatch: Dispatch<RecenzijaAction>) => {
        dispatch({
            type: ActionType.VRATI_RECENZIJE_KORISNIKA_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Recenzija/vratiRecenzijeKorisnika/${id}`);

            dispatch({
                type: ActionType.VRATI_RECENZIJE_KORISNIKA_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_RECENZIJE_KORISNIKA_ERROR,
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
            const { data } = await axios.post(`${config.server}/Recenzija/dodajRecenziju`, JSON.stringify(recenzija), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.DODAJ_RECENZIJU_SUCCESS,
                payload: data
            });

        } catch (error: any) {
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
            await axios.delete(`${config.server}/Recenzija/obrisiRecenziju/${id}`);

            dispatch({
                type: ActionType.OBRISI_RECENZIJU_SUCCESS,
                payload: id
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.OBRISI_RECENZIJU_ERROR,
                payload: error.message
            });
        }
    }
};

export const obrisiRecenzije = (ids: number[]) => {
    return async (dispatch: Dispatch<RecenzijaAction>) => {
        dispatch({
            type: ActionType.OBRISI_RECENZIJE_LOADING
        });

        try {
            await axios.post(`${config.server}/Recenzija/obrisiRecenzije`, JSON.stringify(ids), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.OBRISI_RECENZIJE_SUCCESS,
                payload: ids
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.OBRISI_RECENZIJE_ERROR,
                payload: error.message
            });
        }
    }
};

export const azurirajRecenziju = (recenzija: Recenzija) => {
    return async (dispatch: Dispatch<RecenzijaAction>) => {
        dispatch({
            type: ActionType.AZURIRAJ_RECENZIJU_LOADING
        });

        try {
            await axios.put(`${config.server}/Recenzija/azurirajRecenziju`, JSON.stringify(recenzija), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.AZURIRAJ_RECENZIJU_SUCCESS,
                payload: recenzija
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.AZURIRAJ_RECENZIJU_ERROR,
                payload: error.message
            });
        }
    }
};