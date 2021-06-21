import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import axios from 'axios'
import config from '../../app.config.json'
import { StoAction } from '../actions/stoActions'
import Sto from '../../model/Sto'

export const vratiSto = (id: number) => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.VRATI_STO_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Sto/GetSto/${id}`);

            dispatch({
                type: ActionType.VRATI_STO_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_STO_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiSveStolove = () => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_STOLOVE_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Sto/GetAllSto`);

            dispatch({
                type: ActionType.VRATI_SVE_STOLOVE_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_SVE_STOLOVE_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiSveStoloveKorisnika = (idKorisnika: number) => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_STOLOVE_KORISNIKA_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Sto/GetAllStoFromKorisnik/${idKorisnika}`);

            dispatch({
                type: ActionType.VRATI_SVE_STOLOVE_KORISNIKA_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_SVE_STOLOVE_KORISNIKA_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiSveSlobodneIliZauzeteStolove = (slobodan: boolean) => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_SLOBODNE_ILI_ZAUZETE_STOLOVE_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Sto/GetAllFreeOrTakenSto/${slobodan}`);

            dispatch({
                type: ActionType.VRATI_SVE_SLOBODNE_ILI_ZAUZETE_STOLOVE_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_SVE_SLOBODNE_ILI_ZAUZETE_STOLOVE_ERROR,
                payload: error.message
            });
        }
    }
};

export const dodajSto = (sto: Sto) => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.DODAJ_STO_LOADING
        });

        try {
            const { data } = await axios.post(`${config.server}/Sto/AddSto`, JSON.stringify(sto), {
                headers: { ContentType: 'application/json' }
            });

            dispatch({
                type: ActionType.DODAJ_STO_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.DODAJ_STO_ERROR,
                payload: error.message
            });
        }
    }
};

export const azurirajSto = (sto: Sto) => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.AZURIRAJ_STO_LOADING
        });

        try {
            const { data } = await axios.put(`${config.server}/Sto/UpdateSto`, JSON.stringify(sto), {
                headers: { ContentType: 'application/json' }
            });

            dispatch({
                type: ActionType.AZURIRAJ_STO_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.AZURIRAJ_STO_ERROR,
                payload: error.message
            });
        }
    }
};

export const obrisiSto = (id: number) => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.OBRISI_STO_LOADING
        });

        try {
            const { data } = await axios.delete(`${config.server}/Sto/DeleteSto/${id}`);

            dispatch({
                type: ActionType.OBRISI_STO_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.OBRISI_STO_ERROR,
                payload: error.message
            });
        }
    }
};