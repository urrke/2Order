import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import axios from 'axios'
import config from '../../app.config.json'
import { PorudzbinaAction } from '../actions/porudzbinaActions'
import Porudzbina from '../../model/Porudzbina'

export const vratiSvePorudzbine = () => {
    return async (dispatch: Dispatch<PorudzbinaAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_PORUDZBINE_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Porudzbina/vratiSvePorudzbine`);

            dispatch({
                type: ActionType.VRATI_SVE_PORUDZBINE_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_SVE_PORUDZBINE_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiPorudzbinu = (id: number) => {
    return async (dispatch: Dispatch<PorudzbinaAction>) => {
        dispatch({
            type: ActionType.VRATI_PORUDZBINU_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Porudzbina/vratiPorudzbinu/${id}`);

            dispatch({
                type: ActionType.VRATI_PORUDZBINU_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_PORUDZBINU_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiPorudzbineKorisnika = (id: number) => {
    return async (dispatch: Dispatch<PorudzbinaAction>) => {
        dispatch({
            type: ActionType.VRATI_PORUDZBINE_KORISNIKA_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Porudzbina/vratiPorudzbineKorisnika/${id}`);

            dispatch({
                type: ActionType.VRATI_PORUDZBINE_KORISNIKA_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_PORUDZBINE_KORISNIKA_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiPorudzbineSaIstomSifrom = (password: string) => {
    return async (dispatch: Dispatch<PorudzbinaAction>) => {
        dispatch({
            type: ActionType.VRATI_PORUDZBINE_SA_ISTOM_SIFROM_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Porudzbina/vratiPorudzbineSaIstomSifrom/${password}`);

            dispatch({
                type: ActionType.VRATI_PORUDZBINE_SA_ISTOM_SIFROM_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_PORUDZBINE_SA_ISTOM_SIFROM_ERROR,
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
            const { data } = await axios.post(`${config.server}/Porudzbina/dodajPorudzbinu`, JSON.stringify(porudzbina), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.DODAJ_PORUDZBINU_SUCCESS,
                payload: data
            });

        } catch (error: any) {
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
            await axios.delete(`${config.server}/Porudzbina/obrisiPorudzbinu/${id}`);

            dispatch({
                type: ActionType.OBRISI_PORUDZBINU_SUCCESS,
                payload: id
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.OBRISI_PORUDZBINU_ERROR,
                payload: error.message
            });
        }
    }
};

export const obrisiPorudzbine = (ids: number[]) => {
    return async (dispatch: Dispatch<PorudzbinaAction>) => {
        dispatch({
            type: ActionType.OBRISI_PORUDZBINE_LOADING
        });

        try {
            await axios.post(`${config.server}/Porudzbina/obrisiPorudzbine`, JSON.stringify(ids), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.OBRISI_PORUDZBINE_SUCCESS,
                payload: ids
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.OBRISI_PORUDZBINE_ERROR,
                payload: error.message
            });
        }
    }
};

export const azurirajPorudzbinu = (porudzbina: Porudzbina) => {
    return async (dispatch: Dispatch<PorudzbinaAction>) => {
        dispatch({
            type: ActionType.AZURIRAJ_PORUDZBINU_LOADING
        });

        try {
            await axios.post(`${config.server}/Porudzbina/azurirajPorudzbinu`, JSON.stringify(porudzbina), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.AZURIRAJ_PORUDZBINU_SUCCESS,
                payload: porudzbina
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.AZURIRAJ_PORUDZBINU_ERROR,
                payload: error.message
            });
        }
    }
};