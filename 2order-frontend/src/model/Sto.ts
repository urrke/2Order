import Korisnik from './Korisnik';

interface Sto {
    id: number;
    brojMesta: number;
    slobodan: boolean;
    oznaka: string;
    x: number;
    y: number;
    konobarId: number;
    konobar: Korisnik;
}

export default Sto;