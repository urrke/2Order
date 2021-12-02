import StavkaMenija from '../../model/StavkaMenija';
import { ActionType } from '../action-types'

interface StavkaIBrojPonavljanja {
    stavka: StavkaMenija;
    broj: number;
}

interface VratiStavkeIzRacuna {
    type: ActionType.VRATI_STAVKE_IZ_TRENUTNOG_RACUNA;
}

interface DodajStavkuURacun {
    type: ActionType.DODAJ_STAVKU_U_TRENUTNI_RACUN;
    payload: StavkaMenija;
}

interface ObrisiStavkuIzRacuna {
    type: ActionType.OBRISI_STAVKU_IZ_TRENUTNOG_RACUNA;
    payload: number;
}

interface DodajIznosURacun {
    type: ActionType.DODAJ_IZNOS_U_TRENUTNI_RACUN;
    payload: number;
}

interface VratiIznosIzRacuna {
    type: ActionType.VRATI_IZNOS_IZ_TRENUTNOG_RACUNA;
}

interface DodajRacun {
    type: ActionType.DODAJ_RACUN;
    payload: StavkaIBrojPonavljanja[];
}

interface VratiRacun {
    type: ActionType.VRATI_RACUN;
}

interface PostaviTrenutniSto {
    type: ActionType.POSTAVI_TRENUTNI_STO;
    payload: {
        id: number | null;
        naziv: string | null;
        imeKonobara: string | null;
    }
}

export type TrenutniRacunAction = VratiStavkeIzRacuna | DodajStavkuURacun | ObrisiStavkuIzRacuna | DodajIznosURacun 
| VratiIznosIzRacuna | DodajRacun | VratiRacun | PostaviTrenutniSto;