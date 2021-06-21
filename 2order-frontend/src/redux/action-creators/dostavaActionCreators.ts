import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import axios from 'axios'
import config from '../../app.config.json'
import { DostavaAction } from '../actions/dostavaActions'
import Dostava from '../../model/Dostava'

export const vratiDostavu = (id: number) => {
    return async (dispatch: Dispatch<DostavaAction>) => {
        dispatch({
            type: ActionType.VRATI_DOSTAVU_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Dostava/GetDelivery/${id}`);

            dispatch({
                type: ActionType.VRATI_DOSTAVU_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_DOSTAVU_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiSveDostave = () => {
    return async (dispatch: Dispatch<DostavaAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_DOSTAVE_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Dostava/GetAllDeliveries`);

            dispatch({
                type: ActionType.VRATI_SVE_DOSTAVE_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_SVE_DOSTAVE_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiSveDanasnjeDostave = () => {
    return async (dispatch: Dispatch<DostavaAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_DANASNJE_DOSTAVE_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Dostava/GetTodayDeliveries`);

            dispatch({
                type: ActionType.VRATI_SVE_DANASNJE_DOSTAVE_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_SVE_DANASNJE_DOSTAVE_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiSveDostaveKorisnika = (idKorisnika: number) => {
    return async (dispatch: Dispatch<DostavaAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_DOSTAVE_KORISNIKA_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Dostava/GetUserDeliveries/${idKorisnika}`);

            dispatch({
                type: ActionType.VRATI_SVE_DOSTAVE_KORISNIKA_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_SVE_DOSTAVE_KORISNIKA_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiDostaveSaIstomSifrom = (sifra: string) => {
    return async (dispatch: Dispatch<DostavaAction>) => {
        dispatch({
            type: ActionType.VRATI_DOSTAVE_SA_ISTOM_SIFROM_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Dostava/GetDeliveriesWithPassword/${sifra}`);

            dispatch({
                type: ActionType.VRATI_DOSTAVE_SA_ISTOM_SIFROM_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_DOSTAVE_SA_ISTOM_SIFROM_ERROR,
                payload: error.message
            });
        }
    }
};

export const dodajDostavu = (dostava: Dostava) => {
    return async (dispatch: Dispatch<DostavaAction>) => {
        dispatch({
            type: ActionType.DODAJ_DOSTAVU_LOADING
        });

        try {
            const { data } = await axios.post(`${config.server}/Dostava/AddDelivery`, JSON.stringify(dostava), {
                headers: { ContentType: 'application/json' }
            });

            dispatch({
                type: ActionType.DODAJ_DOSTAVU_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.DODAJ_DOSTAVU_ERROR,
                payload: error.message
            });
        }
    }
};

export const azurirajAdresuDostave = (id: number, novaAdresa: string) => {
    return async (dispatch: Dispatch<DostavaAction>) => {
        dispatch({
            type: ActionType.AZURIRAJ_ADRESU_DOSTAVE_LOADING
        });

        try {
            const { data } = await axios.put(`${config.server}/Dostava/UpdateDelivery/${id}/${novaAdresa}`);

            dispatch({
                type: ActionType.AZURIRAJ_ADRESU_DOSTAVE_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.AZURIRAJ_ADRESU_DOSTAVE_ERROR,
                payload: error.message
            });
        }
    }
};

export const obrisiDostavu = (id: number) => {
    return async (dispatch: Dispatch<DostavaAction>) => {
        dispatch({
            type: ActionType.OBRISI_DOSTAVU_LOADING
        });

        try {
            const { data } = await axios.delete(`${config.server}/Dostava/DeleteDelivery/${id}`);

            dispatch({
                type: ActionType.OBRISI_DOSTAVU_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.OBRISI_DOSTAVU_ERROR,
                payload: error.message
            });
        }
    }
};