import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import axios from 'axios'
import config from '../../app.config.json'
import { MeniAction } from '../actions/meniActions'
import Meni from '../../model/Meni'

export const vratiStavkuIzMenija = (id: number) => {
    return async (dispatch: Dispatch<MeniAction>) => {
        dispatch({
            type: ActionType.VRATI_STAVKU_IZ_MENIJA_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Meni/GetMenuItem/${id}`);

            dispatch({
                type: ActionType.VRATI_STAVKU_IZ_MENIJA_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_STAVKU_IZ_MENIJA_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiCeoMeni = () => {
    return async (dispatch: Dispatch<MeniAction>) => {
        dispatch({
            type: ActionType.VRATI_CEO_MENI_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Meni/GetMenu`);

            dispatch({
                type: ActionType.VRATI_CEO_MENI_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_CEO_MENI_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiMeniPoTipu = (tip: string) => {
    return async (dispatch: Dispatch<MeniAction>) => {
        dispatch({
            type: ActionType.VRATI_MENI_PO_TIPU_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Meni/GetMenuByType/${tip}`);

            dispatch({
                type: ActionType.VRATI_MENI_PO_TIPU_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_MENI_PO_TIPU_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiMeniPoGrupi = (grupa: string) => {
    return async (dispatch: Dispatch<MeniAction>) => {
        dispatch({
            type: ActionType.VRATI_MENI_PO_GRUPI_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Meni/GetMenuByGroup/${grupa}`);

            dispatch({
                type: ActionType.VRATI_MENI_PO_GRUPI_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_MENI_PO_GRUPI_ERROR,
                payload: error.message
            });
        }
    }
};

export const dodajStavkuUMeni = (stavkaMenija: Meni) => {
    return async (dispatch: Dispatch<MeniAction>) => {
        dispatch({
            type: ActionType.DODAJ_STAVKU_U_MENI_LOADING
        });

        try {
            const { data } = await axios.post(`${config.server}/Meni/AddNewMenuItem`, JSON.stringify(stavkaMenija), {
                headers: { ContentType: 'application/json' }
            });

            dispatch({
                type: ActionType.DODAJ_STAVKU_U_MENI_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.DODAJ_STAVKU_U_MENI_ERROR,
                payload: error.message
            });
        }
    }
};

export const azurirajCenuStavkeIzMenija = (id: number, novaCena: number) => {
    return async (dispatch: Dispatch<MeniAction>) => {
        dispatch({
            type: ActionType.AZURIRAJ_CENU_STAVKE_IZ_MENIJA_LOADING
        });

        try {
            const { data } = await axios.put(`${config.server}/Meni/UpdatePrice/${id}/${novaCena}`);

            dispatch({
                type: ActionType.AZURIRAJ_CENU_STAVKE_IZ_MENIJA_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.AZURIRAJ_CENU_STAVKE_IZ_MENIJA_ERROR,
                payload: error.message
            });
        }
    }
};

export const obrisiStavkuIzMenija = (id: number) => {
    return async (dispatch: Dispatch<MeniAction>) => {
        dispatch({
            type: ActionType.OBRISI_STAVKU_IZ_MENIJA_LOADING
        });

        try {
            const { data } = await axios.delete(`${config.server}/Meni/DeleteMenuItem/${id}`);

            dispatch({
                type: ActionType.OBRISI_STAVKU_IZ_MENIJA_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.OBRISI_STAVKU_IZ_MENIJA_ERROR,
                payload: error.message
            });
        }
    }
};