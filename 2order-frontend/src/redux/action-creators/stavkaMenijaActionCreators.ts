import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import axios from 'axios'
import config from '../../app.config.json'
import { StavkaMenijaAction } from '../actions/stavkaMenijaActions'
import StavkaMenija from '../../model/StavkaMenija'

export const vratiCeoMeni = () => {
    return async (dispatch: Dispatch<StavkaMenijaAction>) => {
        dispatch({
            type: ActionType.VRATI_CEO_MENI_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/StavkaMenija/vratiCeoMeni`);

            dispatch({
                type: ActionType.VRATI_CEO_MENI_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_CEO_MENI_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiStavkuMenija = (id: number) => {
    return async (dispatch: Dispatch<StavkaMenijaAction>) => {
        dispatch({
            type: ActionType.VRATI_STAVKU_MENIJA_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/StavkaMenija/vratiStavkuMenija/${id}`);

            dispatch({
                type: ActionType.VRATI_STAVKU_MENIJA_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_STAVKU_MENIJA_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiStavkeMenijaPoTipu = (tip: string) => {
    return async (dispatch: Dispatch<StavkaMenijaAction>) => {
        dispatch({
            type: ActionType.VRATI_STAVKE_MENIJA_PO_TIPU_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/StavkaMenija/vratiStavkeMenijaPoTipu/${tip}`);

            dispatch({
                type: ActionType.VRATI_STAVKE_MENIJA_PO_TIPU_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_STAVKE_MENIJA_PO_TIPU_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiStavkeMenijaPoGrupi = (grupa: string) => {
    return async (dispatch: Dispatch<StavkaMenijaAction>) => {
        dispatch({
            type: ActionType.VRATI_STAVKE_MENIJA_PO_GRUPI_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/StavkaMenija/vratiStavkeMenijaPoGrupi/${grupa}`);

            dispatch({
                type: ActionType.VRATI_STAVKE_MENIJA_PO_GRUPI_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_STAVKE_MENIJA_PO_GRUPI_ERROR,
                payload: error.message
            });
        }
    }
};

export const dodajStavkuMenija = (stavkaMenija: StavkaMenija) => {
    return async (dispatch: Dispatch<StavkaMenijaAction>) => {
        dispatch({
            type: ActionType.DODAJ_STAVKU_MENIJA_LOADING
        });

        try {
            const { data } = await axios.post(`${config.server}/StavkaMenija/dodajStavku`, JSON.stringify(stavkaMenija), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.DODAJ_STAVKU_MENIJA_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.DODAJ_STAVKU_MENIJA_ERROR,
                payload: error.message
            });
        }
    }
};

export const obrisiStavkuMenija = (id: number) => {
    return async (dispatch: Dispatch<StavkaMenijaAction>) => {
        dispatch({
            type: ActionType.OBRISI_STAVKU_MENIJA_LOADING
        });

        try {
            await axios.delete(`${config.server}/StavkaMenija/obrisiStavkuMenija/${id}`);

            dispatch({
                type: ActionType.OBRISI_STAVKU_MENIJA_SUCCESS,
                payload: id
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.OBRISI_STAVKU_MENIJA_ERROR,
                payload: error.message
            });
        }
    }
};

export const obrisiStavkeMenija = (ids: number[]) => {
    return async (dispatch: Dispatch<StavkaMenijaAction>) => {
        dispatch({
            type: ActionType.OBRISI_STAVKE_MENIJA_LOADING
        });

        try {
            await axios.post(`${config.server}/StavkaMenija/obrisiStavke`, JSON.stringify(ids), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.OBRISI_STAVKE_MENIJA_SUCCESS,
                payload: ids
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.OBRISI_STAVKE_MENIJA_ERROR,
                payload: error.message
            });
        }
    }
};

export const azurirajStavkuMenija = (stavkaMenija: StavkaMenija) => {
    return async (dispatch: Dispatch<StavkaMenijaAction>) => {
        dispatch({
            type: ActionType.AZURIRAJ_STAVKU_MENIJA_LOADING
        });

        try {
            await axios.put(`${config.server}/StavkaMenija/azurirajStavku`, JSON.stringify(stavkaMenija), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.AZURIRAJ_STAVKU_MENIJA_SUCCESS,
                payload: stavkaMenija
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.AZURIRAJ_STAVKU_MENIJA_ERROR,
                payload: error.message
            });
        }
    }
};

export const azurirajStavkeMenija = (stavkeMenija: StavkaMenija[]) => {
    return async (dispatch: Dispatch<StavkaMenijaAction>) => {
        dispatch({
            type: ActionType.AZURIRAJ_STAVKE_MENIJA_LOADING
        });

        try {
            await axios.put(`${config.server}/StavkaMenija/azurirajStavke`, JSON.stringify(stavkeMenija), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.AZURIRAJ_STAVKE_MENIJA_SUCCESS,
                payload: stavkeMenija
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.AZURIRAJ_STAVKE_MENIJA_ERROR,
                payload: error.message
            });
        }
    }
};