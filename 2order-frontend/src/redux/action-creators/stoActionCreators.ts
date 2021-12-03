import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import axios from 'axios'
import config from '../../app.config.json'
import { StoAction } from '../actions/stoActions'
import Sto from '../../model/Sto'
import Racun from '../../model/Racun'

export const vratiSveStolove = () => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.VRATI_SVE_STOLOVE_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Sto/vratiSveStolove`);

            dispatch({
                type: ActionType.VRATI_SVE_STOLOVE_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_SVE_STOLOVE_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiSto = (id: number) => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.VRATI_STO_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Sto/vratiSto/${id}`);

            dispatch({
                type: ActionType.VRATI_STO_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_STO_ERROR,
                payload: error.message
            });
        }
    }
};

export const vratiStoloveKonobara = (id: number) => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.VRATI_STOLOVE_KONOBARA_LOADING
        });

        try {
            const { data } = await axios.get(`${config.server}/Sto/vratiStoloveKonobara/${id}`);

            dispatch({
                type: ActionType.VRATI_STOLOVE_KONOBARA_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.VRATI_STOLOVE_KONOBARA_ERROR,
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
            const { data } = await axios.get(`${config.server}/Sto/vratiSveSlobodneIliZauzeteStolove/${slobodan}`);

            dispatch({
                type: ActionType.VRATI_SVE_SLOBODNE_ILI_ZAUZETE_STOLOVE_SUCCESS,
                payload: data
            });

        } catch (error: any) {
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
            const { data } = await axios.post(`${config.server}/Sto/dodajSto`, JSON.stringify(sto), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.DODAJ_STO_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.DODAJ_STO_ERROR,
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
            await axios.delete(`${config.server}/Sto/obrisiSto/${id}`);

            dispatch({
                type: ActionType.OBRISI_STO_SUCCESS,
                payload: id
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.OBRISI_STO_ERROR,
                payload: error.message
            });
        }
    }
};

export const obrisiStolove = (ids: number[]) => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.OBRISI_STOLOVE_LOADING
        });

        try {
            await axios.post(`${config.server}/Sto/obrisiStolove`, JSON.stringify(ids), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.OBRISI_STOLOVE_SUCCESS,
                payload: ids
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.OBRISI_STOLOVE_ERROR,
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
            await axios.put(`${config.server}/Sto/azurirajSto`, JSON.stringify(sto), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.AZURIRAJ_STO_SUCCESS,
                payload: sto
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.AZURIRAJ_STO_ERROR,
                payload: error.message
            });
        }
    }
};

export const azurirajStolove = (stolovi: Sto[]) => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.AZURIRAJ_STOLOVE_LOADING
        });

        try {
            await axios.put(`${config.server}/Sto/azurirajStolove`, JSON.stringify(stolovi), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.AZURIRAJ_STOLOVE_SUCCESS,
                payload: stolovi
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.AZURIRAJ_STOLOVE_ERROR,
                payload: error.message
            });
        }
    }
}

export const zauzmiIliOslobodiSto = (idStola: number, password: string) => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.ZAUZMI_ILI_OSLOBODI_STO_LOADING
        });

        try {
            const { data } = await axios.put(`${config.server}/Sto/zauzmiIliOslobodiSto/${idStola}`, JSON.stringify(password), {
                headers: { "Content-Type": "application/json" }
            });

            dispatch({
                type: ActionType.ZAUZMI_ILI_OSLOBODI_STO_SUCCESS,
                payload: data
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.ZAUZMI_ILI_OSLOBODI_STO_ERROR,
                payload: error.message
            });
        }
    }
}

export const azurirajPozicijuStola = (id: number, x: number, y: number) => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.AZURIRAJ_POZICIJU_STOLA,
            payload: {
                id: id,
                x: x,
                y: y
            }
        });
    };
}

export const postaviTrenutnuPorudzbinu = (idStola: number, racun: Racun) => {
    return async (dispatch: Dispatch<StoAction>) => {
        dispatch({
            type: ActionType.POSTAVI_TRENUTNU_PORUDZBINU,
            payload: {
                idStola,
                racun
            }
        });
    }; 
}