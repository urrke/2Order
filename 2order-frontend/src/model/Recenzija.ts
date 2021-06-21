import Korisnik from "./Korisnik";

interface Recenzija {
    id: number;
    ocena: number;
    komentar: string;
    datum: Date;
    korisnikId: number;
    korisnik: Korisnik;
}

export default Recenzija;