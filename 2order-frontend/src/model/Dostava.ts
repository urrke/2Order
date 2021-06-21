import Korisnik from "./Korisnik";
import Meni from "./Meni";
import Sto from "./Sto";

interface Dostava {
    id: number;
    korisnikId: number;
    korisnik: Korisnik;
    stavkaMenijaId: number;
    stavkaMenija: Meni;
    sifra: string;
    vreme: Date;
    adresa: string;
}

export default Dostava;