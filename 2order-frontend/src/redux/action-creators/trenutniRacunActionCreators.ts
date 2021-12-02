import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import { TrenutniRacunAction } from '../actions/trenutniRacunActions'
import StavkaMenija from '../../model/StavkaMenija';

interface StavkaIBrojPonavljanja {
    stavka: StavkaMenija;
    broj: number;
}

export const vratiStavkeIzRacuna = () => {
    return async (dispatch: Dispatch<TrenutniRacunAction>) => {
        dispatch({
            type: ActionType.VRATI_STAVKE_IZ_TRENUTNOG_RACUNA
        });
    }
};

export const dodajStavkuURacun = (stavka: StavkaMenija) => {
    return async (dispatch: Dispatch<TrenutniRacunAction>) => {
        dispatch({
            type: ActionType.DODAJ_STAVKU_U_TRENUTNI_RACUN,
            payload: stavka
        });
    }
};

export const obrisiStavkuIzRacuna = (id: number) => {
    return async (dispatch: Dispatch<TrenutniRacunAction>) => {
        dispatch({
            type: ActionType.OBRISI_STAVKU_IZ_TRENUTNOG_RACUNA,
            payload: id
        });
    }
};

export const dodajIznosURacun = (iznos: number) => {
    return async (dispatch: Dispatch<TrenutniRacunAction>) => {
        dispatch({
            type: ActionType.DODAJ_IZNOS_U_TRENUTNI_RACUN,
            payload: iznos
        });
    }
};

export const vratiIznosIzRacuna = () => {
    return async (dispatch: Dispatch<TrenutniRacunAction>) => {
        dispatch({
            type: ActionType.VRATI_IZNOS_IZ_TRENUTNOG_RACUNA,
        });
    }
};

export const dodajTrenutniRacun = (racun: StavkaIBrojPonavljanja[]) => {
    return async (dispatch: Dispatch<TrenutniRacunAction>) => {
        dispatch({
            type: ActionType.DODAJ_RACUN,
            payload: racun
        });
    }
};

export const vratiTrenutniRacun = () => {
    return async (dispatch: Dispatch<TrenutniRacunAction>) => {
        dispatch({
            type: ActionType.VRATI_RACUN,
        });
    }
};

export const postaviTrenutniSto = (id: number | null, naziv: string | null, imeKonobara: string | null) => {
    return async (dispatch: Dispatch<TrenutniRacunAction>) => {
        dispatch({
            type: ActionType.POSTAVI_TRENUTNI_STO,
            payload: {
                id: id,
                naziv: naziv,
                imeKonobara: imeKonobara
            }
        });
    };
}