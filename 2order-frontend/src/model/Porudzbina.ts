import Korisnik from "./Korisnik";
import Meni from "./Meni";
import Sto from "./Sto";

interface Porudzbina {
    id: number;
    korisnikId: number;
    korisnik: Korisnik;
    stavkaMenijaId: number;
    stavkaMenija: Meni;
    stoId: number;
    sto: Sto;
    sifra: string;
    vreme: Date;
}

export default Porudzbina;