import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import axios from 'axios'
import config from '../../app.config.json'
import Racun from '../../model/Racun'
import { RacunAction } from '../actions/racunActions'

export const vratiSveRacune = () => {
    return async (dispatch: Dispatch<RacunAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_RACUNE_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Racun/vratiSveRacune`);

            dispatch({
                type: ActionType.VRATI_SVE_RACUNE_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_SVE_RACUNE_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiRacun = (id: number) => {
    return async (dispatch: Dispatch<RacunAction>) => {
        dispatch({
            type: ActionType.VRATI_RACUN_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Racun/vratiRacun/${id}`);

            dispatch({
                type: ActionType.VRATI_RACUN_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_RACUN_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiRacunePoTipu = (tip: string) => {
    return async (dispatch: Dispatch<RacunAction>) => {
        dispatch({
            type: ActionType.VRATI_RACUNE_PO_TIPU_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Racun/vratiRacunePoTipu/${tip}`);

            dispatch({
                type: ActionType.VRATI_RACUNE_PO_TIPU_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_RACUNE_PO_TIPU_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiRacunePoDatumu = (datum: Date) => {
    return async (dispatch: Dispatch<RacunAction>) => {
        dispatch({
            type: ActionType.VRATI_RACUNE_PO_DATUMU_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Racun/vratiRacunePoDatumu/${datum.toDateString()}`);

            dispatch({
                type: ActionType.VRATI_RACUNE_PO_DATUMU_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_RACUNE_PO_DATUMU_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiRacunePreDatuma = (datum: Date) => {
    return async (dispatch: Dispatch<RacunAction>) => {
        dispatch({
            type: ActionType.VRATI_RACUNE_PRE_DATUMA_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Racun/vratiRacunePreDatuma/${datum.toDateString()}`);

            dispatch({
                type: ActionType.VRATI_RACUNE_PRE_DATUMA_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_RACUNE_PRE_DATUMA_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiRacuneKorisnika = (id: number) => {
    return async (dispatch: Dispatch<RacunAction>) => {
        dispatch({
            type: ActionType.VRATI_RACUNE_KORISNIKA_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Racun/vratiRacuneKorisnika/${id}`);

            dispatch({
                type: ActionType.VRATI_RACUNE_KORISNIKA_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_RACUNE_KORISNIKA_ERROR,
                payload: error.message
            });
        }
    }
};

export const dodajRacun = (racun: Racun) => {
    return async (dispatch: Dispatch<RacunAction>) => {
        dispatch({
            type: ActionType.DODAJ_RACUN_LOADING
        });

        try {
            const { data } = await axios.post(`${config.server}/Racun/dodajRacun`, JSON.stringify(racun), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.DODAJ_RACUN_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.DODAJ_RACUN_ERROR,
                payload: error.message
            });
        }
    }
};

export const obrisiRacun = (id: number) => {
    return async (dispatch: Dispatch<RacunAction>) => {
        dispatch({
            type: ActionType.OBRISI_RACUN_LOADING
        });

        try {
            await axios.delete(`${config.server}/Racun/obrisiRacun/${id}`);

            dispatch({
                type: ActionType.OBRISI_RACUN_SUCCESS,
                payload: id
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.OBRISI_RACUN_ERROR,
                payload: error.message
            });
        }
    }
};

export const obrisiRacune = (ids: number[]) => {
    return async (dispatch: Dispatch<RacunAction>) => {
        dispatch({
            type: ActionType.OBRISI_RACUNE_LOADING
        });

        try {
            await axios.post(`${config.server}/Racun/obrisiRacune`, JSON.stringify(ids), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.OBRISI_RACUNE_SUCCESS,
                payload: ids
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.OBRISI_RACUNE_ERROR,
                payload: error.message
            });
        }
    }
};

export const azurirajRacun = (racun: Racun) => {
    return async (dispatch: Dispatch<RacunAction>) => {
        dispatch({
            type: ActionType.AZURIRAJ_RACUN_LOADING
        });

        try {
            await axios.put(`${config.server}/Racun/azurirajRacun`, JSON.stringify(racun), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.AZURIRAJ_RACUN_SUCCESS,
                payload: racun
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.AZURIRAJ_RACUN_ERROR,
                payload: error.message
            });
        }
    }
};