import Korisnik from "./Korisnik";
import Racun from "./Racun";
import StavkaMenija from "./StavkaMenija";

interface Porudzbina {
    id?: number;
    korisnikId: number;
    korisnik?: Korisnik;
    stavkaMenijaId: number;
    stavkaMenija?: StavkaMenija;
    racunId?: number;
    racun?: Racun;
}

export default Porudzbina;