import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import axios from 'axios'
import config from '../../app.config.json'
import { KorisnikAction } from '../actions/korisnikActions'
import Korisnik from '../../model/Korisnik'

export const vratiKorisnika = (id: number) => {
    return async (dispatch: Dispatch<KorisnikAction>) => {
        dispatch({
            type: ActionType.VRATI_KORISNIKA_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Korisnik/GetUser/${id}`);

            dispatch({
                type: ActionType.VRATI_KORISNIKA_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.VRATI_KORISNIKA_ERROR,
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
            const { data } = await axios.get(`${config.server}/Korisnik/GetUsers/${tip}`);

            dispatch({
                type: ActionType.VRATI_KORISNIKE_PO_TIPU_SUCCESS,
                payload: data
            });

        } catch (error) {
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
            const { data } = await axios.post(`${config.server}/Korisnik/AddUser`, JSON.stringify(korisnik), {
                headers: { ContentType: 'application/json' }
            });

            dispatch({
                type: ActionType.DODAJ_KORISNIKA_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.DODAJ_KORISNIKA_ERROR,
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
            const { data } = await axios.put(`${config.server}/Korisnik/UpdateUser`, JSON.stringify(korisnik), {
                headers: { ContentType: 'application/json' }
            });

            dispatch({
                type: ActionType.AZURIRAJ_KORISNIKA_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.AZURIRAJ_KORISNIKA_ERROR,
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
            const { data } = await axios.delete(`${config.server}/Korisnik/DeleteUser/${id}`);

            dispatch({
                type: ActionType.OBRISI_KORISNIKA_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ActionType.OBRISI_KORISNIKA_ERROR,
                payload: error.message
            });
        }
    }
};