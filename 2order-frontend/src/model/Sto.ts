import Korisnik from './Korisnik';
import Racun from './Racun';

interface Sto {
    id: number;
    brojMesta: number;
    slobodan: boolean;
    oznaka: string;
    x: number;
    y: number;
    konobarId: number;
    konobar: Korisnik;
    trenutnaPorudzbina?: Racun;
    sifra?: string;
}

export default Sto;