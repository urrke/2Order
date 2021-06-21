import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import axios from 'axios'
import config from '../../app.config.json'
import { PorudzbinaAction } from '../actions/porudzbinaActions'
import Porudzbina from '../../model/Porudzbina'

export const vratiPorudzbinu = (id: number) => {
    return async (dispatch: Dispatch<PorudzbinaAction>) => {
        dispatch({
            type: ActionType.VRATI_PORUDZBINU_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Porudzbina/GetPorudzbina/${id}`);

            dispatch({
                type: ActionType.VRATI_PORUDZBINU_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_PORUDZBINU_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiSvePorudzbine = () => {
    return async (dispatch: Dispatch<PorudzbinaAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_PORUDZBINE_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Porudzbina/GetAllPorudzbina`);

            dispatch({
                type: ActionType.VRATI_SVE_PORUDZBINE_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_SVE_PORUDZBINE_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiSvePorudzbineKorisnika = (idKorisnika: number) => {
    return async (dispatch: Dispatch<PorudzbinaAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_PORUDZBINE_KORISNIKA_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Porudzbina/GetAllPorudzbinaFromKorisnik/${idKorisnika}`);

            dispatch({
                type: ActionType.VRATI_SVE_PORUDZBINE_KORISNIKA_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_SVE_PORUDZBINE_KORISNIKA_ERROR,
                payload: error.message
            });
        }
    }
};

export const dodajPorudzbinu = (porudzbina: Porudzbina) => {
    return async (dispatch: Dispatch<PorudzbinaAction>) => {
        dispatch({
            type: ActionType.DODAJ_PORUDZBINU_LOADING
        });

        try {
            const { data } = await axios.post(`${config.server}/Porudzbina/AddPorudzbina`, JSON.stringify(porudzbina), {
                headers: { ContentType: 'application/json' }
            });

            dispatch({
                type: ActionType.DODAJ_PORUDZBINU_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.DODAJ_PORUDZBINU_ERROR,
                payload: error.message
            });
        }
    }
};

export const obrisiPorudzbinu = (id: number) => {
    return async (dispatch: Dispatch<PorudzbinaAction>) => {
        dispatch({
            type: ActionType.OBRISI_PORUDZBINU_LOADING
        });

        try {
            const { data } = await axios.delete(`${config.server}/Porudzbina/DeletePorudzbina/${id}`);

            dispatch({
                type: ActionType.OBRISI_PORUDZBINU_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.OBRISI_PORUDZBINU_ERROR,
                payload: error.message
            });
        }
    }
};