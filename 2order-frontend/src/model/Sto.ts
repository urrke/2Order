import Korisnik from './Korisnik'

interface Sto {
    id: number;
    korisnikId: number;
    korisnik: Korisnik;
    stavkaMenijaId: number;
    sifra: string;
    vreme: Date;
    adresa: string;
}

export default Sto;