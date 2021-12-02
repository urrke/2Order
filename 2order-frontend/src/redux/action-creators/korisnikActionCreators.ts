import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import axios from 'axios'
import config from '../../app.config.json'
import { KorisnikAction } from '../actions/korisnikActions'
import Korisnik from '../../model/Korisnik'

export const vratiSveKorisnike = () => {
    return async (dispatch: Dispatch<KorisnikAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_KORISNIKE_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Korisnik/vratiSveKorisnike`);

            dispatch({
                type: ActionType.VRATI_SVE_KORISNIKE_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_SVE_KORISNIKE_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiKorisnika = (id: number) => {
    return async (dispatch: Dispatch<KorisnikAction>) => {
        dispatch({
            type: ActionType.VRATI_KORISNIKA_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Korisnik/vratiKorisnika/${id}`);

            dispatch({
                type: ActionType.VRATI_KORISNIKA_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_KORISNIKA_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiKorisnikaPoEmailu = (email: string) => {
    return async (dispatch: Dispatch<KorisnikAction>) => {
        dispatch({
            type: ActionType.VRATI_KORISNIKA_PO_EMAILU_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Korisnik/vratiKorisnikaPoEmailu/${email}`);

            dispatch({
                type: ActionType.VRATI_KORISNIKA_PO_EMAILU_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_KORISNIKA_PO_EMAILU_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiKorisnikePoTipu = (tip: string) => {
    return async (dispatch: Dispatch<KorisnikAction>) => {
        dispatch({
            type: ActionType.VRATI_KORISNIKE_PO_TIPU_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Korisnik/vratiKorisnikePoTipu/${tip}`);

            dispatch({
                type: ActionType.VRATI_KORISNIKE_PO_TIPU_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_KORISNIKE_PO_TIPU_ERROR,
                payload: error.message
            });
        }
    }
};

export const dodajKorisnika = (korisnik: Korisnik) => {
    return async (dispatch: Dispatch<KorisnikAction>) => {
        dispatch({
            type: ActionType.DODAJ_KORISNIKA_LOADING
        });

        try {
            const { data } = await axios.post(`${config.server}/Korisnik/dodajKorisnika`, JSON.stringify(korisnik), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.DODAJ_KORISNIKA_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.DODAJ_KORISNIKA_ERROR,
                payload: error.message
            });
        }
    }
};

export const obrisiKorisnika = (id: number) => {
    return async (dispatch: Dispatch<KorisnikAction>) => {
        dispatch({
            type: ActionType.OBRISI_KORISNIKA_LOADING
        });

        try {
            await axios.delete(`${config.server}/Korisnik/obrisiKorisnika/${id}`);

            dispatch({
                type: ActionType.OBRISI_KORISNIKA_SUCCESS,
                payload: id
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.OBRISI_KORISNIKA_ERROR,
                payload: error.message
            });
        }
    }
};

export const obrisiKorisnike = (ids: number[]) => {
    return async (dispatch: Dispatch<KorisnikAction>) => {
        dispatch({
            type: ActionType.OBRISI_KORISNIKE_LOADING
        });

        try {
            await axios.post(`${config.server}/Korisnik/obrisiKorisnike`, JSON.stringify(ids), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.OBRISI_KORISNIKE_SUCCESS,
                payload: ids
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.OBRISI_KORISNIKE_ERROR,
                payload: error.message
            });
        }
    }
};

export const azurirajKorisnika = (korisnik: Korisnik) => {
    return async (dispatch: Dispatch<KorisnikAction>) => {
        dispatch({
            type: ActionType.AZURIRAJ_KORISNIKA_LOADING
        });

        try {
            await axios.put(`${config.server}/Korisnik/azurirajKorisnika`, JSON.stringify(korisnik), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.AZURIRAJ_KORISNIKA_SUCCESS,
                payload: korisnik
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.AZURIRAJ_KORISNIKA_ERROR,
                payload: error.message
            });
        }
    }
};

export const azurirajKorisnike = (korisnici: Korisnik[]) => {
    return async (dispatch: Dispatch<KorisnikAction>) => {
        dispatch({
            type: ActionType.AZURIRAJ_KORISNIKE_LOADING
        });

        try {
            await axios.put(`${config.server}/Korisnik/azurirajKorisnike`, JSON.stringify(korisnici), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.AZURIRAJ_KORISNIKE_SUCCESS,
                payload: korisnici
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.AZURIRAJ_KORISNIKE_ERROR,
                payload: error.message
            });
        }
    }
};